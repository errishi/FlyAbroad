import React from 'react'

const Training = () => {
  return (
    <div className='flex justify-around lg:flex-row md:flex-row flex-col-reverse lg:px-15 md:px-10 px-7 py-5 mt-20'>
      <div className='lg:mt-0 mt-10'>
        <img src="/src/assets/training.svg" className='lg:w-auto md:w-100' alt="ID Card" />
      </div>
      <div className='lg:my-auto'>
        <span className='bg-violet-200/70 px-3 py-1 rounded-md text-[#09585e]'>Training</span>
        <h1 className='text-[#FD661F] lg:text-5xl md:text-4xl text-2xl font-bold mt-7'>Staff Training</h1>
        <ul className='mt-5 flex flex-col lg:gap-5 md:gap-0 gap-2'>
          <li className='flex items-center gap-4 my-3'>
            <img src="/src/assets/assets-1.svg" className='bg-white p-2 w-9 shadow-md overflow-visible rounded-full' alt="assets" />
            <p className='text-gray-500 lg:text-[16px] text-sm w-90 md:w-80'>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
          </li>
          <li className='flex items-center gap-4 my-3'>
            <img src="/src/assets/assets-2.svg" className='bg-white p-2 w-9 shadow-md overflow-visible rounded-full' alt="assets" />
            <p className='text-gray-500 lg:text-[16px] text-sm w-90 md:w-80'>TA’s and presenters can be moved to the front of the class.</p>
          </li>
          <li className='flex items-center gap-4 my-3'>
            <img src="/src/assets/assets-3.svg" className='bg-white p-2 w-9 shadow-md overflow-visible rounded-full' alt="assets" />
            <p className='text-gray-500 lg:text-[16px] text-sm w-90 md:w-80'>Teachers can easily see all students and class data at one time.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Training;