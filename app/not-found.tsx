import { Button } from '@/src/shared/components/ui/button'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className='flex h-[80vh] flex-col items-center justify-center gap-6 text-center animate-fade-in'>
      <Image
        src='/logo/logo.svg'
        alt='Logo'
        width={200}
        height={50}
        className='mb-2'
      />
      <h1 className='text-5xl font-bold text-secondary'>404</h1>
      <p className='text-lg text-muted-foreground'>
        Oups, cette page n'existe pas ou plus.
      </p>
      <Button asChild size='lg' className='mt-2'>
        <a href='/'>Retour à l'accueil</a>
      </Button>
    </div>
  )
}
