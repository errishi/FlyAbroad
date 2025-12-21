import React from 'react'
import TopPostCard from './TopPostCard';

const TopPost = () => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-col flex-wrap gap-3'>
        <TopPostCard />
        <TopPostCard />
        <TopPostCard />
    </div>
  )
}

export default TopPost;