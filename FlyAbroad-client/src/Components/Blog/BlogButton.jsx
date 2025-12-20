import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BlogButton = () => {
  return (
    <div className='flex items-center justify-center cursor-pointer bg-white/30 backdrop-blur-xs gap-2 border text-center lg:px-4 px-3 lg:py-1.5 py-1 rounded-full'>
        <p className='lg:text-[16px] text-[14px]'>View All</p>
        <div className='bg-white flex items-center text-center rounded-full p-0.5'>
            <ArrowForwardIcon />
        </div>
    </div>
  )
}

export default BlogButton;