import React, { HTMLAttributes } from 'react';

export enum FontWeight {
  bold = 'font-bold',
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
    <h1 className={`text-3xl ${fontWeight} ${className}`}>{label}</h1>
  )
}

const H4: React.FC<TextProps> = ({ label, fontWeight = FontWeight.medium, className }) => {
  return (
    <h4 className={`text-xl ${fontWeight} ${className}`}>{label}</h4>
  )
}

const H6: React.FC<TextProps> = ({ label, fontWeight = FontWeight.medium, className }) => {
  return (
    <h4 className={`text-lg ${fontWeight} mt-2 ${className}`}>{label}</h4>
  )
}

const Paragraph: React.FC<TextProps> = ({ label, className, fontWeight = FontWeight.regular, }) => {
  return (
    <p className={`text-md ${fontWeight} mt-2 ${className}`}>{label}</p>
  )
}

const SubTitle: React.FC<TextProps> = ({ label, className, fontWeight = FontWeight.medium, }) => {
  return (
    <p className={`text-sm ${fontWeight} mt-2 ${className}`}>{label}</p>
  )
}

export { H1, H4, H6, Paragraph, SubTitle };

