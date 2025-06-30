import { LogOut } from 'lucide-react'
import { headers } from 'next/headers'
import Link from 'next/link'
import { Suspense } from 'react'
import { auth } from '../libs/auth'
import { getUser } from '../libs/auth-server'
import { cn } from '../libs/utils'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Button, buttonVariants } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Skeleton } from './ui/skeleton'

const NAV_ITEMS = [
  {
    label: 'Explore',
    href: '/explore',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export const Header = () => {
  return (
    <header className='flex items-center justify-between gap-4 py-4 '>
      <Link href='/' className='text-2xl font-bold'>
        Snippets.dev
      </Link>
      <div className='flex items-center gap-4'>
        {NAV_ITEMS.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className='hover:border-b-2 ease-in-out'
          >
            {item.label}
          </Link>
        ))}
      </div>
      <Suspense fallback={<Skeleton className='h-10 w-20' />}>
        <AuthButton />
      </Suspense>
    </header>
  )
}

export const AuthButton = async () => {
  const user = await getUser()

  const handleLogout = async () => {
    'use server'
    await auth.api.signOut({
      headers: await headers(),
    })
  }

  if (!user) {
    return (
      <Link
        href='/auth/signup'
        className={cn(
          buttonVariants({ size: 'sm', variant: 'outline' }),
          'px-5'
        )}
      >
        SignUp
      </Link>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='sm'>
          <Avatar className='size-6'>
            <AvatarFallback>
              {user.name?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <p className='text-sm'>{user.name}</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className='cursor-pointer' asChild>
          <form>
            <button
              formAction={handleLogout}
              className='flex items-center gap-2 w-full'
            >
              <LogOut className='size-4' />
              Logout
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
