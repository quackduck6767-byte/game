// lib/validations.ts
// Zod schemas for form validation and API request/response validation
import { z } from 'zod'

/**
 * User registration schema
 */
export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
})

export type RegisterInput = z.infer<typeof registerSchema>

/**
 * User login schema
 */
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
})

export type LoginInput = z.infer<typeof loginSchema>

/**
 * Post creation/update schema
 */
export const postSchema = z.object({
  content: z.string().min(1, 'Content is required').max(280, 'Content must be less than 280 characters'),
  scheduledAt: z.string().refine((val) => !isNaN(Date.parse(val)), 'Invalid date format'),
  socialAccountId: z.string().cuid('Invalid social account ID'),
})

export type PostInput = z.infer<typeof postSchema>

/**
 * Social account connection schema
 */
export const socialAccountSchema = z.object({
  platform: z.enum(['twitter', 'linkedin', 'facebook', 'instagram']),
  accessToken: z.string(),
  refreshToken: z.string().optional(),
  platformUserId: z.string().optional(),
  platformUsername: z.string().optional(),
})

export type SocialAccountInput = z.infer<typeof socialAccountSchema>
