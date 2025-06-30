import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className='flex h-[70vh] flex-col items-center justify-center gap-4 animate-fade-in'>
      <Loader2 className='animate-spin text-primary' size={48} />
      <p className='text-lg text-muted-foreground'>Chargement en cours...</p>
    </div>
  )
}
