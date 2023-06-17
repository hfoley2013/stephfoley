import { client } from '@/sanity/lib/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient, groq, type SanityClient } from 'next-sanity'
import { type ParseBody, parseBody } from 'next-sanity/webhook'

export { config } from 'next-sanity/webhook'

export default async function revalidate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { body, isValidSignature } = await parseBody(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    )
    if (isValidSignature === false) {
      const message = 'Invalid signature'
      console.log(message)
      return res.status(401).send(message)
    }

    const { _type, _id } = body

    if (typeof _id !== 'string' || !_id) {
      const invalidId = 'Invalid _id'
      console.error(invalidId, { body })
      return res.status(400).send(invalidId)
    }

    const staleRoutes = await queryStaleRoutes(_type, _id)
    await Promise.all(staleRoutes.map((route) => res.revalidate(route)))

    const updatedRoutes = `Updated routes: ${staleRoutes.join(', ')}`
    console.log(updatedRoutes)
    return res.status(200).send(updatedRoutes)
  } catch (err: any) {
    console.error(err)
    return res.status(500).send(err.message)
  }
}

type StaleRoute = '/' | `/blog/${string}`

async function queryStaleRoutes(
  type: string,
  id: string
): Promise<StaleRoute[]> {

  if (type === 'post') {
    const exists = await client.fetch(groq`*[_id == $id][0]`, { id })
    if (!exists) {
      const slug = await client.fetch(groq`*[_id == $id].slug.current`, { id })
      const staleRoutes: StaleRoute[] = []
      if (slug) {
        staleRoutes.push(`/blog/${slug}`)
      }
      return staleRoutes
    }
  }

  if (type === 'author') {
    const slugs = await client.fetch(
      groq`*[_type == "author" && _id == $id] {
      "slug": *[_type == "post" && references(^._id)].slug.current
    }["slug"][]`,
      { id }
    )

    if (slugs.length > 0) {
      return ['/', ...slugs.map((slug: string) => `/blog/${slug}`)]
    }
  }

  return []
}
