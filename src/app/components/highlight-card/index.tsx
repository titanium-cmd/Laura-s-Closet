import Image, { StaticImageData } from 'next/image'
import React, { HTMLAttributes } from 'react'
import { CustomColors, FontWeight, H1, Paragraph, SubTitle } from '../text'

interface HighlightCardProps extends HTMLAttributes<HTMLHeadingElement> {
  imgSrc: StaticImageData,
  title: string,
  className?: string
}

const HighlightCard: React.FC<HighlightCardProps> = ({ imgSrc, className, title }) => {
  return (
    <div className={`h-full ${className} relative`}>
      <Image src={imgSrc} className={'h-[506px] absolute'} alt="highlight" />
      <H1 label={title} color={CustomColors.gray100} className='text-center h-full text-shadow shadow-custom-gray-600 tracking-wider flex items-center justify-center relative mx-20 ' />
      <div className=' bg-opacity-30 bg-[black] shadow-md backdrop-blur-lg border-rounded-10 bottom-5 left-5 px-3 py-2 absolute'>
        <Paragraph label={title} color={CustomColors.gray50} className='tracking-wide' fontWeight={FontWeight.semiBold} />
        <SubTitle label={'PRICE 20% OFF'} color={CustomColors.gray100} className='uppercase tracking-wide mt-1' />
        <SubTitle label={'DISCOUNT CODE - VATR3920'} color={CustomColors.gray100} className='uppercase tracking-wide text-sm' />
      </div>
    </div>
  )
}

export default HighlightCard
