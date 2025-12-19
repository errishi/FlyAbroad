import React from 'react'
import ExclusiveCarousel from './ExclusiveCarousel';

const Exclusive = () => {
  return (
    <div className='lg:px-15 md:px-10 px-7 py-5 mt-20 mb-12'>
      <div>
        <h1 className='text-center font-bold lg:text-5xl md:text-4xl text-2xl text-[#0B7077]'>Exclusive Bundles</h1>
        <img src="/category-Vector.svg" className='m-auto lg:pl-70 md:pl-50 pl-30 lg:pt-2 pt-1 md:w-80 lg:w-100 w-50' alt="vector" />
        <p className='lg:w-135 md:w-120 lg:text-[16px] text-[14px] m-auto text-center my-6 text-gray-500'>FlyAbroad is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
      </div>
      <div className='flex gap-5 lg:flex-row md:flex-row flex-col mt-20'>
        <ExclusiveCarousel title={"Product Management Basic - Course"} description={"Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia."} price={380} studentsEnroll={40} mrp={500} image={"/image-1.svg"} />
      </div>
    </div>
  )
}

export default Exclusive;