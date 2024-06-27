import React, { HTMLAttributes, HTMLInputTypeAttribute } from 'react';
import { Paragraph } from '../text';

interface InputProps extends HTMLAttributes<HTMLHeadingElement> {
  placeholder?: string,
  prefix?: any,
  type?: HTMLInputTypeAttribute,
  className?: string
  label?: string
}

const CheckBox: React.FC<Omit<InputProps, 'placeholder'>> = ({ label }) => {
  return (
    <div className='flex items-center space-x-2'>
      <input
        type='checkbox'
        id={label}
        className='h-5 w-5 border-2 accent-custom-gray-700 border-custom-gray-700'
      />
      <label htmlFor={label}>
        <Paragraph className='text-custom-gray-600 mb-2' label={label ?? ''} />
      </label>
    </div>
  )
}

const Input: React.FC<InputProps> = ({ placeholder, prefix, type = 'text', className, label }) => {
  return type === 'checkbox' ? <CheckBox label={label} /> : <>
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
}

export default Input
