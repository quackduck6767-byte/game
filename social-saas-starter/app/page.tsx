// app/page.tsx
// Landing page for the SaaS product
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock, BarChart3, Shield } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">
          Automate Your Social Media
          <span className="text-primary"> Scheduling</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Schedule posts across Twitter, LinkedIn, Facebook, and Instagram from one dashboard. 
          Save time and maintain consistent engagement with your audience.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg" className="text-lg px-8">
              Get Started Free
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" size="lg" className="text-lg px-8">
              Sign In
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <Card>
          <CardHeader>
            <Calendar className="w-10 h-10 text-primary mb-2" />
            <CardTitle>Schedule Posts</CardTitle>
            <CardDescription>
              Plan your content calendar weeks in advance
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Clock className="w-10 h-10 text-primary mb-2" />
            <CardTitle>Auto-Publish</CardTitle>
            <CardDescription>
              Posts go live automatically at scheduled times
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <BarChart3 className="w-10 h-10 text-primary mb-2" />
            <CardTitle>Multi-Platform</CardTitle>
            <CardDescription>
              Manage all social accounts from one place
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Shield className="w-10 h-10 text-primary mb-2" />
            <CardTitle>Secure & Reliable</CardTitle>
            <CardDescription>
              Enterprise-grade security for your data
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-muted rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to streamline your social media?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Join thousands of marketers and business owners who save hours every week with our automation tools.
        </p>
        <Link href="/signup">
          <Button size="lg" className="text-lg px-8">
            Start Your Free Trial
          </Button>
        </Link>
      </section>
    </div>
  )
}
