import { Post } from '@/sanity/interfaces/Post'
import { client } from '@/sanity/lib/client'
import { featuredPostsQuery } from "@/sanity/lib/queries"

export default async function fetchFeaturedPosts(): Promise<Post[]> {
  const featuredPosts: Post[] = await client.fetch(
    featuredPostsQuery, {
    next: {
      revalidate: 60,
      tags: ['posts'],
    }
  })
  return featuredPosts
}
