import React from 'react'
import Link from 'next/link'
import Image  from 'next/image'
import { Post } from '@/sanity/interfaces/Post'
import { urlForImage } from '@/sanity/lib/image'

type Props = {
  featuredPost: Post
}

export const FeaturedPost = ({featuredPost}: Props) => {
  return (
    <Link 
      className="overflow-hidden group rounded-xl"
      href={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${featuredPost.slug}`}
    >
    <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
      <Image 
        className="absolute top-0 left-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-xl"
        src={urlForImage(featuredPost.coverImage).url()}
        alt={featuredPost.title!}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
        {isSponsored? "Sponsored" : "" }
      </span> */}
    </div>

    <div className="mt-7">
      <h3 className="text-xl font-semibold text-darkFont-800 group-hover:text-gray-600 dark:text-gray-200">
        {featuredPost.title}
      </h3>
      <p className="mt-3 text-bodyFont dark:text-gray-200">
        {featuredPost.excerpt}
      </p>
      <p className="mt-5 inline-flex items-center gap-x-1.5 text-customBlue decoration-2 group-hover:underline font-medium">
        Read more
        <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </p>
    </div>
  </Link>
  )
}
