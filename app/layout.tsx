import { Header } from '@/src/shared/components/header'
import { ThemeProvider } from '@/src/shared/components/theme-provider'
import { Toaster } from '@/src/shared/components/ui/sonner'
import { cn } from '@/src/shared/libs/utils'
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
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(geistSans.variable, geistMono.variable, 'antialiased')}
      >
        <ThemeProvider>
          <main className='mx-auto max-w-screen-lg'>
            <Header />
            {children}
            <Toaster />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
