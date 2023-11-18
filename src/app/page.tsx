import Image from 'next/image'
import {
  ArrivalLady,
  ArrowIcon,
  BasketIcon,
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
  PayoneerLogo,
  Product1,
  Product2,
  Product3,
  Product4,
  SearchIcon,
  ShopArrowIcon,
  SummerCollectionBg,
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
} from '../../public/assets'
import Button from './components/button'
import { HighlightCard, ProductCard } from './components/cards'
import Countdown from './components/countdown'
import Input from './components/input'
import Section from './components/section'
import { FontWeight, H1, H4, H6, Paragraph, SubTitle } from './components/text'
import Ul from './components/ul'

const App = () => {
  return (
    <div>
      <header>
        <div className='py-4 bg-custom-light-gray px-12 flex items-center justify-between'>
          <H4
            label="Laura's Closet"
            className='text-custom-gray-700' />
          <Input placeholder='Search for an Item...' prefix={<Image src={SearchIcon} alt="Search icon" />} />
          <nav>
            <Ul
              links={[
                { value: "Store" },
                { value: 'Account' },
                { value: 'Wish List' },
                {
                  value: <div className='flex text-custom-gray-800 space-x-3 font-semibold'>
                    <span>Basket</span>
                    <Image src={BasketIcon} alt="basket" />
                  </div>
                }
              ]} />
          </nav>
        </div>
        <nav className='px-3 py-5'>
          <Ul
            fontSize='text-md'
            fontWeight={FontWeight.semiBold}
            ulClassName='text-custom-gray-700 items-center text-center justify-center'
            links={[
              {
                value: <div className='flex items-center space-x-2'>
                  <span>New Arrivals</span>
                  <span className='bg-custom-red text-custom-gray-50 px-2 py-0.5 rounded-sm'>#Fresh</span>
                </div>
              },
              { value: "Store" },
              { value: 'Dresses' },
              { value: 'Tops' },
              { value: 'Jackets' },
              { value: 'Lingerie & Lounge Wear' },
              { value: 'Beach Wear' },
              { value: 'Blouse' },
              { value: 'Denim' },
              { value: 'Vintage' },
              { value: 'Shoes' },
              { value: 'Sandals' },
              { value: 'Bags' },
              { value: 'Jewelries' },
            ]} />
        </nav>
      </header>
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
            <Image src={ArrivalLady} placeholder='blur' quality={100} priority width={312} height={607} className='absolute top-14' alt={'lady'} />
          </section>
        </Section>
        <Section title={'This Weeks Highlights'}>
          <div className='h-[506px] w-full grid md:grid-cols-8 gap-5'>
            <HighlightCard className='col-span-3' imgSrc={Hightlight1} title={'Exclusive Shoes'} />
            <HighlightCard className='col-span-5' imgSrc={Hightlight2} title={'Exquisite Styles & Collections'} />
          </div>
          <br />
          <div className='h-[506px] w-full grid md:grid-cols-8 gap-5'>
            <HighlightCard className='col-span-5' imgSrc={Hightlight3} title={'New Arrivals'} />
            <HighlightCard className='col-span-3' imgSrc={Hightlight4} title={'Exclusive Items'} />
          </div>
        </Section>
        <Section title={'Popular this week'}>
          <div className='space-y-5 md:space-y-0 md:my-20 gap-8 grid md:grid-cols-4'>
            <ProductCard
              imgSrc={Product1}
              productDesc={'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse'}
              originalPrice={120.23}
              discountedPrice={120.23}
            />
            <ProductCard
              imgSrc={Product2}
              productDesc={'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse'}
              originalPrice={90}
              discountedPrice={100}
            />
            <ProductCard
              imgSrc={Product3}
              productDesc={'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse'}
              originalPrice={140.24}
              discountedPrice={150.11}
            />
            <ProductCard
              imgSrc={Product4}
              productDesc={'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse'}
              originalPrice={105.23}
              discountedPrice={120.23}
            />
          </div>
        </Section>
        <Section className='md:mt-40 md:mb-40' title={'Brands for you'}>
          <div className='flex space-x-3 md:mt-7 justify-center m-auto w-1/2 gap-5'>
            <Image placeholder='blur' src={Brand1} alt={'brand img'} />
            <Image placeholder='blur' src={Brand2} alt={'brand img'} />
            <Image placeholder='blur' src={Brand3} alt={'brand img'} />
            <Image placeholder='blur' src={Brand4} alt={'brand img'} />
            <Image placeholder='blur' src={Brand5} alt={'brand img'} />
            <Image placeholder='blur' src={Brand6} alt={'brand img'} />
          </div>
        </Section>
        <Section className={`mb-48 h-[515px] md:mt-24 relative`}>
          <Image
            src={SummerCollectionBg}
            className={'h-[515px] -z-10 absolute md:px-20 px-10'}
            fill alt={'summer collection bg img'} />
          <div className='px-12 w-fit my-auto h-full flex flex-col justify-center items-start'>
            <div className='space-x-1 mb-8 mt-40'>
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
        <Section className='bg-custom-gray-50 py-14'>
          <div className='grid grid-cols-5'>
            <div>
              <Paragraph label={'company info'} fontWeight={FontWeight.semiBold} className='uppercase text-custom-gray-800' />
              <Paragraph label={'About Laura’s Closet'} className='mt-3 text-custom-gray-500' />
              <Paragraph label={'Social Responsibility'} className='mt-3 text-custom-gray-500' />
              <Paragraph label={'Affiliate'} className='mt-3 text-custom-gray-500' />
              <Paragraph label={'Fashion Blogger'} className='mt-3 text-custom-gray-500' />
            </div>
            <div>
              <Paragraph label={'HElp & Support'} fontWeight={FontWeight.semiBold} className='uppercase text-custom-gray-800' />
              <Paragraph label={'Shipping Info'} className='mt-3 text-custom-gray-500' />
              <Paragraph label={'Returns'} className='mt-3 text-custom-gray-500' />
              <Paragraph label={'How to Order'} className='mt-3 text-custom-gray-500' />
              <Paragraph label={'How to Track'} className='mt-3 text-custom-gray-500' />
              <Paragraph label={'Size Chart'} className='mt-3 text-custom-gray-500' />
            </div>
            <div>
              <Paragraph label={'customer care'} fontWeight={FontWeight.semiBold} className='uppercase text-custom-gray-800' />
              <Paragraph label={'Contact Us'} className='mt-3 text-custom-gray-500' />
              <Paragraph label={'Payment'} className='mt-3 text-custom-gray-500' />
              <Paragraph label={'Bonus Point'} className='mt-3 text-custom-gray-500' />
              <Paragraph label={'Notices'} className='mt-3 text-custom-gray-500' />
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
            <div className='col-span-3'>
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
            <div className='col-span-2'>
              <Paragraph label={'we accept'} fontWeight={FontWeight.semiBold} className='uppercase text-custom-gray-800 mb-6' />
              <div className='flex items-center space-x-2'>
                <Image src={masterCardLogo} alt="Mastercard logo" />
                <Image src={paypalLogo} alt="Paypal logo" />
                <Image src={ebayLogo} alt="ebay logo" />
                <Image src={googlePayLogo} alt="gpay logo" />
                <Image src={monoBanklogo} alt="monobank logo" />
                <Image src={discoverLogo} alt="discover logo" />
                <Image src={westernUnionLogo} alt="discover logo" />
                <Image src={PayoneerLogo} alt="Payoneer logo" />
              </div>
              <div className='flex mt-2 items-center space-x-2'>
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
      </main>
    </div>
  )
}

export default App
