import React from 'react'
import StoryButton from '../StoryButton';

const StoryCard = ({image, title, description}) => {
  return (
    <div className='border bg-[#f9f9f9] lg:w-90 md:w-90 w-auto h-95 py-5 px-5 rounded-2xl shadow-lg'>
        <img src={image} className='w-80 m-auto rounded-xl' alt="image" />
        <h2 className='font-semibold text-start my-2'>{title}</h2>
        <p className='mb-4 text-start line-clamp-3 text-[14px] text-gray-600'>{description}</p>
        <StoryButton />
    </div>
  )
}

export default StoryCard;