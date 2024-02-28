import React, { HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLHeadingElement> {
  label: string,
  suffix?: any,
  className?: string
}

const Button: React.FC<ButtonProps> = ({ label, suffix, className }) => {
  return (
    <button className={`${className} transform hover:scale-105 transition duration-700 ease-in-out flex space-x-3 border border-custom-light-gray items-center font-semibold tracking-widest px-3 py-2.5 text-md uppercase`}>
      <span>{label}</span>
      {suffix}
    </button>
  )
}

export default Button
