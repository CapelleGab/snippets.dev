'use server'

import { auth } from '@/src/shared/libs/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function signoutAction() {
  try {
    await auth.api.signOut({
      headers: await headers(),
    })

    // Rediriger vers la page d'accueil après déconnexion
    redirect('/')
  } catch (error) {
    console.error('Signout error:', error)
    // Même en cas d'erreur, rediriger vers la page d'accueil
    redirect('/')
  }
}
