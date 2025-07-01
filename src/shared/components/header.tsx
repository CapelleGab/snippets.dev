'use client'

import { LogOut, User } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signOut, useSession } from '../libs/auth-client'
import { cn } from '../libs/utils'
import { getInitials } from '../utils/strings'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Button, buttonVariants } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
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
    <header className='flex items-center justify-between gap-4 py-4'>
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
      <AuthButton />
    </header>
  )
}

export const AuthButton = () => {
  const router = useRouter()

  const { data: session, isPending } = useSession()

  if (isPending) {
    return <Skeleton className='h-10 w-20' />
  }

  if (!session) {
    return (
      <div className='flex items-center gap-2'>
        <Link
          href='/auth/signin'
          className={cn(
            buttonVariants({ size: 'sm', variant: 'outline' }),
            'px-5'
          )}
        >
          Sign In
        </Link>
        <Link
          href='/auth/signup'
          className={cn(
            buttonVariants({ size: 'sm', variant: 'secondary' }),
            'px-5'
          )}
        >
          Sign Up
        </Link>
      </div>
    )
  }

  const handleSignOut = async () => {
    await signOut()
    router.push('/auth/signin')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='flex items-center gap-2 h-fit py-1'>
          <Avatar className='size-8'>
            <AvatarFallback className='text-xs text-muted-foreground'>
              {getInitials(session.user.name || session.user.email)}
            </AvatarFallback>
          </Avatar>
          <span className='text-sm font-medium'>
            {session.user.name || session.user.email}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-56'>
        <DropdownMenuItem asChild>
          <Link href='/dashboard' className='flex items-center gap-2'>
            <User className='size-4' />
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut className='size-4' />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
