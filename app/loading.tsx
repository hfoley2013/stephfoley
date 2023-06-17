import React from 'react'

type Props = {}

export default function Loading({ }: Props) {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 animate-pulse">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 className="block w-2/3 h-8 text-3xl font-bold bg-gray-300 animate-pulse" />
          <p className="h-6 mt-3 text-lg bg-gray-300 animate-pulse" />
          <p className="hidden h-6 mt-3 text-lg bg-gray-300 animate-pulse" />

          <div className="relative mt-3 bg-gray-300 sm:hidden h-60" />

          <div className="grid w-full gap-3 mt-3 sm:inline-flex">
            <div className="inline-flex items-center justify-center w-40 h-10 bg-blue-600 rounded-md animate-pulse" />
            <div className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800 bg-gray-300 h-10 w-40 animate-pulse" />
          </div>
        </div>

        <div className="relative hidden ml-4 sm:flex">
          <div className="w-full bg-gray-300 rounded-md h-200 animate-pulse" />
        </div>
      </div>
    </div>
  )
}
