import React from 'react'
import CarouselOrientation from '../CarouselOrientation';

const Exclusive = () => {
  return (
    <div className='lg:px-15 md:px-10 px-7 py-5 mt-20 lg:mb-0 md:mb-10 mb-12'>
      <div>
        <h1 className='text-center font-bold lg:text-5xl md:text-4xl text-2xl text-[#0B7077]'>Exclusive Bundles</h1>
        <img src="/category-Vector.svg" className='m-auto lg:pl-70 md:pl-50 pl-30 lg:pt-2 pt-1 md:w-80 lg:w-100 w-50' alt="vector" />
        <p className='lg:w-135 md:w-120 lg:text-[16px] text-[14px] m-auto text-center my-6 text-gray-500'>FlyAbroad is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
      </div>
      <div className='flex gap-5 items-center lg:flex-row md:flex-row lg:mx-5 md:mx-5 smL:mx-5 overflow-hidden lg:overflow-visible md:overflow-visible smL:overflow-visible flex-row relative mt-20'>
        <CarouselOrientation />
      </div>
    </div>
  )
}

export default Exclusive;