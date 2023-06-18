import React from 'react'
import ContactForm from '@/components/general/ContactForm'

export const metadata = {
  title: "Contact"
}

export default function Contact() {
  
  return (
    <main className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-lightRouge">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto lg:max-w-5xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              Contact Me
            </h1>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              I&apos;d love to talk about I can help you.
            </p>
          </div>

          <div className="grid items-center gap-6 mt-12">

            <div className="flex flex-col p-4 border rounded-xl sm:p-6 lg:p-8 dark:border-gray-700">
              <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
                Fill in the form
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
