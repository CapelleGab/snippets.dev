import { z } from 'zod'

export const signupSchema = z.object({
  name: z.string(),
  email: z.string().email('Please enter a valid email address').toLowerCase(),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

export const signinSchema = z.object({
  email: z.string().email('Please enter a valid email address').toLowerCase(),
  password: z.string().min(1, 'Password is required'),
})

export type SignupFormData = z.infer<typeof signupSchema>
export type SigninFormData = z.infer<typeof signinSchema>
