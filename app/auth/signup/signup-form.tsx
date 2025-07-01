'use client'

import { SignupFormData, signupSchema } from '@/src/schemas/authSchemas'
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
import { signUp } from '@/src/shared/libs/auth-client'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export default function SignupForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = async (values: SignupFormData) => {
    setIsLoading(true)

    await signUp.email(
      {
        email: values.email,
        name: values.name,
        password: values.password,
      },
      {
        onSuccess: () => {
          toast.success('Account created successfully!')
          router.push('/dashboard')
          setIsLoading(false)
        },
        onError: error => {
          toast.error(error.error.message || 'Failed to create account')
          setIsLoading(false)
        },
      }
    )
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <div className='grid grid-cols-2 gap-4'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-sm font-medium text-foreground'>
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    type='text'
                    placeholder='John Doe'
                    className='h-10 border-border/50 focus:border-border transition-colors'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

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
              <FormLabel className='text-sm font-medium text-foreground'>
                Password
              </FormLabel>
              <FormControl>
                <Input
                  type='password'
                  placeholder='Create a strong password'
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
              Creating account...
            </div>
          ) : (
            <div className='flex items-center gap-2'>
              Create account
              <ArrowRight className='w-4 h-4' />
            </div>
          )}
        </Button>
      </form>
    </Form>
  )
}
