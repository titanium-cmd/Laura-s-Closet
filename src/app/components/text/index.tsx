import React, { HTMLAttributes } from 'react';

export enum FontWeight {
  semiBold = 'font-semibold',
  medium = 'font-medium',
  regular = 'font-normal',
}

interface TextProps extends HTMLAttributes<HTMLHeadingElement> {
  label: string,
  className?: string,
  fontWeight?: FontWeight
}

const H1: React.FC<TextProps> = ({ label, fontWeight = FontWeight.semiBold, className }) => {
  return (
    <h1 className={`text-2xl ${fontWeight} ${className}`}>{label}</h1>
  )
}

const H4: React.FC<TextProps> = ({ label, fontWeight = FontWeight.medium, className }) => {
  return (
    <h4 className={`text-xl ${fontWeight} ${className}`}>{label}</h4>
  )
}

const Paragraph: React.FC<TextProps> = ({ label, className }) => {
  return (
    <p className={`text-lg mt-2 ${className}`}>{label}</p>
  )
}

const SubTitle: React.FC<TextProps> = ({ label, color, className }) => {
  return (
    <p className={`text-sm mt-2 ${color && 'text-' + color} ${className}`}>{label}</p>
  )
}

export { H1, H4, Paragraph, SubTitle };

