import { headers } from 'next/headers'
import { auth } from './auth'

export const getSession = async () => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    })
    return session
  } catch (error) {
    console.error('Error getting session:', error)
    return null
  }
}

export const getUser = async () => {
  const session = await getSession()
  return session?.user || null
}
