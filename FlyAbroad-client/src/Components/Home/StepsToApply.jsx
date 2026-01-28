import React from 'react'
import PrimaryButton from '../PrimaryButton';

const StepsToApply = ({setCurrentAuth}) => {
  return (
    <div className='lg:px-15 md:px-10 px-7 py-5 mt-20 text-center'>
        <div className='text-center w-full'>
            <div className='relative lg:w-210 md:w-160 m-auto'>
                <h3 className='lg:text-4xl text-2xl font-semibold text-[#0B7077] drop-shadow-lg'>Ready to study abroad? Let’s get started!</h3>
                <img src="/kite.svg" className='lg:w-15 w-12 absolute lg:top-0 md:top-0 top-8 lg:right-4 md:right-10 smL:right-12 xs:right-10' alt="kite-icon" />
            </div>
            <p className='lg:text-lg text-[16px] text-gray-500 my-3 lg:w-210 m-auto'>Four simple steps to start your international education journey</p>
        </div>
        <div className='flex mb-15 relative overflow-x-scroll lg:gap-0 md:gap-0 gap-7 flex-start justify-evenly lg:mx-0 md:mx-0 mx-15 lg:items-center lg:flex-row md:flex-row flex-col mt-12'>
            <div className='absolute lg:top-[30%] md:top-[30%] top-2 lg:left-auto md:left-auto left-15 lg:h-1.5 md:h-1.5 h-[95%] lg:w-[70%] md:w-[90%] w-1.5 -z-1 bg-yellow-300'></div>
            <li className='text-center flex lg:flex-col md:flex-col flex-row items-center'>
                <img src="/create-profile.svg" className='w-25 hover:scale-105 transition-all' alt="profile" />
                <p className='font-semibold text-gray-500'>Create Profile</p>
                <p className='text-gray-500 w-60'>Sign up and complete your academic profile</p>
            </li>
            <li className='text-center flex lg:flex-col md:flex-col flex-row items-center'>
                <img src="/Counselling.svg" className='w-30 hover:scale-105 transition-all' alt="counselor" />
                <p className='font-semibold text-gray-500'>Choose University</p>
                <p className='text-gray-500 w-60'>Browse and shortlist universities and courses</p>
            </li>
            <li className='text-center flex lg:flex-col md:flex-col flex-row items-center'>
                <img src="/application.svg" className='w-30 hover:scale-105 transition-all' alt="application form" />
                <p className='font-semibold text-gray-500'>Apply</p>
                <p className='text-gray-500 w-60'>Submit applications with our guided process</p>
            </li>
            <li className='text-center flex lg:flex-col md:flex-col flex-row items-center'>
                <img src="/campus.svg" className='w-30 hover:scale-105 transition-all' alt="Campus" />
                <p className='font-semibold text-gray-500'>Get Admitted</p>
                <p className='text-gray-500 w-60'>Receive admission and prepare for departure</p>
            </li>
        </div>
        <div className='w-fit m-auto' onClick={()=>setCurrentAuth(true)}>
            <PrimaryButton name={"Get Started"} />
        </div>
    </div>
  )
}

export default StepsToApply;