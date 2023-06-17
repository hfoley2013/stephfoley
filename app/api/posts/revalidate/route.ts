import { NextApiRequest, NextApiResponse } from 'next'
import { revalidatePath } from 'next/cache'

export default async function revalidateBlogPosts(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query
  const path = `/blog/${slug}`

  // Validate the secret key
  const secretKey = process.env.SANITY_REVALIDATE_SECRET
  const requestSecretKey = req.headers['x-sanity-revalidation-secret-key']
  if (secretKey !== requestSecretKey) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  // Revalidate the specified path
  revalidatePath(path)

  res.status(200).json({ revalidated: true, now: Date.now() })
}
