import React from 'react'
import { CustomColors, H4 } from '../text'

interface SectionTitleProps {
  title: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className='mt-16 mb-7 flex flex-col justify-center items-center'>
      <H4 label={title} className='uppercase' color={CustomColors.gray700} />
      <span className='h-[4px] w-[88px] mt-2 block bg-custom-gray-700'></span>
    </div>
  )
}

export default SectionTitle
