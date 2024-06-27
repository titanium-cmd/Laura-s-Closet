"use client";

import Image from 'next/image';
import React from 'react';
import { dropdownArrow } from '../../../public/assets';
import Footer from '../components/footer';
import Header from "../components/header";
import Input from '../components/input';
import PromotionalBanner from '../components/promotional-banner';
import Section from '../components/section';
import MultiRangeSlider from '../components/slider';
import { FontWeight, Paragraph } from '../components/text';


const StorePage: React.FC = () => {
  const handleSliderChange = (lowerValue: number, upperValue: number) => {
    console.log('Slider values:', lowerValue, upperValue);
  };
  return (
    <>
      <Header />
      <br />
      <main>
        <Section>
          <PromotionalBanner readMoreLink='erererer' type={'1'} message={'Slash Sales begins in April. Get up to 80% Discount on all products'} title={'Ladies Top'} />
        </Section>
        <Section className='py-12 tracking-wide flex justify-between'>
          <section className='flex space-x-1 items-center'>
            <Paragraph fontWeight={FontWeight.semiBold} label={'Showing 1 - 20'} />
            <Paragraph className='text-custom-gray-600' fontWeight={FontWeight.regular} label={'out of 2,356 Products'} />
          </section>
          <section className='flex space-x-2 items-center'>
            <Paragraph className='text-custom-gray-500' label={'Sort By:'} />
            <div className='flex space-x-1 items-center cursor-pointer'>
              <Paragraph fontWeight={FontWeight.semiBold} className='content-center' label={'New Arrivals'} />
              <Image src={dropdownArrow} className='pt-2 border' alt="Dropdown arrow" />
            </div>
          </section>
        </Section>
        <Section className='grid grid-cols-4 gap-2'>
          <aside className='bg-custom-gray-50 py-10 px-6'>
            <Paragraph className='text-custom-gray-800' fontWeight={FontWeight.semiBold} label={'prices'.toUpperCase()} />
            <div className='flex justify-between my-6'>
              <Paragraph className='text-custom-gray-600' label={'Range'} />
              <Paragraph className='text-custom-gray-800' fontWeight={FontWeight.semiBold} label={'$120 - $300'} />
            </div>
            <MultiRangeSlider maxValue={100} initialLowerValue={10} initialUpperValue={90} minValue={0} onChange={handleSliderChange} />
            <Paragraph className='text-custom-gray-800 mt-10' fontWeight={FontWeight.semiBold} label={'filters'.toUpperCase()} />
            <div className='my-6 space-y-2'>
              <Input label={'Women'} type='checkbox' />
              <Input label={'Ladies'} type='checkbox' />
              <Input label={'Girls'} type='checkbox' />
              <Input label={'Babies'} type='checkbox' />
            </div>
            <Paragraph className='text-custom-gray-800 mt-10' fontWeight={FontWeight.semiBold} label={'brands'.toUpperCase()} />
            <div className='my-6 space-y-2'>
              <Input label={'H&M'} type='checkbox' />
              <Input label={'Mark & Spencer'} type='checkbox' />
              <Input label={'Victoria’s Secret'} type='checkbox' />
              <Input label={'Dior'} type='checkbox' />
              <Input label={'Gucci'} type='checkbox' />
              <Input label={'Fendi'} type='checkbox' />
              <Input label={'Prada'} type='checkbox' />
              <Input label={'Versace'} type='checkbox' />
              <Input label={'Dolce & Gabbana'} type='checkbox' />
              <Input label={'Zara'} type='checkbox' />
              <Input label={'Chanel'} type='checkbox' />
            </div>
            <Paragraph className='text-custom-gray-800 mt-10' fontWeight={FontWeight.semiBold} label={'categories'.toUpperCase()} />
            <div className='my-6 space-y-2'>
              <Input label={'Dresses'} type='checkbox' />
              <Input label={'Tops'} type='checkbox' />
              <Input label={'Lingerie & Lounge Wear'} type='checkbox' />
              <Input label={'Babies'} type='checkbox' />
            </div>
            <Paragraph className='text-custom-gray-800 mt-10' fontWeight={FontWeight.semiBold} label={'size'.toUpperCase()} />
            <div className='my-6 space-y-2'>
              <Input label={'Medium'} type='checkbox' />
              <Input label={'Large'} type='checkbox' />
              <Input label={'Plus Size'} type='checkbox' />
              <Input label={'Sexy Plus Size'} type='checkbox' />
            </div>
          </aside>
          <section className='col-span-3'>

          </section>
        </Section>
        <Footer />
      </main>
    </>
  )
}

export default StorePage
