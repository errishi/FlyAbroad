import React from 'react'
import BlogButton from './BlogButton';
import PrimaryButton from '../PrimaryButton';

const BlogCard = ({title, description, link, image, date}) => {
  return (
    <div className='border-gray-300 cursor-pointer border hover:bg-slate-300/30 lg:w-80 md:w-80 w-auto p-3 rounded-lg relative'>
        <img src={image} className='w-80 rounded-xl' alt="post image" />
        <div className='absolute top-38 left-8 text-white border px-1.5 rounded-full bg-gray-500/30 backdrop-blur-xs'>
          <p className='text-[14px]'>{date}</p>
        </div>
        <div className='mt-4'>
            <h2 className='font-semibold'>{title}</h2>
            <p className='my-2 text-[14px] overflow-y-hidden h-20'>{description}</p>
        </div>
        <div className='w-fit my-4'>
            <PrimaryButton name={"Learn more"} />
        </div>
    </div>
  )
}

export default BlogCard;