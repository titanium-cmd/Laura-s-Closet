import Image from 'next/image'
import React from 'react'
import { SearchIcon } from '../../../../public/assets'

interface InputProps {
  placeholder: string
}

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <div className='flex space-x-2'>
      <Image src={SearchIcon} alt="Search icon" />
      <input
        className='focus:outline-none pr-24 bg-custom-light-gray p-1 border-b border-b-custom-gray-400 text-custom-gray-600'
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
