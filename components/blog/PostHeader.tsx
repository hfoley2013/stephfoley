import Avatar from '@/components/blog/AuthorAvatar'
import CoverImage from '@/components/blog/CoverImage'
import Date from '@/components/blog/PostDate'
import type { Post } from '@/sanity/interfaces/Post'

export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'author' | 'slug'>
) {
  const { title, coverImage, date, author, slug } = props
  return (
    <>
      <div className="hidden md:mb-12 md:block">
        {author && <Avatar name={author.name} image={author.image} />}
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title? title : "Cover Image"} image={coverImage} priority slug={slug} />
      </div>
      <div className="max-w-2xl">
        <div className="block mb-6 md:hidden">
          {author && <Avatar name={author.name} image={author.image} />}
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date? date : "No date"} />
        </div>
      </div>
    </>
  )
}
