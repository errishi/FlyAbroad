import React from 'react'
import SecondaryButton from '../SecondaryButton';

const categories = [
  { name: 'All Programme', category: 'all', current: true },
  { name: 'UI/UX Design', category: 'ui-ux', current: false },
  { name: 'Program Design', category: 'program-design', current: false },
  { name: 'Program Design', category: 'program-design', current: false },
  { name: 'Program Design', category: 'program-design', current: false },
]

const PopularCourse = () => {
  return (
    <div className='lg:px-15 md:px-10 px-7 py-5 lg:mt-30 md:mt-30 mt-15'>
      <div>
        <h1 className='text-center font-bold lg:text-5xl md:text-4xl text-2xl text-[#FD661F]'>Popular Courses</h1>
        <img src="/course-Vector.svg" className='m-auto lg:pl-70 md:pl-50 pl-30 lg:pt-2 pt-1 md:w-80 lg:w-100 w-50' alt="vector" />
      </div>
      <div className='flex overflow-x-scroll lg:overflow-x-hidden lg:gap-6 md:gap-6 gap-4 lg:justify-center md:justify-center w-full h-auto my-10'>
        {categories.map((item)=>{
          return(
            <SecondaryButton name={item.name} isCurrent={item.current} />
          )
        })}
      </div>
    </div>
  )
}

export default PopularCourse;