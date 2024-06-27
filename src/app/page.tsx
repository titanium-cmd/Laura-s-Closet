"use client";
import { useScroll, useSpring } from "framer-motion";
import Image from 'next/image';
import {
  ArrivalLady,
  ArrowIcon,
  Brand1,
  Brand2,
  Brand3,
  Brand4,
  Brand5,
  Brand6,
  Hightlight1,
  Hightlight2,
  Hightlight3,
  Hightlight4,
  MaskedArrivalBg,
  Product1,
  Product2,
  Product3,
  Product4,
  ShopArrowIcon,
  SummerCollectionBg
} from '../../public/assets';
import Button from './components/button';
import { HighlightCard, ProductCard } from './components/cards';
import Countdown from './components/countdown';
import Footer from "./components/footer";
import Header from "./components/header";
import Section from './components/section';
import { FontWeight, H1, H4, H6 } from './components/text';

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <Header />
      <main>
        <Section hasSpacing={false} className='grid md:grid-cols-3'>
          <section className="relative md:col-span-2 bg-[#111827] bg-opacity-95">
            <div className="relative z-10 bg-custom-gray-800 lg:mx-24 lg:my-[130px] w-fit p-10">
              <H1 label="Get up to 30% off" className='text-custom-gray-50' />
              <H1 label="New Arrivals" className='text-custom-orange' />
              <H6 label={'Introducing our latest collection of products'} className='mt-3 text-custom-gray-100' />
              <br />
              <br />
              <Button
                label={'Place your Order'}
                className=' border-custom-gray-100 text-custom-gray-100'
                suffix={<Image src={ArrowIcon} alt={'arrow'} />}
              />
            </div>
            <Image src={MaskedArrivalBg} fill={true} alt='arrival' />
          </section>
          <section className='bg-custom-orange relative flex items-center justify-center'>
            <div className='bg-[white] h-[347px] w-[347px] rounded-full'></div>
            <Image src={ArrivalLady} placeholder='blur' quality={100} priority className='absolute md:top-14 top-9 w-[152px] h-[307px] md:w-[312px] md:h-[607px]' alt={'lady'} />
          </section>
        </Section>
        <Section title={'This Weeks Highlights'}>
          <div className='md:h-[506px] h-[700px] w-full grid md:grid-cols-8 gap-5'>
            <HighlightCard className='md:col-span-3' imgSrc={Hightlight1} title={'Exclusive Shoes'} />
            <HighlightCard className='md:col-span-5' imgSrc={Hightlight2} title={'Exquisite Styles & Collections'} />
          </div>
          <br />
          <div className='md:h-[506px] h-[700px] w-full grid md:grid-cols-8 gap-5'>
            <HighlightCard className='md:col-span-5' imgSrc={Hightlight3} title={'New Arrivals'} />
            <HighlightCard className='md:col-span-3' imgSrc={Hightlight4} title={'Exclusive Items'} />
          </div>
        </Section>
        <Section title={'Popular this week'}>
          <div className='space-y-5 md:space-y-0 md:my-20 gap-8 grid md:grid-cols-4'>
            <ProductCard
              index={1}
              imgSrc={Product1}
              productDesc={'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse'}
              originalPrice={120.23}
              discountedPrice={120.23}
            />
            <ProductCard
              index={2}
              imgSrc={Product2}
              productDesc={'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse'}
              originalPrice={90}
              discountedPrice={100}
            />
            <ProductCard
              index={3}
              imgSrc={Product3}
              productDesc={'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse'}
              originalPrice={140.24}
              discountedPrice={150.11}
            />
            <ProductCard
              index={4}
              imgSrc={Product4}
              productDesc={'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse'}
              originalPrice={105.23}
              discountedPrice={120.23}
            />
          </div>
        </Section>
        <Section className='md:mt-20 md:mb-20' title={'Brands for you'}>
          <div className='md:flex inline-block w-full text-center space-x-3 md:mt-7 justify-center m-auto md:w-1/2 gap-5'>
            <Image placeholder='blur' className='inline-block' src={Brand1} alt={'brand img'} />
            <Image placeholder='blur' className='inline-block' src={Brand2} alt={'brand img'} />
            <Image placeholder='blur' className='inline-block' src={Brand3} alt={'brand img'} />
            <Image placeholder='blur' className='inline-block' src={Brand4} alt={'brand img'} />
            <Image placeholder='blur' className='inline-block' src={Brand5} alt={'brand img'} />
            <Image placeholder='blur' className='inline-block' src={Brand6} alt={'brand img'} />
          </div>
        </Section>
        <Section className={`md:h-[515px] md:mt-24 relative`}>
          <Image
            src={SummerCollectionBg}
            className={'md:h-[515px] h-[315px] -z-10 absolute md:px-20 px-10'}
            fill alt={'summer collection bg img'} />
          <div className='md:px-12 px-6 w-fit my-auto h-full flex flex-col justify-center items-start'>
            <div className='space-x-1 mb-8 md:mt-40 mt-24'>
              <H4 label={'summer '} fontWeight={FontWeight.semiBold} className='uppercase text-[41px] text-custom-blue-black inline-block' /> {"\t        "}
              <H4 label={'collections'} fontWeight={FontWeight.semiBold} className='uppercase text-custom-red text-[41px] inline-block' />
            </div>
            <Button
              label={'shop now'}
              className='border mb-[106px] border-custom-light-gray text-custom-red bg-custom-light-gray'
              suffix={<Image src={ShopArrowIcon} alt={'arrow'} />}
            />
            <Countdown endDate={'01/01/2023'} />
          </div>
        </Section>
        <Footer />
      </main>
    </>
  )
}

export default App
