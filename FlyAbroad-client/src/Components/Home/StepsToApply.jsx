import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../PrimaryButton';
import UserContext from '@/Context/UserContext';

const StepsToApply = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);


  return (
    <div className='lg:px-15 md:px-10 px-7 py-5 mt-20 text-center'>
      <div className='text-center w-full'>
        <div className='relative lg:w-210 md:w-160 m-auto'>
          <h3 className='lg:text-4xl text-2xl font-semibold text-[#0B7077] drop-shadow-lg'>
            Ready to study abroad? Let’s get started!
          </h3>
          <img
            src="/kite.svg"
            className='lg:w-15 w-12 absolute lg:top-0 md:top-0 top-8 lg:right-4 md:right-10 smL:right-12 xs:right-10'
            alt="kite-icon"
          />
        </div>
        <p className='lg:text-lg text-[16px] text-gray-500 my-3 lg:w-210 m-auto'>
          Four simple steps to start your international education journey
        </p>
      </div>

      {/* Steps section */}
      <div className='flex mb-15 relative overflow-x-scroll lg:gap-0 md:gap-0 gap-7 flex-start justify-evenly lg:mx-0 md:mx-0 mx-5 lg:items-center lg:flex-row md:flex-row flex-col mt-12'>
        <div className='absolute lg:top-[30%] md:top-[30%] top-2 lg:left-auto md:left-auto left-10 lg:h-1.5 md:h-1.5 h-[95%] lg:w-[70%] md:w-[80%] w-1.5 -z-1 bg-yellow-300'></div>
        
        {/* Step items */}
        <div className='text-center mx-2 flex lg:flex-col md:flex-col flex-row items-center w-auto'>
          <img src="/create-profile.svg" className='lg:w-25 md:w-25 w-17 hover:scale-105 transition-all' alt="profile" />
          <div>
            <p className='font-semibold text-gray-500'>Create Profile</p>
            <p className='text-gray-500 lg:w-60 md:w-auto text-sm'>Sign up and complete your academic profile</p>
          </div>
        </div>

        <div className='text-center flex lg:flex-col md:flex-col flex-row items-center'>
          <img src="/Counselling.svg" className='w-30 hover:scale-105 transition-all' alt="counselor" />
          <div>
            <p className='font-semibold text-gray-500'>Choose University</p>
            <p className='text-gray-500 lg:w-60 md:w-auto text-sm'>Browse and shortlist universities and courses</p>
          </div>
        </div>

        <div className='text-center flex lg:flex-col md:flex-col flex-row items-center'>
          <img src="/application.svg" className='w-30 hover:scale-105 transition-all' alt="application form" />
          <div>
            <p className='font-semibold text-gray-500'>Apply</p>
            <p className='text-gray-500 lg:w-60 md:w-auto text-sm'>Submit applications with our guided process</p>
          </div>
        </div>

        <div className='text-center flex lg:flex-col md:flex-col flex-row items-center'>
          <img src="/campus.svg" className='w-30 hover:scale-105 transition-all' alt="Campus" />
          <div>
            <p className='font-semibold text-gray-500'>Get Admitted</p>
            <p className='text-gray-500 lg:w-60 md:w-auto text-sm'>Receive admission and prepare for departure</p>
          </div>
        </div>
      </div>

      {/* Get Started button */}
      {user ? 
      <div className='w-fit m-auto' onClick={() => navigate('/apply')}>
          <PrimaryButton name={"Get Started"} />
        </div>
      : (
        <div className='w-fit m-auto' onClick={() => navigate('/signup')}>
          <PrimaryButton name={"Get Started"} />
        </div>
      )}
    </div>
  )
}

export default StepsToApply;
