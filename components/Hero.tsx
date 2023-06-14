import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

function Hero({ }: Props) {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

      <div className="grid gap-4 md:grid-cols-2 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Hello there! I&apos;m <span className="text-blue-600">Stephiney</span></h1>
          <p className="mt-3 text-lg text-gray-800 sm:hidden dark:text-gray-400">Come join me on your tech adventure!</p>
          <p className="hidden mt-3 text-lg text-gray-800 sm:flex dark:text-gray-400">And if you found your way to my little slice of the internet, you&apos;re probably a business owner or entrepreneur (or flirting with the idea of becoming one.).</p>


          <div className="relative mt-3 sm:hidden">
            <Image className="w-full rounded-md" src="/steph_headshot.jpeg" alt="A headshot of Stephiney Foley, a Technical Product Manager, Tech Though Leader, Mother, and Entreprenuer." width={200} height={200} />
          </div>

          <div className="grid w-full gap-3 mt-3 sm:inline-flex">
            <Link className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-center text-white transition bg-blue-600 border border-transparent rounded-md gap-x-3 hover:bg-blue-700 lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800" href="/blog">
              Read My Blog!
              <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
            </Link>
            <Link className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" href="/about">
              About Me
            </Link>
          </div>

        </div>


        <div className="relative hidden ml-4 sm:flex">
          <Image className="w-full rounded-md" src="/steph_headshot.jpeg" alt="A headshot of Stephiney Foley, a Technical Product Manager, Tech Though Leader, Mother, and Entreprenuer." width={200} height={200} />
        </div>

      </div>

    </div>
  )
}

export default Hero
