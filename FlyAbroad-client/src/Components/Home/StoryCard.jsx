import React from 'react'
import StoryButton from '../StoryButton';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const StoryCard = ({ image, title, description, category, readTime, id }) => {
  return (
    <div className='border hover:border-[#0B7077]/70 flex flex-col justify-between bg-[#f9f9f9] lg:w-90 md:w-90 w-auto h-110 py-5 px-5 rounded-2xl shadow-lg'>
      <div className='relative'>
        <img src={image} className='w-80 h-50 object-cover m-auto rounded-xl' alt="image" />
        <div className="absolute top-4 left-4">
          <span className="bg-[#0B7077] text-white px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </span>
        </div>
      </div>
      <h2 className='font-semibold text-start my-2'>{title}</h2>
      <p className='mb-4 text-start line-clamp-3 text-[14px] text-gray-600'>{description}</p>
      <hr className='' />

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock className="size-4" />
          <span>{readTime}</span>
        </div>

        <Link to={`/blog/${id}`}>
          <StoryButton />
        </Link>
      </div>
    </div>
  )
}

export default StoryCard;