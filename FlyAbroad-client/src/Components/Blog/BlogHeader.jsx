import React from 'react'
import PrimaryButton from '../PrimaryButton';
import BlogButton from './BlogButton';

const BlogHeader = () => {
  return (
    <div className='flex justify-between lg:flex-row md:flex-row flex-col lg:items-center md:items-center lg:px-15 md:px-10 px-7 py-5 bg-[url(/blog-bg-image.jpg)] lg:h-40 md:h-30 lg:bg-contain md:bg-contain bg-cover lg:bg-repeat md:bg-repeat bg-no-repeat'>
        <div>
            <h1 className='text-[#0B7077] font-semibold lg:text-5xl text-4xl drop-shadow-lg'>Blogs</h1>
            <p className='text-gray-700 drop-shadow-lg lg:mt-3 md:mt-3 mt-1.5 lg:text-[16px] text-[14px]'>Discover our latest articles covering industry updates & expert advice.</p>
        </div>
        <div className='w-fit lg:mt-0 md:mt-0 mt-3'>
            <BlogButton name={"View All"} />
        </div>
    </div>
  )
}

export default BlogHeader;