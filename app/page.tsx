import { Suspense } from 'react';
import Loading from './loading'
import Hero from '@/components/general/Hero'
import LandingInsights from '@/components/general/LandingInsights'
import NewsLetterSignUp from '@/components/general/NewsLetterSignUp'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Suspense fallback={<Loading />} >
        <Hero />      
      </Suspense>
      
      <LandingInsights />

      <NewsLetterSignUp />

    </main>
  )
}
