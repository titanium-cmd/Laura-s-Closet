import Image from 'next/image'
import { ArrivalLady, ArrowIcon, BasketIcon, Hightlight1, Hightlight2, Hightlight3, Hightlight4, MaskedArrivalBg, Product1, Product2, Product3, Product4 } from '../../public/assets'
import { HighlightCard, ProductCard } from './components/cards'
import Input from './components/input'
import SectionTitle from './components/section-title'
import { CustomColors, FontWeight, H1, H4, Paragraph } from './components/text'
import Ul from './components/ul'

const App = () => {
  return (
    <div>
      <header>
        <div className='py-4 bg-custom-light-gray px-12 flex items-center justify-between'>
          <H4
            label="Laura's Closet"
            color={CustomColors.gray700} />
          <Input placeholder='Search for an Item...' />
          <nav>
            <Ul links={[
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
            color={CustomColors.gray700}
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
        <section className='grid md:grid-cols-3'>
          <section className="relative md:col-span-2 bg-[#111827] bg-opacity-95">
            <div className="relative z-10 bg-custom-gray-800 lg:mx-24 lg:my-[130px] w-fit p-10">
              <H1 label="Get up to 30% off" color={CustomColors.gray50} />
              <H1 label="New Arrivals" color={CustomColors.orange} />
              <Paragraph label={'Introducing our latest collection of products'} color={CustomColors.gray100} className='mt-3' />
              <br />
              <br />
              <button className='border flex space-x-3 items-center font-semibold tracking-widest border-custom-gray-100 px-3 py-2.5 text-md uppercase text-custom-gray-100'>
                <span>Place your Order</span>
                <Image src={ArrowIcon} alt={'arrow'} />
              </button>
            </div>
            <Image src={MaskedArrivalBg} fill={true} alt='arrival' />
          </section>
          <section className='bg-custom-orange relative flex items-center justify-center'>
            <div className='bg-[white] h-[347px] w-[347px] rounded-full'></div>
            <Image src={ArrivalLady} width={312} height={607} className='absolute top-14' alt={'lady'} />
          </section>
        </section>
        <section className='md:px-28'>
          <SectionTitle title={'This Weeks Highlights'} />
          <div className='h-[506px] w-full grid md:grid-cols-8 gap-5'>
            <HighlightCard className='col-span-3' imgSrc={Hightlight1} title={'Exclusive Shoes'} />
            <HighlightCard className='col-span-5' imgSrc={Hightlight2} title={'Exquisite Styles & Collections'} />
          </div>
          <br />
          <div className='h-[506px] w-full grid md:grid-cols-8 gap-5'>
            <HighlightCard className='col-span-5' imgSrc={Hightlight3} title={'New Arrivals'} />
            <HighlightCard className='col-span-3' imgSrc={Hightlight4} title={'Exclusive Items'} />
          </div>
        </section>
        <section>
          <SectionTitle title={'Popular this week'} />
          <div className='md:px-28 md:my-20 gap-5 grid grid-cols-4'>
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
        </section>
      </main>
    </div>
  )
}

export default App
