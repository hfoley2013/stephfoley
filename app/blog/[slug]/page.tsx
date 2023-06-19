import { PortableText } from '@portabletext/react'
import { PortableTextComponents } from '@portabletext/react'
import { PostImage } from '@/components/blog/PostImage'
import PostHeader from '@/components/blog/PostHeader'
import Link from 'next/link'
import React from 'react'
import fetchPost from '@/utils/fetchPost'
import { urlForImage } from '@/sanity/lib/image'
import fetchSlugs from '@/utils/fetchSlugs'
import { Post } from '@/sanity/interfaces/Post'

// Image metadata
const size = {
  width: 1200,
  height: 630,
}

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = await fetchSlugs()
  const slugRoutes = slugs.map((slug) => slug.slug.current)
  
  return slugRoutes.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const slug = params.slug
  const post = await fetchPost(slug)

  try {
    if (!post) {
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      }
    }
    return {
      title: post.title,
      description: post.excerpt,
      alternate: {
        canonical: `/blog/${post.slug}`
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        creator: ['Stephiney Foley', 'Steph Foley'],
        images: [
          {
            url: urlForImage(post.coverImage!).url(),
            width: size.width!,
            height: size.height!,
            alt: post.title,
          }
        ],
        url: `https://wwww.stephfoley.com/blog/${slug}`,
      },
      openGraph: {
        title: post.title,
        description: post.excerpt,
        url: `https://wwww.stephfoley.com/blog/${slug}`,
        images: [
          {
            url: urlForImage(post.coverImage!).url(),
            width: size.width!,
            height: size.height!,
            alt: post.title!,
          }
        ],
      },
    }
  } catch (error) {
    console.log(error)
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    }
  }

}

export default async function Post({ params }: Props) {
  const slug = params.slug
  const post = await fetchPost(slug)

  const components: PortableTextComponents = {
    types: {
      image: PostImage,
    },
    block: {
      h2: ({ children }) => <h2 className="text-lg font-bold md:text-xl dark:text-white">{children}</h2>,
      h3: ({ children }) => <h3 className="font-bold text-md md:text-lg dark:text-white">{children}</h3>,
      blockquote: ({ children }) => {
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
      highlight: ({ children }) => <em className="bg-yellow-300">{children}</em>,
      em: ({ children }) => <em className="italic font-semibold">{children}</em>,
      strong: ({ children }) => <strong className="font-bold">{children}</strong>,
      link: ({ value, children }) => {
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
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-lightRouge">
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
