import Link from 'next/link'
import React, { HTMLAttributes } from 'react'

export interface LiProps extends HTMLAttributes<HTMLHeadingElement> {
  value: string | any,
  href?: string,
  key?: any
  className?: string
}

const Li: React.FC<LiProps> = ({ value, href = '#', key, className }) => {
  return (
    <li className={className} key={key}><Link href={href}>{value}</Link></li>
  )
}

export default Li
