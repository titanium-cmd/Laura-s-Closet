import React from 'react'
import Li, { LiProps } from '../li'
import { CustomColors, FontWeight } from '../text'

interface UlProps {
  links: LiProps[],
  fontWeight?: FontWeight,
  fontSize?: 'text-sm' | 'text-md' | 'text-lg' | 'text-base',
  color?: CustomColors
}

const Ul: React.FC<UlProps> = ({ links, color = CustomColors.gray500, fontWeight, fontSize }) => {
  return (
    <ul className={`flex items-center text-center justify-center space-x-10 ${fontWeight} ${fontSize} ${color}`}>
      {links.length > 0 && links.map(link => <Li value={link.value} href={link.href} />)}
    </ul>
  )
}

export default Ul
