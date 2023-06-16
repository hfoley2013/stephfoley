import { urlForImage } from '@/sanity/lib/image'
import type { Author } from '@/sanity/interfaces/Author'
import Image from 'next/image'

export default function AuthorAvatar(props: Author) {
  const { name, image } = props
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-4">
        <Image
          src={
            image?.asset?._ref
              ? urlForImage(image).height(96).width(96).fit('crop').url()
              : 'https://source.unsplash.com/96x96/?face'
          }
          className="rounded-full"
          height={96}
          width={96}
          alt={name? name : "Stephiney Foley"}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
