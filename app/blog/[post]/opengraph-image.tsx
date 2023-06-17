import { ImageResponse } from 'next/server'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import fetchPost from '@/utils/fetchPost'

// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 1200,
  height: 630,
}
type Props = {
  params: { post: string }
}

export const contentType = 'image/png'
 
export default async function ogImage({params}: Props) {
  const slug = params.post
  const post = await fetchPost(slug)
  
  return new ImageResponse(
    (
      <div tw="relative flex items-center justify-center w-full h-full">
        <div tw="absolute inset-0 flex">
          <Image 
            tw="flex flex-1"
            src={urlForImage(post.coverImage!).url()}
            alt={post.title!}
            width={size.width}
            height={size.height}
          />
          <div tw="absolute inset-0 z-10 flex bg-black bg-opacity-50"></div>
        </div>
        <div tw="flex flex-col text-neutral-50">
          <div tw="font-bold text-7xl">{post.title}</div>
          <div tw="flex flex-wrap items-center mt-6 space-x-10 text-4xl text-neutral-50"></div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
