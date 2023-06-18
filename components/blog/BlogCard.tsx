import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Post } from '@/sanity/interfaces/Post'
import { urlForImage } from '@/sanity/lib/image'

type Props = {
  post?: Post
}

export default function BlogCard({post}: Props) {
  return (
    <Link className="overflow-hidden group rounded-xl" href={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post?.slug}`}>
    <div className="sm:flex">
      <div className="relative flex-shrink-0 w-full overflow-hidden rounded-xl sm:w-56 h-44">
        <Image 
          className="absolute top-0 left-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-xl" 
          src={urlForImage(post?.coverImage.asset).url()} 
          alt=""
          fill
        />
      </div>

      <div className="px-4 mt-4 grow sm:mt-0 sm:ml-6 sm:px-0">
        <h3 className="text-xl font-semibold text-darkFont group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
          {post?.title}
        </h3>
        <p className="mt-3 text-bodyFont dark:text-gray-400">
          {post?.excerpt}
        </p>
        <p className="mt-4 inline-flex items-center gap-x-1.5 text-customBlue decoration-2 hover:underline font-medium">
          Read more
          <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </p>
      </div>
    </div>
  </Link>
  )
}
