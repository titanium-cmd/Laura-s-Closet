import { motion, useScroll, useSpring } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { BasketIcon, SearchIcon } from '../../../../public/assets'
import Input from '../input'
import { FontWeight, H4 } from '../text'
import Ul from '../ul'

const Header = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const router = useRouter();

  return (
    <>
      <motion.div className="fixed top-0 left-0 right-0 h-2 rounded-full z-50 bg-custom-red transform origin-left" style={{ scaleX }} />
      <header>
        <div className='py-4 bg-custom-light-gray md:px-12 px-5 flex items-center justify-between'>
          <span onClick={() => router.push('/')}>
            <H4
              label="Laura's Closet"
              className='text-custom-gray-700 cursor-pointer' />
          </span>
          <Input placeholder='Search for an Item...' prefix={<Image src={SearchIcon} alt="Search icon" />} />
          <nav>
            <Ul
              ulClassName="space-x-10"
              links={[
                { value: "Store", href: '/store' },
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
        <nav className='md:px-12 px-5 py-5'>
          <Ul
            fontSize='text-md'
            fontWeight={FontWeight.semiBold}
            ulClassName='text-custom-gray-700 space-x-10 inline-block items-center text-center justify-between'
            liClassName='inline-block'
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
    </>
  )
}

export default Header
