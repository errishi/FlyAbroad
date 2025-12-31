import React from 'react'
import Button from '../Button';
import { Link } from 'react-router-dom';

const UniversityData = () => {
  return (
    <div className='flex justify-between lg:flex-row md:flex-row flex-col lg:px-20 lg:py-10 lg:mx-15 md:mx-10 px-7 py-5 mt-15 rounded-xl bg-[#11828a] text-white'>
        <div className='flex flex-col justify-center mt-5 lg:mt-0 md:mt-0'>
            <h2 className='text-3xl lg:text-5xl md:text-4xl font-semibold text-center lg:text-start md:text-start'>Explore University</h2>
            <Link to={"/university"} className='w-fit m-auto lg:m-0 md:-0'>
                <Button name={"University"} />
            </Link>
        </div>
        <div className='flex flex-wrap lg:mt-0 md:mt-0 mt-10 w-auto h-auto gap-4'>
            <img src="/university-student-image.svg" className='w-30 lg:mt-0 md:mt-0 mt-10' alt="image" />
            <img src="/university-image-1.jpg" className='w-60 rounded-2xl' alt="image" />
            <img src="/university-image-2.jpg" className='w-30 h-fit rounded-xl' alt="image" />
        </div>
    </div>
  )
}

export default UniversityData;