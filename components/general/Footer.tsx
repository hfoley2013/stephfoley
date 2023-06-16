import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

function Footer({ }: Props) {
  return (
    <footer className="py-3 mt-auto">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

        <div className="grid items-center grid-cols-1 gap-5 text-center md:flex md:justify-between">
          <div className="mx-auto sm:mx-0">
            <Link className="flex-none text-xl font-semibold text-black center dark:text-white" href="/" aria-label="Brand">
              <Image src="/logo_negative.png" alt="Chinese calligraphy of Xie, Thank You." width={40} height={40} className="rounded-md"/>
            </Link>
          </div>


          <ul className="text-center">
            <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
              <Link className="inline-flex text-sm text-gray-500 gap-x-2 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200" href="/">
                Home
              </Link>
            </li>
            <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
              <Link className="inline-flex text-sm text-gray-500 gap-x-2 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200" href="/blog">
                Blog
              </Link>
            </li>
            <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
              <Link className="inline-flex text-sm text-gray-500 gap-x-2 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200" href="/about">
                About
              </Link>
            </li>
            <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
              <Link className="inline-flex text-sm text-gray-500 gap-x-2 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200" href="/contact">
                Contact
              </Link>
            </li>
          </ul>



          <div className="space-x-2 md:text-right">
            <Link className="inline-flex items-center justify-center w-8 h-8 text-center text-gray-500 transition rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900" href="https://www.linkedin.com/in/stephiney/">
              <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 448 512">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </Link>
            <Link className="inline-flex items-center justify-center w-8 h-8 text-center text-gray-500 transition rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900" href="https://twitter.com/StephFoley16">
              <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </Link>
          </div>

        </div>

      </div>
    </footer >
  )
}

export default Footer
