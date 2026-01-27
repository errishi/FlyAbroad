import React from 'react'

const AboutHeader = () => {
  return (
    <div className=' bg-[url(/about-image-2.jpg)] bg-no-repeat bg-cover h-80'>
        <div className='h-full lg:px-20 md:px-15 px-8 bg-linear-to-r from-[#0B7077] lg:via-transparent md:via-transparent to-transparent'>
            <h1 className='text-white pt-15 font-semibold lg:text-5xl text-4xl drop-shadow-lg'>The Story Behind UneFly</h1>
            <p className='text-gray-100 lg:w-150 md:w-150 drop-shadow-lg lg:mt-3 md:mt-3 mt-1.5 lg:text-[16px] text-[14px]'>We bring our promise of <b> 'Study Abroad for Everyone'</b> to life by bridging the gap between ambition and opportunity. <b>UneFly</b> is dedicated to breaking down <b>financial and logistical barriers</b>, transforming your journey into something seamless, affordable, and life-changing.</p>
        </div>
    </div>
  )
}

export default AboutHeader;