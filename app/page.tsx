import { Button } from '@/src/shared/components/ui/button'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/shared/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { FEATURES, LANGUAGES } from '@/src/constants/constants'

export default function Home() {
  return (
    <div className='flex flex-col gap-18 py-12 bg-[#08090a] min-h-screen'>
      {/* Hero */}
      <section className='flex flex-col items-center text-center gap-8 pt-20 pb-24 animate-fade-in'>
        <Image
          src='/logo/logo.svg'
          alt='Snippets.dev Logo'
          width={180}
          height={40}
          priority
          className='mx-auto mb-4'
        />
        <h1 className='text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight max-w-4xl'>
          La nouvelle génération
          <br />
          <span className='bg-gradient-to-r from-[#5e69d1] to-[#b0b3c7] bg-clip-text text-transparent'>
            de gestion de snippets
          </span>
        </h1>
        <p className='text-xl md:text-2xl text-[#b0b3c7] max-w-2xl mx-auto font-light'>
          Organisez, partagez et retrouvez vos extraits de code à la vitesse de
          la lumière.
        </p>
        <Button
          size='lg'
          className='mt-4 px-10 py-4 text-lg font-semibold bg-[#5e69d1] hover:bg-[#6d77e0] text-white shadow-xl transition-all'
        >
          Commencer
        </Button>
        <div className='flex flex-wrap justify-center gap-6 mt-12 opacity-70'>
          {Object.entries(LANGUAGES).map(([key, value]) => (
            <Link
              key={key}
              href={value}
              target='_blank'
              className='uppercase text-[#b0b3c7] tracking-widest text-xs md:text-sm font-semibold'
            >
              {key}
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section
        id='features'
        className='flex flex-col items-center gap-12 animate-fade-in-up'
      >
        <h2 className='text-3xl font-bold text-white mb-2'>Fonctionnalités</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl'>
          {FEATURES.map(feature => (
            <Card
              key={feature.title}
              className='group border-0 bg-white/5 backdrop-blur-md hover:scale-[1.03] hover:shadow-2xl transition-transform duration-200 shadow-lg'
            >
              <CardHeader className='flex flex-col items-center gap-2'>
                <span className='text-4xl mb-2 text-[#5e69d1]'>
                  {feature.icon}
                </span>
                <CardTitle className='text-xl text-white font-semibold text-center'>
                  {feature.title}
                </CardTitle>
                <CardDescription className='text-[#b0b3c7] text-center text-base font-light'>
                  {feature.desc}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
