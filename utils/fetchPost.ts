import { Post } from '@/sanity/interfaces/Post'
import { client } from '@/sanity/lib/client'
import { postBySlugQuery } from '@/sanity/lib/queries'

export default async function fetchPost(slug: string) {
  const post: Post = await client.fetch(
    postBySlugQuery, {
    slug,
    next: {
      revalidate: 60,
      tags: ['posts'],
    }
  })
  return post
}
