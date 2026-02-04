import React from 'react'
import StoryCard from './StoryCard';
import { Button } from "../ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs } from '../Blog/BlogData';

const StorySection = () => {
  return (
    <div className='lg:px-15 md:px-10 px-7 py-5 lg:h-210 md:h-205 h-460 lg:mt-5 mt-10 text-center bg-[url(/design.svg)] bg-no-repeat bg-cover bg-center lg:mask-y-from-195 md:mask-y-from-175 mask-y-from-430 lg:mask-x-from-320'>
        <div className='lg:mt-15 md:mt-13 mt-20'>
        <div>
            <h2 className='lg:text-4xl text-2xl font-semibold'>The Hub of Insights, Stories & Success</h2>
            <p className='lg:text-lg text-[16px] text-gray-500 my-3 lg:w-210 m-auto'>Discover real journeys, expert tips, and alumni experiences—all in one place.</p>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols lg:h-115 md:h-115 overflow-y-hidden gap-5 mt-15 place-self-center'>
            {blogs.slice(0, 3).map((item, index)=>{
                return (
                    <StoryCard key={index} id={item.id} title={item.title} description={item.excerpt} category={item.category} readTime={item.readTime} image={item.image} />
                )
            })}
        </div>
        <div className="text-center mt-10">
        <Link to={"/blog"}>
          <Button size="lg" variant="outline" className="rounded-full cursor-pointer px-8 hover:bg-green-50 border-2 border-[#09585e] text-[#FD661F]">
            View All
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
        </div>
        </div>
    </div>
  )
}

export default StorySection;