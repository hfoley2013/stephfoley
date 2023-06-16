import { urlForImage } from '@/sanity/lib/image'
import {getImageDimensions} from '@sanity/asset-utils'
import Image from 'next/image'
import { SanityImageObject } from '@/sanity/interfaces/SanityImageObject';

type Props = {
  value: SanityImageObject;
};

export const PostImage = ({ value }: Props) => {
  
  const { width, height } = getImageDimensions(value);
  
  return (
    <Image
      src={urlForImage(value.asset).url()}
      width={500}
      height={500}
      className="object-cover w-full rounded-xl"
      alt=''
      loading="lazy"
      style={{
        aspectRatio: width / height,
      }}
    />
  )
}
