import React, { HTMLAttributes } from 'react'
import { H4 } from '../text'

interface SectionProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode,
  className?: string
  title?: string
  hasSpacing?: boolean
}

const Section: React.FC<SectionProps> = ({ children, className, hasSpacing = true, title }) => {
  return (
    <section className={`${hasSpacing ? 'md:px-20 px-10' : ''} ${className} mt-24 md:mt-0`}>
      {title && <div className='md:mt-32 mb-7 flex flex-col justify-center items-center'>
        <H4 label={title} className='uppercase text-custom-gray-700' />
        <span className='h-[4px] w-[88px] mt-2 block bg-custom-gray-700'></span>
      </div>}
      {children}
    </section>
  )
}

export default Section
