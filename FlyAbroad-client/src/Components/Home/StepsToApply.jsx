import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../PrimaryButton';
import UserContext from '@/Context/UserContext';

const StepsToApply = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <section className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-12'>
      {/* Header section */}
      <div className='text-center max-w-3xl mx-auto mb-12'>
        <div className='relative inline-block px-4'>
          <h3 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0B7077] drop-shadow-sm pr-10'>
            Ready to study abroad? Let’s get started!
          </h3>
          <img
            src="/kite.svg"
            className='w-10 h-10 md:w-12 md:h-12 absolute -top-4 right-0'
            alt="kite-icon"
          />
        </div>
        <p className='text-base md:text-lg text-gray-500 mt-4 max-w-xl mx-auto'>
          Four simple steps to start your international education journey
        </p>
      </div>

      {/* Steps section */}
      <div className='relative flex flex-col md:flex-row gap-8 md:gap-4 justify-between items-start md:items-center mt-16 mb-16 px-4 md:px-0'>
        {/* Background connecting line */}
        <div className='absolute left-10 top-4 bottom-4 w-1 md:left-4 md:right-4 md:w-auto md:h-1 md:top-12 z-[-1] bg-yellow-300 hidden sm:block'></div>
        
        {/* Step 1 */}
        <div className='bg-white md:bg-transparent flex md:flex-col flex-row items-center gap-4 md:gap-3 text-left md:text-center w-full md:w-1/4 z-10'>
          <img src="/create-profile.svg" className='w-16 h-16 md:w-24 md:h-24 object-contain hover:scale-105 transition-all shrink-0' alt="profile" />
          <div>
            <p className='font-semibold text-gray-700 text-base md:text-lg'>Create Profile</p>
            <p className='text-gray-500 text-sm mt-1 max-w-xs'>Sign up and complete your academic profile</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className='bg-white md:bg-transparent flex md:flex-col flex-row items-center gap-4 md:gap-3 text-left md:text-center w-full md:w-1/4 z-10'>
          <img src="/Counselling.svg" className='w-16 h-16 md:w-24 md:h-24 object-contain hover:scale-105 transition-all shrink-0' alt="counselor" />
          <div>
            <p className='font-semibold text-gray-700 text-base md:text-lg'>Choose University</p>
            <p className='text-gray-500 text-sm mt-1 max-w-xs'>Browse and shortlist universities and courses</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className='bg-white md:bg-transparent flex md:flex-col flex-row items-center gap-4 md:gap-3 text-left md:text-center w-full md:w-1/4 z-10'>
          <img src="/application.svg" className='w-16 h-16 md:w-24 md:h-24 object-contain hover:scale-105 transition-all shrink-0' alt="application form" />
          <div>
            <p className='font-semibold text-gray-700 text-base md:text-lg'>Apply</p>
            <p className='text-gray-500 text-sm mt-1 max-w-xs'>Submit applications with our guided process</p>
          </div>
        </div>

        {/* Step 4 */}
        <div className='bg-white md:bg-transparent flex md:flex-col flex-row items-center gap-4 md:gap-3 text-left md:text-center w-full md:w-1/4 z-10'>
          <img src="/campus.svg" className='w-16 h-16 md:w-24 md:h-24 object-contain hover:scale-105 transition-all shrink-0' alt="Campus" />
          <div>
            <p className='font-semibold text-gray-700 text-base md:text-lg'>Get Admitted</p>
            <p className='text-gray-500 text-sm mt-1 max-w-xs'>Receive admission and prepare for departure</p>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className='flex justify-center mt-8'>
        <PrimaryButton
          name="Get Started"
          onClick={() => navigate(user ? '/apply' : '/signup')}
          className='focus:outline-none transition-transform active:scale-95'
        />
      </div>
    </section>
  );
};

export default StepsToApply;