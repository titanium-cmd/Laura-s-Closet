import React from 'react'
import { FontWeight, Paragraph, SubTitle } from '../text'

interface CountdownProps {
  endDate: string
}

interface CountDownTimeProps {
  title: string
  subTitle: string
}

const CountDownTime: React.FC<CountDownTimeProps> = ({ title, subTitle }) => {
  return (
    <div>
      <Paragraph fontWeight={FontWeight.bold} className='text-xl' label={title} />
      <SubTitle label={subTitle} />
    </div>
  )
}


const Countdown: React.FC<CountdownProps> = () => {
  return (
    <div className='flex md:space-x-6 space-x-4 items-center text-custom-gray-50'>
      <CountDownTime title={'07'} subTitle={'Days'} />
      <span className='mb-6 text-[#9FC9E7] text-xl'>:</span>
      <CountDownTime title={'08'} subTitle={'Hours'} />
      <span className='mb-6 text-[#9FC9E7] text-xl'>:</span>
      <CountDownTime title={'04'} subTitle={'Minutes'} />
      <span className='mb-6 text-[#9FC9E7] text-xl'>:</span>
      <CountDownTime title={'05'} subTitle={'Seconds'} />
    </div>
  )
}

export default Countdown
