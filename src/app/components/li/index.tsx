import Link from 'next/link'
import React from 'react'

export interface LiProps {
  value: string | any,
  href?: string,
  key?: any
}

const Li: React.FC<LiProps> = ({ value, href = '#', key }) => {
  return (
    <li key={key}><Link href={href}>{value}</Link></li>
  )
}

export default Li
