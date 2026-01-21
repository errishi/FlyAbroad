import React from 'react'
import { CoursesSection } from './CoursesSection';

const PopularCourse = () => {
  return (
    <div className='lg:px-15 md:px-10 px-7 py-5 lg:mt-30 mt-15'>
      <div>
        <h1 className='text-center font-bold lg:text-5xl md:text-4xl text-2xl drop-shadow-lg text-[#FD661F]'>Popular Courses</h1>
        <img src="/course-Vector.svg" className='m-auto lg:pl-70 md:pl-50 pl-30 lg:pt-2 pt-1 md:w-80 lg:w-100 w-50' alt="vector" />
      </div>
      <p className='text-center text-gray-500 mt-3 lg:text-lg md:text-lg text-[16px]'>Explore our wide range of programs designed for excellence and innovation</p>
      <CoursesSection />
    </div>
  )
}

export default PopularCourse;