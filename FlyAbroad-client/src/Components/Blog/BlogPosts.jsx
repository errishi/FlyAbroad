import React from 'react'
import BlogCard from './BlogCard';
import TopPost from './TopPost';
import { blogs } from './BlogData';
import StoryCard from '../Home/StoryCard';

const BlogPosts = () => {
  return (
    <div className='lg:px-15 md:px-10 px-7 py-5 my-7 grid lg:grid-cols-1 flex-col'>
      <div className='flex lg:justify-evenly justify-center mx-18 lg:gap-7 gap-6 lg:flex-row md:flex-row flex-col flex-wrap w-fit'>
        {blogs.map((item, index)=>{
          return(
            <div key={index}>
              <StoryCard title={item.title} description={item.excerpt} category={item.category} readTime={item.readTime} image={item.image} />
            </div>
          );
        })}
      </div>
      <div className='lg:mt-10 mt-10 lg:w-95'>
        <h2 className='uppercase font-bold lg:text-3xl md:text-3xl text-2xl text-[#0B7077] drop-shadow-md'>Top Resources</h2>
        <div className='mt-5'>
          <TopPost />
        </div>
      </div>
    </div>
  )
}

export default BlogPosts;