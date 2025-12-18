import React from 'react'

const GiftCard = () => {
  return (
    <div id='giftCard' className='lg:px-15 md:px-10 px-7 py-5 lg:mt-60 mt-25 m-auto lg:mx-25 mx-5 lg:h-auto md:h-auto h-180 text-white'>
      <div className='flex lg:flex-row md:flex-row flex-col relative'>
        <div className='my-5 md:w-83 lg:w-full'>
          <h2 className='lg:text-5xl md:text-4xl text-2xl font-bold mt-5'>Why You should buy <br />gift cards ?</h2>
          <ul className='flex flex-col mt-8 gap-5'>
            <li className='flex gap-3 items-center'>
              <img src="/star.svg" alt="star" />
              <p className='text-sm'>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
            </li>
            <li className='flex gap-3 items-center'>
              <img src="/star.svg" alt="star" />
              <p className='text-sm'>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
            </li>
            <li className='flex gap-3 items-center'>
              <img src="/star.svg" alt="star" />
              <p className='text-sm'>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
            </li>
            <li className='flex gap-3 items-center'>
              <img src="/star.svg" alt="star" />
              <p className='text-sm'>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
            </li>
          </ul>
        </div>
        <div>
          <img src="/girlImage.svg" className='lg:w-140 md:w-90 absolute lg:-right-7 md:top-14 md:right-1 smL:top-101.5 xs:top-119.5 lg:-top-47.5' alt="girl" />
        </div>
      </div>
    </div>
  )
}

export default GiftCard