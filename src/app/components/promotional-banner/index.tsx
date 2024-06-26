import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { promoBanner11, promoBanner12 } from '../../../../public/assets'
import { H4, Paragraph } from '../text'

interface PromotionalBannerProps {
  type: '1' | '2' | '3',
  message: string
  title: string,
  readMoreLink?: string
}

const PromotionalBanner: React.FC<PromotionalBannerProps> = ({ message, title, readMoreLink }) => {
  return (
    <div className='w-full bg-custom-gray-900 relative px-6 py-[27px]'>
      <H4 label={title} className='text-[white]' />
      <div className='flex space-x-2 items-center'>
        <Paragraph className='text-custom-gray-300 tracking-wider' label={message} />
        {readMoreLink && <Link className='text-[white] text-md self-end font-bold' href={''}>Read More</Link>}
      </div>
      <Image className=' absolute top-0 right-0' src={promoBanner11} alt="promo-banner-1-1" />
      <Image className=' absolute top-0 right-0' src={promoBanner12} alt="promo-banner-1-2" />
    </div>
  )
}

export default PromotionalBanner
