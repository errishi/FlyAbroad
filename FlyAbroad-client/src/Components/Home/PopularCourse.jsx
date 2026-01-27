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

const courseData = [
  {
    title: "Product Management Basic - Course",
    description: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    price: 380,
    studentsEnroll: 40,
    mrp: 400,
    image: "/image-1.svg"
  },
  {
    title: "BM Data Science Professional Certificate",
    description: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    price: 678,
    studentsEnroll: 14,
    mrp: 899,
    image: "/image-2.svg"
  },
  {
    title: "The Science of Well-Being",
    description: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    price: 129,
    studentsEnroll: 328,
    mrp: 300,
    image: "/image-3.svg"
  },
  {
    title: "Python for Everybody Specialization",
    description: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    price: 459,
    studentsEnroll: 40,
    mrp: 679,
    image: "/image-4.svg"
  },
]

const PopularCourse = () => {
  return (
    <div className='lg:px-15 md:px-10 px-7 py-5 lg:mt-10 mt-15'>
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
      <div className='flex gap-5 justify-center lg:flex-row md:flex-row flex-col'>
        {courseData.map((item, index)=>{
          return(
            <CourseCard title={item.title} description={item.description} image={item.image} price={item.price} mrp={item.mrp} studentsEnroll={item.studentsEnroll} />
          );
        })}
      </div>
    </div>
  )
}

export default PopularCourse;