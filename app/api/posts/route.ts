import { client } from "@/sanity/lib/client"
import { Post } from "@/sanity/interfaces/Post"
import { allPosts } from "@/sanity/lib/queries"
import { NextResponse } from "next/server"
 
export async function GET() {
  const posts: Post[] = await client.fetch(
    allPosts, { 
    next: { 
      revalidate: 60,
      tags: ['posts'],
     } 
  }
  )
  
  return NextResponse.json({ posts })
}
