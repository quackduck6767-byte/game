// app/api/posts/route.ts
// API routes for managing scheduled posts
import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { postSchema } from '@/lib/validations'

// GET /api/posts - Fetch all posts for the authenticated user
export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const posts = await prisma.post.findMany({
      where: { userId: session.user.id },
      include: {
        socialAccount: {
          select: {
            id: true,
            platform: true,
            platformUsername: true,
          }
        }
      },
      orderBy: { scheduledAt: 'desc' },
    })

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

// POST /api/posts - Create a new scheduled post
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const validation = postSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: validation.error.errors },
        { status: 400 }
      )
    }

    const { content, scheduledAt, socialAccountId } = validation.data

    // Verify the social account belongs to the user
    const socialAccount = await prisma.socialAccount.findFirst({
      where: {
        id: socialAccountId,
        userId: session.user.id,
      },
    })

    if (!socialAccount) {
      return NextResponse.json(
        { error: 'Social account not found' },
        { status: 404 }
      )
    }

    const post = await prisma.post.create({
      data: {
        userId: session.user.id,
        content,
        scheduledAt: new Date(scheduledAt),
        socialAccountId,
        status: 'scheduled',
      },
      include: {
        socialAccount: {
          select: {
            platform: true,
            platformUsername: true,
          }
        }
      }
    })

    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}
