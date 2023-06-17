import { Post } from '@/sanity/interfaces/Post'
import { client } from '@/sanity/lib/client'
import { getSlugs } from '@/sanity/lib/queries'

type PostSlug = Pick<Post, 'slug'> & {
  slug: {
    slug: string
    current: string
  }
}

export default async function fetchSlugs() {
  const slugs: PostSlug[] = await client.fetch(
    getSlugs, {
    next: {
      revalidate: 60,
      tags: ['slugs'],
    }
  })
  return slugs
}
