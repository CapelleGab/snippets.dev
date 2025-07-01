import { Button } from '@/src/shared/components/ui/button'
import { Github } from 'lucide-react'
import Link from 'next/link'
import SignupForm from './signup-form'

export default function SignupPage() {
  return (
    <div className='min-h-[calc(100vh-100px)] flex items-center justify-center px-4'>
      <div className='w-full max-w-6xl flex items-center justify-center gap-16'>
        {/* Left side - Form */}
        <div className='w-full max-w-md'>
          <div className='text-center mb-8'>
            <h1 className='text-3xl font-semibold tracking-tight text-foreground'>
              Create your account
            </h1>
            <p className='mt-2 text-sm text-muted-foreground'>
              Join thousands of developers sharing code snippets
            </p>
          </div>

          <SignupForm />

          <div className='relative mt-6'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-border/50' />
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
              <span className='bg-background px-2 text-muted-foreground'>
                Or continue with
              </span>
            </div>
          </div>

          <Button
            variant='outline'
            className='w-full h-10 mt-4 border-border/50 hover:bg-muted/50 transition-colors'
            disabled
          >
            <Github className='w-4 h-4 mr-2' />
            GitHub
          </Button>

          <div className='text-center mt-6'>
            <p className='text-sm text-muted-foreground'>
              Already have an account?{' '}
              <Link
                href='/auth/signin'
                className='font-medium text-foreground hover:underline underline-offset-4'
              >
                Sign in
              </Link>
            </p>
          </div>

          <div className='text-center mt-4'>
            <p className='text-xs text-muted-foreground'>
              By creating an account, you agree to our{' '}
              <Link
                href='/terms'
                className='underline underline-offset-4 hover:text-foreground'
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href='/privacy'
                className='underline underline-offset-4 hover:text-foreground'
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        {/* Right side - Visual */}
        <div className='hidden lg:block w-full max-w-md bg-muted/30 rounded-2xl p-8'>
          <div className='text-center space-y-6'>
            <div className='w-32 h-32 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center'>
              <div className='w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center'>
                <div className='w-8 h-8 bg-primary/20 rounded-xl' />
              </div>
            </div>
            <div>
              <h2 className='text-2xl font-semibold text-foreground'>
                Share your code with the world
              </h2>
              <p className='mt-3 text-muted-foreground leading-relaxed'>
                Create, organize, and share your code snippets with developers
                worldwide. Build your portfolio and help others learn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
