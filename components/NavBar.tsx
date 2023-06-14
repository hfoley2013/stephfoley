'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

function NavBar({ }: Props) {
  
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [isLinkClicked, setIsLinkClicked] = useState(false)

  useEffect(() => {
    if (isLinkClicked) {
      setIsSideBarOpen(false)
      setIsLinkClicked(false)
    }
  }, [isLinkClicked])

  const handleToggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen)
    setIsLinkClicked(false)
  }

  return (
    <header className="sticky inset-x-0 top-0 z-50 flex flex-wrap w-full py-4 text-sm bg-gray-100 sm:justify-start sm:flex-nowrap dark:bg-gray-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <div className="flex items-center justify-between">
          <Link className="inline-flex items-center text-xl font-semibold gap-x-2 dark:text-white" onClick={() => setIsLinkClicked(true)} href="/">
            <div className="relative w-10 h-auto">
              <Image src="/xie_char.png" alt="Chinese calligraphy of Xie, Thank You." width={40} height={40}/>
            </div>
            Steph Foley
          </Link>
          <div className="sm:hidden">
            <button type="button" onClick={handleToggleSideBar} className="inline-flex items-center justify-center gap-2 p-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hs-collapse-toggle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-image-and-text-1" aria-controls="navbar-image-and-text-1" aria-label="Toggle navigation">
              <svg className="w-4 h-4 hs-collapse-open:hidden" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
              <svg className="hidden w-4 h-4 hs-collapse-open:block" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div id="navbar-image-and-text-1" className={`overflow-hidden transition-all duration-300 hs-collapse basis-full grow sm:block ${isSideBarOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            <Link className="font-medium text-blue-500" onClick={() => setIsLinkClicked(true)} href="/" aria-current="page" >Home</Link>
            <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" onClick={() => setIsLinkClicked(true)} href="/blog">Blog</Link>
             <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" onClick={() => setIsLinkClicked(true)} href="/about">About</Link>
             <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" onClick={() => setIsLinkClicked(true)} href="/contact">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
