import { Post } from "@/sanity/interfaces/Post"

export const fetchPosts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
      next: {
        revalidate: 60,
        tags: ['posts'],
      }
    })
    const data = await res.json()
    const posts: Post[] = data.posts

    return posts

  } catch (error) {
    console.error(error)
  }
}
