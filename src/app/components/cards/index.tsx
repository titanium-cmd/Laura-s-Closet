import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { HTMLAttributes } from 'react';
import { heart } from '../../../../public/assets';
import { FontWeight, H1, H6, Paragraph, SubTitle } from '../text';

interface HighlightCardProps extends HTMLAttributes<HTMLHeadingElement> {
  imgSrc: StaticImageData,
  title: string,
  className?: string
}

interface ProductCardProps extends HTMLAttributes<HTMLHeadingElement> {
  imgSrc: StaticImageData,
  index: number,
  productDesc: string,
  originalPrice: number,
  discountedPrice: number,
  className?: string
}

const HighlightCard: React.FC<HighlightCardProps> = ({ imgSrc, className, title }) => {
  return (
    <div className={`h-full w-full ${className} relative`}>
      <Image src={imgSrc} className={'md:h-[506px] h-[336px] w-full md:absolute'} alt="highlight" />
      <H1 label={title} className='text-center hidden text-custom-gray-100 h-full text-shadow shadow-custom-gray-600 tracking-wider md:flex items-center justify-center relative mx-10 md:mx-20 ' />
      <div className=' bg-opacity-30 bg-[black] shadow-md backdrop-blur-lg border-rounded-10 bottom-5 left-5 px-3 py-2 absolute'>
        <H6 label={title} className='tracking-wide text-custom-gray-50' fontWeight={FontWeight.semiBold} />
        <SubTitle label={'PRICE 20% OFF'} className='uppercase text-custom-gray-100 tracking-wide mt-1' />
        <SubTitle label={'DISCOUNT CODE - VATR3920'} className='uppercase text-custom-gray-100 tracking-wide text-sm' />
      </div>
    </div>
  )
}

const ProductCard: React.FC<ProductCardProps> = ({ index, imgSrc, className, productDesc, originalPrice, discountedPrice }) => {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          x: 50,
          transition: { ease: [0.78, 0.14, 0.15, 0.86] }
        },
        show: {
          opacity: 1,
          x: 0,
          transition: { ease: [0.78, 0.14, 0.15, 0.86] }
        }
      }}
      whileInView={'visible'}
      viewport={{ once: false, amount: 0.5 }}
      className={`h-full ${className} relative hover:-translate-y-3 transition-all transform duration-[600ms] py-2 px-1 ease-in-out hover:shadow-[0_25px_20px_-20px_rgba(0,0,0,0.45)] cursor-pointer`}>
      <Image src={imgSrc} className={'h-[343px]'} alt="product-img" />
      <div className='border-rounded-10'>
        <Paragraph
          label={productDesc}
          fontWeight={FontWeight.regular}
          className='tracking-wide text-md font-extralight mt-1 text-custom-gray-700'
        />
        <div className='flex justify-between items-end'>
          <div className='flex items-center space-x-3'>
            <SubTitle fontWeight={FontWeight.semiBold} className='text-[16px] font-bold text-custom-gray-700' label={`$${originalPrice}`} />
            <SubTitle label={`$${discountedPrice}`} className='text-[16px] text-custom-gray-400 line-through' />
          </div>
          <button className='text-md font-semibold p-1'>+ Add to Basket</button>
        </div>
      </div>
    </motion.div>
  )
}

const OrderProductCard: React.FC<ProductCardProps> = ({ index, imgSrc, className, productDesc, originalPrice, discountedPrice }) => {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          x: 50,
          transition: { ease: [0.78, 0.14, 0.15, 0.86] }
        },
        show: {
          opacity: 1,
          x: 0,
          transition: { ease: [0.78, 0.14, 0.15, 0.86] }
        }
      }}
      whileInView={'visible'}
      viewport={{ once: false, amount: 0.5 }}
      className={`h-full ${className} border border-custom-gray-200 relative hover:-translate-y-3 transition-all transform duration-[600ms] py-2 px-1 ease-in-out hover:shadow-[0_25px_20px_-20px_rgba(0,0,0,0.45)] cursor-pointer`}>
      <Image src={imgSrc} className={'h-[343px]'} alt="product-img" />
      <div className='p-3 absolute top-8 bg-[black] bg-opacity-30 right-8'>
        <Image src={heart} alt="heart-fav-img" />
      </div>
      <div className='border-rounded-10 p-3'>
        <Paragraph
          label={productDesc}
          fontWeight={FontWeight.regular}
          className='tracking-wide text-md font-extralight mt-1 text-custom-gray-700'
        />
        <div className='flex justify-between items-end'>
          <div className='items-center'>
            <SubTitle fontWeight={FontWeight.semiBold} className='text-[1rem] font-bold text-custom-gray-700' label={`$${originalPrice}`} />
            <SubTitle label={`$${discountedPrice}`} className='text-[1rem] text-custom-gray-400 line-through' />
          </div>
          <Paragraph className='text-custom-gray-600 text-[1.2rem] mb-2' fontWeight={FontWeight.regular} label={'24 Orders'} />
        </div>
      </div>
    </motion.div>
  )
}

export { HighlightCard, OrderProductCard, ProductCard };

