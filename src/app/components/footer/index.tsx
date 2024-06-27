"use client"
import Image from 'next/image';
import React from 'react';

import {
  PayoneerLogo,
  aliPay,
  amazonLogo,
  americanExpress,
  androidIcon,
  appleIcon,
  applePay,
  bitPay,
  bitcoin,
  discoverLogo,
  ebayLogo,
  facebookIcon,
  googlePayLogo,
  instagramIcon,
  masterCardLogo,
  monoBanklogo,
  paypalLogo,
  snapchatIcon,
  tiktokIcon,
  twitterIcon,
  westernUnionLogo
} from '../../../../public/assets';
import Button from '../button';
import Input from '../input';
import Section from '../section';
import { FontWeight, Paragraph, SubTitle } from '../text';
import Ul from '../ul';


const Footer: React.FC = () => {
  return (
    <Section className='bg-custom-gray-50 py-14 md:mt-36'>
      <div className='grid md:grid-cols-5'>
        <div>
          <Paragraph label={'company info'} fontWeight={FontWeight.semiBold} className='uppercase text-custom-gray-800' />
          <Ul
            ulClassName='flex-col text-left space-y-3 mt-3 text-md'
            links={[
              { value: 'About Laura’s Closet' },
              { value: 'Social Responsibility' },
              { value: 'Affiliate' },
              { value: 'Fashion Blogger' },
            ]} />
        </div>
        <div>
          <Paragraph label={'HElp & Support'} fontWeight={FontWeight.semiBold} className='uppercase text-custom-gray-800' />
          <Ul
            ulClassName='flex-col space-y-3 mt-3 text-md'
            links={[
              { value: 'Shipping Info' },
              { value: 'Returns' },
              { value: 'How to Order' },
              { value: 'How to Track' },
              { value: 'Size Chart' },
            ]} />
        </div>
        <div>
          <Paragraph label={'customer care'} fontWeight={FontWeight.semiBold} className='uppercase text-custom-gray-800' />
          <Ul
            ulClassName='flex-col text-left space-x-0 space-y-3 mt-3 text-md'
            links={[
              { value: 'Contact Us' },
              { value: 'Payment' },
              { value: 'Bonus Point' },
              { value: 'Notices' }
            ]} />
        </div>
        <div className='col-span-2 grid grid-cols-2'>
          <div>
            <Paragraph label={'socials'} fontWeight={FontWeight.semiBold} className='uppercase text-custom-gray-800' />
            <div className='flex space-x-2 my-4'>
              <Image src={facebookIcon} alt="facebook-logo" />
              <Image src={twitterIcon} alt="twitter-logo" />
              <Image src={instagramIcon} alt="instagram-logo" />
              <Image src={tiktokIcon} alt="tiktok-logo" />
              <Image src={snapchatIcon} alt="snapchat-logo" />
            </div>
          </div>
          <div className='col-start-3'>
            <Paragraph label={'platforms'} fontWeight={FontWeight.semiBold} className='uppercase text-custom-gray-800' />
            <div className='flex space-x-2 my-4'>
              <Image src={androidIcon} alt="android-logo" />
              <Image src={appleIcon} alt="apple-logo" />
            </div>
          </div>
          <div className='col-span-3'>
            <Paragraph label={'SIGN UP FOR Laura’s Closet  STYLE NEWS'} className='text-custom-gray-800' />
            <div className='flex items-center justify-center space-x-2 mt-1'>
              <Input className='py-3 px-4 border grow' placeholder={'Your email'} type={'email'} />
              <Button className='py-4 border-none bg-custom-gray-800 text-custom-gray-50' label={'subscribe'} />
            </div>
            <div className='col-span-3 flex items-center mt-2 space-x-1'>
              <SubTitle className='text-custom-gray-500' label={'By clicking the SUBSCRIBE button, you are agreeing to our'} />
              <SubTitle className='text-custom-blue' label={'Privacy & Cookie Policy'} />
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-5 mt-14'>
        <div className='md:col-span-3 col-span-5'>
          <Paragraph label={'©2010-2022 Laura’s Closet All Rights Reserved'} className='text-custom-gray-500' />
          <Ul
            ulClassName='text-md space-x-3 mt-5'
            liClassName='underline underline-offset-4'
            middleMan={<span>|</span>}
            links={[
              { value: 'Privacy Center' },
              { value: 'Privacy & Cookie Policy' },
              { value: 'Manage Cookies' },
            ]} />
          <Ul
            ulClassName='text-md space-x-3 mt-2'
            liClassName='underline underline-offset-4'
            middleMan={<span>|</span>}
            links={[
              { value: 'Terms & Conditions' },
              { value: 'Copyright Notice' },
              { value: 'Imprint' },
            ]} />
        </div>
        <div className='md:col-span-2 col-span-5 mb-2'>
          <Paragraph label={'we accept'} fontWeight={FontWeight.semiBold} className='uppercase text-custom-gray-800 mb-6' />
          <div className='flex grow w-full items-center space-x-2'>
            <Image src={masterCardLogo} alt="Mastercard logo" />
            <Image src={paypalLogo} alt="Paypal logo" />
            <Image src={ebayLogo} alt="ebay logo" />
            <Image src={googlePayLogo} alt="gpay logo" />
            <Image src={monoBanklogo} alt="monobank logo" />
            <Image src={discoverLogo} alt="discover logo" />
            <Image src={westernUnionLogo} alt="discover logo" />
            <Image src={PayoneerLogo} alt="Payoneer logo" />
          </div>
          <div className='flex grow mt-2 items-center space-x-2'>
            <Image src={applePay} alt="applepay logo" />
            <Image src={americanExpress} alt="american epxress logo" />
            <Image src={amazonLogo} alt="amazon logo" />
            <Image src={aliPay} alt="alipay logo" />
            <Image src={bitPay} alt="bitpay logo" />
            <Image src={bitcoin} alt="bitcoin logo" />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Footer
