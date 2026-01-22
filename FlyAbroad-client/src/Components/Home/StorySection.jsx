import React from 'react'
import StoryCard from './StoryCard';

const blogs = [
    {
        title: "Russell Group Universities List (UK) 2026",
        description: "Russell Group Universities List (UK) 2026 represents 24 elite, research-intensive institutions including Oxford, Cambridge, and Imperial renowned for academic excellence and a 94% graduate employability rate. These 'UK Ivy League' members attract over 90,000 international students annually by offering world-leading facilities, 1-year Master's programs, and a clear pathway to the 2-year Post-Study Work (PSW) visa.",
        image: "/blog-post-1.jpg"
    },
    {
        title: "Russell Group Universities List (UK) 2026",
        description: "Russell Group Universities List (UK) 2026 represents 24 elite, research-intensive institutions including Oxford, Cambridge, and Imperial renowned for academic excellence and a 94% graduate employability rate. These 'UK Ivy League' members attract over 90,000 international students annually by offering world-leading facilities, 1-year Master's programs, and a clear pathway to the 2-year Post-Study Work (PSW) visa.",
        image: "/blog-post-2.jpg"
    },
    {
        title: "Russell Group Universities List (UK) 2026",
        description: "Russell Group Universities List (UK) 2026 represents 24 elite, research-intensive institutions including Oxford, Cambridge, and Imperial renowned for academic excellence and a 94% graduate employability rate. These 'UK Ivy League' members attract over 90,000 international students annually by offering world-leading facilities, 1-year Master's programs, and a clear pathway to the 2-year Post-Study Work (PSW) visa.",
        image: "/blog-post-3.jpg"
    },
]

const StorySection = () => {
  return (
    <div className='lg:px-15 md:px-10 px-7 py-5 lg:h-180 md:h-180 h-400 lg:mt-5 mt-10 text-center bg-[url(/design.svg)] bg-no-repeat bg-cover bg-center lg:mask-y-from-155 md:mask-y-from-155 mask-y-from-360 lg:mask-x-from-320'>
        <div className='lg:mt-20 md:mt-20 mt-25'>
        <div>
            <h2 className='lg:text-4xl text-2xl font-semibold'>The Hub of Insights, Stories & Success</h2>
            <p className='lg:text-lg text-[16px] text-gray-500 my-3 lg:w-210 m-auto'>Discover real journeys, expert tips, and alumni experiences—all in one place.</p>
        </div>
        <div className='flex justify-center lg:flex-row md:flex-row flex-col gap-5 mt-15'>
            {blogs.map((item, index)=>{
                return (
                    <StoryCard title={item.title} description={item.description} image={item.image} />
                )
            })}
        </div>
        </div>
    </div>
  )
}

export default StorySection;