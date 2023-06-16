'use client'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { form } from 'sanity/desk'

type Props = {}

function Contact({ }: Props) {
  
  type Inputs = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    details: string,
  }
  
  const { 
    register, 
    handleSubmit, 
  } = useForm<Inputs>()
  
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const senderEmail = formData.email
    const subject = `${formData.firstName} ${formData.lastName}`
    const body = `${formData.details} (${senderEmail})`
    const emailLink = `mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=${subject}&body=${body}`;
    window.location.href = emailLink;
  }
  
  return (
    <main className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
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

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4">

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="border border-gray-400 rounded-md">
                      <label htmlFor="hs-firstname-contacts-1" className="sr-only">First Name</label>
                      <input {...register("firstName")}type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="First Name" />
                    </div>

                    <div className="border border-gray-400 rounded-md">
                      <label htmlFor="hs-lastname-contacts-1" className="sr-only">Last Name</label>
                      <input {...register("lastName")} type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Last Name" />
                    </div>
                  </div>


                  <div className="border border-gray-400 rounded-md">
                    <label htmlFor="hs-email-contacts-1" className="sr-only">Email</label>
                    <input {...register("email")} type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Email" />
                  </div>

                  <div className="border border-gray-400 rounded-md">
                    <label htmlFor="hs-phone-number-1" className="sr-only">Phone Number</label>
                    <input {...register("phoneNumber")} type="text" name="hs-phone-number-1" id="hs-phone-number-1" className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Phone Number" />
                  </div>

                  <div className="border border-gray-400 rounded-md">
                    <label htmlFor="hs-about-contacts-1" className="sr-only">Details</label>
                    <textarea {...register("details")} id="hs-about-contacts-1" name="hs-about-contacts-1" rows={4} className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Details"></textarea>
                  </div>
                </div>


                <div className="grid mt-4">
                  <button type="submit" className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-center text-white transition bg-blue-600 border border-transparent rounded-md gap-x-3 hover:bg-blue-700 lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800">Send inquiry</button>
                </div>

                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-500">
                    I&apos;ll get back to you in 1-2 business days.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
