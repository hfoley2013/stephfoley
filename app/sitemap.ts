import { fetchPosts } from "@/utils/fetchPosts"

export default async function sitemap() {
  const baseUrl = "https://www.stephfoley.com"
  const posts = await fetchPosts()
  const postUrls = posts?.map((post) => {
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date!)
    }
  }) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postUrls,
  ]
}
