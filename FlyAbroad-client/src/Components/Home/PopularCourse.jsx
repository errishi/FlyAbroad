import React from 'react'
import SecondaryButton from '../SecondaryButton';
import CourseCard from './CourseCard';

const categories = [
  { name: 'All Programme', category: 'all', current: true },
  { name: 'UI/UX Design', category: 'ui-ux', current: false },
  { name: 'Program Design', category: 'program-design', current: false },
  { name: 'Program Design', category: 'program-design', current: false },
  { name: 'Program Design', category: 'program-design', current: false },
]

const PopularCourse = () => {
  return (
    <div className='lg:px-15 md:px-10 px-7 py-5 lg:mt-30 mt-15'>
      <div>
        <h1 className='text-center font-bold lg:text-5xl md:text-4xl text-2xl drop-shadow-lg text-[#FD661F]'>Popular Courses</h1>
        <img src="/course-Vector.svg" className='m-auto lg:pl-70 md:pl-50 pl-30 lg:pt-2 pt-1 md:w-80 lg:w-100 w-50' alt="vector" />
      </div>
      <div className='flex overflow-x-scroll lg:overflow-x-hidden lg:gap-6 md:gap-6 gap-4 lg:justify-center md:justify-center w-full h-auto my-10'>
        {categories.map((item)=>{
          return(
            <div>
              <SecondaryButton name={item.name} isCurrent={item.current} />
            </div>
          )
        })}
      </div>
      <div className='flex gap-5 lg:flex-nowrap flex-wrap justify-center'>
        <CourseCard title={"Product Management Basic - Course"} description={"Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia."} price={380} studentsEnroll={40} mrp={500} image={"/image-1.svg"} />
        <CourseCard title={"BM Data Science Professional Certificate"} description={"Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia."} price={678} mrp={899} studentsEnroll={14} image={"/image-2.svg"} />
        <CourseCard title={"The Science of Well-Being"} description={"Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia."} price={129} mrp={300} studentsEnroll={238} image={"/image-3.svg"} />
        <CourseCard title={"Python for Everybody Specialization"} description={"Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia."} price={459} mrp={699} studentsEnroll={328} image={"/image-4.svg"} />
      </div>
    </div>
  )
}

export default PopularCourse;