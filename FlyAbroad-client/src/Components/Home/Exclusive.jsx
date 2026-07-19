import React from 'react'
import CarouselOrientation from '../CarouselOrientation';

const Exclusive = ({setReadFeedback, sendData}) => {
  return (
    <div className='w-full max-w-7xl mx-auto lg:px-15 md:px-10 px-7 py-5 mt-20 lg:mb-0 md:mb-10 mb-5'>
      <div>
        <h1 className='text-center font-bold lg:text-5xl md:text-4xl text-2xl drop-shadow-lg text-[#0B7077]'>What Our Students Say</h1>
        <img src="/category-Vector.svg" className='m-auto lg:pl-70 md:pl-50 pl-30 lg:pt-2 pt-1 md:w-80 lg:w-100 w-50' alt="vector" />
        <p className='lg:w-155 md:w-120 lg:text-lg text-[16px] m-auto text-center my-6 text-gray-500'>Read genuine reviews from students who achieved their dreams with UneFly</p>
      </div>
      <div className=''>
        <CarouselOrientation setReadFeedback={setReadFeedback} sendData={sendData} />
      </div>
    </div>
  )
}

export default Exclusive;