import React from 'react'
import PrimaryButton from '../PrimaryButton';

const Header = () => {
  return (
    <div id='home-header' className='lg:px-15 md:px-10 px-7 py-5'>
      <div className='flex justify-between lg:flex-row md:flex-row flex-col w-full h-full'>
        <div className='w-auto h-auto'>
          <div className='bg-white rounded-md w-fit px-4 py-1 mt-25'>
            <p>Never stop learning</p>
          </div>
          <div className='lg:w-150 md:w-90 w-auto mt-4'>
            <h1 className='lg:text-6xl text-4xl font-bold text-[#09585e]'>Grow up your skills by online courses with FlyAbroad</h1>
          </div>
          <div className='mt-7 flex flex-row sm:gap-5 md:justify-start justify-between items-center'>
            <PrimaryButton name={"Explore Path"} url={""} />
            <img src="/Button.svg" className='lg:h-10 md:h-9 sm:h-8 h-7' alt="review" />
          </div>
        </div>
        <div className='w-auto h-auto flex'>
          <img src="./src/assets/assisted-student.svg" className='absolute lg:top-[65%] md:top-[60%] top-175 lg:right-100 md:right-60 right-10 lg:w-50 md:w-40 w-35' alt="Students" />
          <img src="./src/assets/student.png" className='lg:mr-15 md:mr-15 m-auto -mb-5 lg:w-100 w-80' alt="student" />
          <img src="./src/assets/volume.png" className='absolute lg:top-[35%] md:top-[25%] top-125 lg:right-10 md:right-7 lg:w-30 md:w-30 w-20' alt="Volume" />
        </div>
      </div>
    </div>
  )
}

export default Header;