import React from 'react'
import type { Post, Settings } from '@/sanity/lib/queries'

type Props = {}

export interface BlogIndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}


function Blog({}: Props) {
  return (
    <h1>Blog Section</h1>
  )
}

export default Blog
