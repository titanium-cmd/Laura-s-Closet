import React, { HTMLAttributes, HTMLInputTypeAttribute } from 'react'

interface InputProps extends HTMLAttributes<HTMLHeadingElement> {
  placeholder: string,
  prefix?: any,
  type?: HTMLInputTypeAttribute,
  className?: string
}

const Input: React.FC<InputProps> = ({ placeholder, prefix, type = 'text', className }) => {
  return (
    <>
      {prefix ? <div className='flex space-x-2'>
        {prefix}
        <input
          type={type}
          className={`focus:outline-none grow pr-24 bg-custom-light-gray p-1 border-b border-custom-gray-400 text-custom-gray-600 ${className}`}
          placeholder={placeholder}
        />
      </div> : <input
        type={type}
        className={`focus:outline-none grow pr-24 bg-custom-light-gray p-1 border-b border-custom-gray-400 text-custom-gray-600 ${className}`}
        placeholder={placeholder}
      />}
    </>
  )
}

export default Input
