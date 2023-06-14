import { Suspense } from 'react';
import Loading from './loading'
import Hero from '@/components/Hero'
import LandingInsights from '@/components/LandingInsights'
import NewsLetterSignUp from '@/components/NewsLetterSignUp'

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
