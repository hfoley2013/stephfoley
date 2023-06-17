import React from 'react'
import { FeaturedPost } from './FeaturedPost'
import fetchFeaturedPosts from '@/utils/fetchFeaturedPosts'


export default async function FeaturedPosts() {
  const featuredPosts = await fetchFeaturedPosts()

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto mb-10 text-center lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Featured</h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Stay in the know with insights into the tech industry.</p>
      </div>
      {featuredPosts.length > 2 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((featuredPost) => (
            <FeaturedPost key={featuredPost._id} featuredPost={featuredPost} />
          ))}
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {featuredPosts.map((featuredPost) => (
            <FeaturedPost key={featuredPost._id} featuredPost={featuredPost} />
          ))}
        </div>
      )}
    </div>
  )
}
