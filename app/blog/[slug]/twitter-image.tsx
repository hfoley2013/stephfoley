/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server'
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

export default async function ogImage({ params }: Props) {
  const slug = params.post
  const post = await fetchPost(slug)

  return new ImageResponse(
    (
      <div tw="flex items-center justify-center w-full h-full">
          <img 
            tw="flex flex-1"
            src={urlForImage(post.coverImage!).url()}
            alt={post.title!}
            width={size.width}
            height={size.height}
          />
      </div>
    ),
    {
      ...size,
    }
  )
}
