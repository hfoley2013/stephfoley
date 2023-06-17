import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  content,
  coverImage,
  "slug": slug.current,
  "author": author->{name, image},
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const allPosts = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const featuredPostsQuery = groq`
*[_type == "post"] | order(_updatedAt desc) [0..2] {
  ${postFields}
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`
