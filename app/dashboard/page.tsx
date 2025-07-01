import { Badge } from '@/src/shared/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/shared/components/ui/card'
import { getUser } from '@/src/shared/libs/auth-server'
import { CalendarDays, Github, Mail, User } from 'lucide-react'
import { unauthorized } from 'next/navigation'

export default async function DashboardPage() {
  const user = await getUser()

  if (!user) {
    return unauthorized()
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-8'>
        <h1 className='text-4xl font-bold mb-2'>Dashboard</h1>
        <p className='text-muted-foreground'>
          Welcome back, {user.name || user.email}!
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <User className='w-5 h-5' />
              Profile Information
            </CardTitle>
            <CardDescription>Your account details</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex items-center gap-2'>
              <Mail className='w-4 h-4 text-muted-foreground' />
              <span className='text-sm'>{user.email}</span>
            </div>

            {user.name && (
              <div className='flex items-center gap-2'>
                <User className='w-4 h-4 text-muted-foreground' />
                <span className='text-sm'>{user.name}</span>
              </div>
            )}

            {(user as any).githubLink && (
              <div className='flex items-center gap-2'>
                <Github className='w-4 h-4 text-muted-foreground' />
                <a
                  href={(user as any).githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-blue-600 hover:underline'
                >
                  GitHub Profile
                </a>
              </div>
            )}

            <div className='flex items-center gap-2'>
              <CalendarDays className='w-4 h-4 text-muted-foreground' />
              <span className='text-sm'>
                Joined {new Date(user.createdAt).toLocaleDateString()}
              </span>
            </div>

            <div className='flex items-center gap-2'>
              <Badge variant={user.emailVerified ? 'default' : 'secondary'}>
                {user.emailVerified ? 'Email Verified' : 'Email Not Verified'}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
            <CardDescription>Your activity overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='space-y-2'>
              <div className='flex justify-between'>
                <span className='text-sm text-muted-foreground'>
                  Snippets Created
                </span>
                <span className='text-sm font-medium'>0</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-sm text-muted-foreground'>Favorites</span>
                <span className='text-sm font-medium'>0</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-sm text-muted-foreground'>Views</span>
                <span className='text-sm font-medium'>0</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Start sharing your code snippets</CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-sm text-muted-foreground mb-4'>
              Ready to share your first code snippet? Create your first snippet
              and start building your portfolio.
            </p>
            <div className='space-y-2'>
              <button className='w-full text-left text-sm text-blue-600 hover:underline'>
                → Create your first snippet
              </button>
              <button className='w-full text-left text-sm text-blue-600 hover:underline'>
                → Explore community snippets
              </button>
              <button className='w-full text-left text-sm text-blue-600 hover:underline'>
                → Customize your profile
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
