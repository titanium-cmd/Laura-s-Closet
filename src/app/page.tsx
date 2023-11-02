import Image from 'next/image'
import { ArrivalLady, ArrowIcon, BasketIcon, MaskedArrivalBg } from '../../public/assets'
import Input from './components/input'
import { CustomColors, FontWeight, H1, H4, Paragraph } from './components/text'
import Ul from './components/ul'

const App = () => (
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
          fontSize='text-base'
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
            <button className='border flex space-x-3 items-center font-semibold tracking-widest border-custom-gray-100 px-3 py-2.5 text-base uppercase text-custom-gray-100'>
              <span>Place your Order</span>
              <Image src={ArrowIcon} alt={'arrow'} />
            </button>
          </div>
          <Image src={MaskedArrivalBg} fill={true} alt='arrival' />
        </section>
        <section className='bg-custom-orange relative flex items-center justify-center'>
          <div className=' bg-[white] h-[347px] w-[347px] rounded-full'></div>
          <Image src={ArrivalLady} width={312} height={607} className='absolute top-14' alt={'lady'} />
        </section>
      </section>
    </main>
  </div>
)

export default App
