import React from 'react'
import SecondaryButton from '../SecondaryButton';

const CategoryCard = ({title, description, image}) => {
  return (
    <div className='rounded-xl hover:shadow-lg transition-all hover:bg-radial-[at_25%_25%] from-[#F5F5F5] to-white to-75% w-70 h-80 smL:w-70 xs:w-60 lg:px-5 md:px-5 sm:px-5 px-5 xs:px-3 py-8 text-center'>
        <img src={image} className='mb-5 m-auto' alt="category image" />
        <h2 className='text-2xl text-[#0B7077]'>{title}</h2>
        <p className='py-3 mb-3'>{description}</p>
        <div className='hover:text-[#0B7077]'>
            <SecondaryButton name={"Explore Course"} />
        </div>
    </div>
  )
}

export default CategoryCard;