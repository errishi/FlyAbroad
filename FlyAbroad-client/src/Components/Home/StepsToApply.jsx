import React from 'react'

const StepsToApply = () => {
  return (
    <div className='lg:px-15 md:px-10 px-7 py-5 mt-20'>
        <div className='text-center w-full'>
            <div className='relative lg:w-210 md:w-160 m-auto'>
                <h3 className='lg:text-4xl text-2xl font-semibold'>Ready to study abroad? Let’s get started!</h3>
                <img src="/kite.svg" className='lg:w-15 w-12 absolute lg:top-0 md:top-0 top-8 lg:right-4 md:right-10 smL:right-12 xs:right-10' alt="kite-icon" />
            </div>
            <p className='lg:text-lg text-[16px] my-3 lg:w-210 m-auto'>FlyAbroad offers a one stop solution to all the steps you require in order to explore, shortlist and get started for your journey abroad an even beyond that.</p>
        </div>
        <div className='flex relative overflow-x-scroll lg:gap-0 md:gap-0 gap-7 flex-start justify-center lg:mx-0 md:mx-0 mx-15 lg:items-center lg:flex-row md:flex-row flex-col mt-12'>
            <div className='absolute lg:top-[40%] md:top-[40%] top-2 lg:left-auto md:left-auto left-15 lg:h-1.5 md:h-1.5 h-[95%] lg:w-[80%] md:w-[90%] w-1.5 -z-1 bg-yellow-300'></div>
            <li className='text-center flex lg:flex-col md:flex-col flex-row items-center'>
                <img src="/Discover.svg" className='w-30' alt="discover" />
                <p className='font-semibold text-gray-500'>Discover</p>
            </li>
            <li className='text-center flex lg:flex-col md:flex-col flex-row items-center'>
                <img src="/Counselling.svg" className='w-30' alt="counselor" />
                <p className='font-semibold text-gray-500'>Counselling</p>
            </li>
            <li className='text-center flex lg:flex-col md:flex-col flex-row items-center'>
                <img src="/shortlisting.svg" className='w-30' alt="shortlist" />
                <p className='font-semibold text-gray-500'>Shortlist</p>
            </li>
            <li className='text-center flex lg:flex-col md:flex-col flex-row items-center'>
                <img src="/exam.svg" className='w-30' alt="exam" />
                <p className='font-semibold text-gray-500'>Exam</p>
            </li>
            <li className='text-center flex lg:flex-col md:flex-col flex-row items-center'>
                <img src="/application.svg" className='w-30' alt="application form" />
                <p className='font-semibold text-gray-500'>Application</p>
            </li>
            <li className='text-center flex lg:flex-col md:flex-col flex-row items-center'>
                <img src="/offer letter.svg" className='w-30' alt="application form" />
                <p className='font-semibold text-gray-500'>Offer Letter</p>
            </li>
            <li className='text-center flex lg:flex-col md:flex-col flex-row items-center'>
                <img src="/finance.svg" className='w-30' alt="fee" />
                <p className='font-semibold text-gray-500'>Finance</p>
            </li>
            <li className='text-center flex lg:flex-col md:flex-col flex-row items-center'>
                <img src="/visa.svg" className='w-30' alt="visa" />
                <p className='font-semibold text-gray-500'>Visa</p>
            </li>
            <li className='text-center flex lg:flex-col md:flex-col flex-row items-center'>
                <img src="/travel.svg" className='w-30' alt="travel" />
                <p className='font-semibold text-gray-500'>Travel</p>
            </li>
            <li className='text-center flex lg:flex-col md:flex-col flex-row items-center'>
                <img src="/campus.svg" className='w-30' alt="Campus" />
                <p className='font-semibold text-gray-500'>Campus</p>
            </li>
        </div>
    </div>
  )
}

export default StepsToApply;