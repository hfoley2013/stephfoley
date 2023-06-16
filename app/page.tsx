import { Suspense } from 'react';
import Loading from './loading'
import Hero from '@/components/general/Hero'
import LandingInsights from '@/components/general/LandingInsights'
import NewsLetterSignUp from '@/components/general/NewsLetterSignUp'

export default function Home() {
  return (
    <main className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <Suspense fallback={<Loading />} >
        <Hero />      
      </Suspense>
      
      <LandingInsights />

      <NewsLetterSignUp />

    </main>
  )
}
