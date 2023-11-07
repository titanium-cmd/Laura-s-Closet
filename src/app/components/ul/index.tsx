import React, { HTMLAttributes } from 'react'
import Li, { LiProps } from '../li'
import { FontWeight } from '../text'

interface UlProps extends HTMLAttributes<HTMLHeadingElement> {
  links: LiProps[],
  fontWeight?: FontWeight,
  fontSize?: 'text-sm' | 'text-md' | 'text-lg' | 'text-base',
  className?: string
}

const Ul: React.FC<UlProps> = ({ links, className, fontWeight, fontSize }) => {
  return (
    <ul className={`flex items-center text-center justify-center space-x-10 ${fontWeight} ${fontSize} ${className}`}>
      {links.length > 0 && links.map(link => <Li key={link.value} value={link.value} href={link.href} />)}
    </ul>
  )
}

export default Ul
