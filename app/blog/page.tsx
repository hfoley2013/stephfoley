import React from 'react'
import BlogCard from '@/components/blog/BlogCard'
import { fetchPosts } from '@/utils/fetchPosts'

export const metadata = {
  title: "Blog"
}

export default async function Blog() {
  const posts = await fetchPosts()
  
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-y-16">
        {posts?.map((post) => (
          <BlogCard 
            key={post._id}
            post={post}
          />
        ))}
      </div>
    </div>
  )
}
