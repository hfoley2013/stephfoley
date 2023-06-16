import { PortableText } from '@portabletext/react'
import React from 'react'
import fetchPost from '@/utils/fetchPost'

type Props = {
  params: {post: string}
}

export default async function Post({ params }: Props) {
  const slug = params.post
  const post = await fetchPost(slug)

  return (

    <PortableText
      value={post?.content}
    />
  )
}
