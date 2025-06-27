import { ThemeProvider } from '@/src/shared/components/theme-provider'
import { Toaster } from '@/src/shared/components/ui/sonner'
import { cn } from '@/src/shared/lib/utils'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Snippets.dev',
  description:
    'Snippets.dev is a platform for sharing and discovering code snippets.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning className='h-full'>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          'h-full antialiased'
        )}
      >
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
