import { PortableText } from '@portabletext/react'
import { PortableTextComponents } from '@portabletext/react'
import PostHeader from '@/components/blog/PostHeader'
import Link from 'next/link'
import React from 'react'
import fetchPost from '@/utils/fetchPost'

type Props = {
  params: { post: string }
}

export default async function Post({ params }: Props) {
  const slug = params.post
  const post = await fetchPost(slug)

  const components: PortableTextComponents = {
    block: {
      h2: ({children}) => <h2 className="text-lg font-bold md:text-xl dark:text-white">{children}</h2>,
      h3: ({children}) => <h3 className="font-bold text-md md:text-lg dark:text-white">{children}</h3>,
      blockquote: ({children}) => {
        return (
        <blockquote 
          className="p-4 italic text-center text-gray-600 border-gray-500 border-1-4 text-md sm:px-7 md:text-lg md:leading-normal xl:text-lg xl:leading-normal dark:text-gray-200"
        >
          {children}
        </blockquote>
        )
      },
    },
    marks: {
      em: ({children}) => <em className="italic font-semibold">{children}</em>,
      strong: ({children}) => <strong className="font-bold">{children}</strong>,
      link: ({value, children}) => {
        const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
        return (
          <Link 
            href={value?.href} 
            target={target} 
            className="font-medium text-blue-600 decoration-2 hover:underline" 
          >
            {children}
          </Link>
        )
      },
    },
  }

  return (
    <div className="max-w-3xl px-4 pt-6 pb-12 mx-auto lg:pt-10 sm:px-6 lg:px-8">
      <PostHeader 
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
        author={post.author}
      />
      <div className="space-y-5 md:space-y-8">
        <h1 className="text-2xl font-bold md:text-3xl dark:text-white">{post.title}</h1>
        <PortableText
          value={post?.content}
          components={components}
        />
      </div>
    </div>
  )
}
