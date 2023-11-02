import Image from 'next/image'
import { BasketIcon } from '../../public/assets'
import Input from './components/input'
import { CustomColors, FontWeight, H4 } from './components/text'
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
  </div>
)

export default App
