import React from 'react';

export enum FontWeight {
  semiBold = 'font-semibold',
  medium = 'font-medium',
}
export enum CustomColors {
  gray50 = 'text-custom-gray-50',
  gray100 = 'text-custom-gray-100',
  gray200 = 'text-custom-gray-200',
  gray300 = 'text-custom-gray-300',
  gray400 = 'text-custom-gray-400',
  gray500 = 'text-custom-gray-500',
  gray600 = 'text-custom-gray-600',
  gray700 = 'text-custom-gray-700',
  gray800 = 'text-custom-gray-800',
  gray900 = 'text-custom-gray-900',
  red = 'text-custom-red',
  yellow = 'text-custom-yellow',
}


interface TextProps {
  label: string,
  color?: CustomColors,
  fontWeight?: FontWeight
}

const H1: React.FC<TextProps> = ({ label, fontWeight = FontWeight.semiBold, color }) => {
  return (
    <h1 className={`text-2xl ${fontWeight} ${color}`}>{label}</h1>
  )
}

const H4: React.FC<TextProps> = ({ label, fontWeight = FontWeight.medium, color }) => {
  return (
    <h4 className={`text-xl ${fontWeight} ${color}`}>{label}</h4>
  )
}

const Paragraph: React.FC<TextProps> = ({ label }) => {
  return (
    <p className='text-md'>{label}</p>
  )
}

export { H1, H4, Paragraph };

