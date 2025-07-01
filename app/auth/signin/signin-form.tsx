'use client'

import { SigninFormData, signinSchema } from '@/src/schemas/authSchemas'
import { Button } from '@/src/shared/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/src/shared/components/ui/form'
import { Input } from '@/src/shared/components/ui/input'
import { signIn } from '@/src/shared/libs/auth-client'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export default function SigninForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<SigninFormData>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (values: SigninFormData) => {
    setIsLoading(true)
    await signIn.email(
      {
        email: values.email,
        password: values.password,
      },
      {
        onSuccess: () => {
          toast.success('Welcome back!')
          router.push('/dashboard')
          setIsLoading(false)
        },
        onError: error => {
          toast.error(error.error.message || 'Failed to sign in')
          setIsLoading(false)
        },
      }
    )
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-sm font-medium text-foreground'>
                Email address
              </FormLabel>
              <FormControl>
                <Input
                  type='email'
                  placeholder='john@example.com'
                  className='h-10 border-border/50 focus:border-border transition-colors'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <div className='flex items-center justify-between'>
                <FormLabel className='text-sm font-medium text-foreground'>
                  Password
                </FormLabel>
                <Link
                  href='/auth/forgot-password'
                  className='text-xs text-muted-foreground hover:text-foreground underline-offset-4 hover:underline'
                >
                  Forgot password?
                </Link>
              </div>
              <FormControl>
                <Input
                  type='password'
                  placeholder='Enter your password'
                  className='h-10 border-border/50 focus:border-border transition-colors'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type='submit'
          className='w-full h-10 bg-foreground text-background hover:bg-foreground/90 transition-colors'
          disabled={isLoading}
        >
          {isLoading ? (
            <div className='flex items-center gap-2'>
              <div className='w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin' />
              Signing in...
            </div>
          ) : (
            <div className='flex items-center gap-2'>
              Sign in
              <ArrowRight className='w-4 h-4' />
            </div>
          )}
        </Button>
      </form>
    </Form>
  )
}
