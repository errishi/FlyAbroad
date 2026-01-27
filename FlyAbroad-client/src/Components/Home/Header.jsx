import React from 'react'
import PrimaryButton from '../PrimaryButton';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id='home-header' className='lg:px-15 md:px-10 px-7 py-5 relative'>
      <div className='flex justify-between lg:flex-row md:flex-row flex-col w-full h-full'>
        <div className='w-auto h-auto'>
          <div className='bg-white rounded-md w-fit px-4 py-1 mt-25'>
            <p>Never stop learning</p>
          </div>
          <div className='lg:w-180 md:w-100 w-auto mt-4'>
            <h1 className='lg:text-6xl text-4xl font-bold text-[#09585e] drop-shadow-lg'>Navigate Your International Education With Confidence.</h1>
          </div>
          <div className='mt-7 flex flex-row sm:gap-5 md:justify-start justify-between items-center'>
            <Link to={"/courses"}>
              <PrimaryButton name={"Explore Path"} url={""} />
            </Link>
            <img src="/Button.svg" className='lg:h-10 md:h-9 sm:h-8 h-7' alt="review" />
          </div>
        </div>
        <div className='w-auto h-auto flex relative'>
          <img src="/assisted-student.svg" className='absolute lg:top-[75%] md:top-[70%] top-63 lg:right-100 md:right-60 right-5 lg:w-50 md:w-40 w-35' alt="Students" />
          <img src="/student.png" className='lg:mr-15 md:mr-15 m-auto -mb-5 lg:w-100 w-80' alt="student" />
          <img src="/volume.png" className='absolute lg:top-[25%] md:top-[25%] top-12 lg:right-10 md:-right-5 lg:w-30 md:w-30 w-20' alt="Volume" />
        </div>
      </div>
      <div className='hidden lg:block w-100 h-auto absolute lg:left-[46%] md:left-[42%] md:bottom-4 lg:-bottom-15'>
        <img src="/explore-more-btn.svg" className='z-2 w-30' alt="explore button" />
        <img src="/Ellipse.svg" className='absolute -z-1 w-35 lg:-left-[2.5%] md:left-[40%] lg:-bottom-3 md:bottom-0' alt="explore button" />
      </div>
    </div>
  )
}

export default Header;