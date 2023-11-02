import Link from 'next/link'
import React from 'react'

export interface LiProps {
  value: string | any,
  href?: string
}

const Li: React.FC<LiProps> = ({ value, href = '#' }) => {
  return (
    <li><Link href={href}>{value}</Link></li>
  )
}

export default Li
