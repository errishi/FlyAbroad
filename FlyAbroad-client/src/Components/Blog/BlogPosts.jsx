import React from 'react'
import BlogCard from './BlogCard';
import TopPost from './TopPost';

const BlogPosts = () => {
  return (
    <div className='lg:px-15 md:px-10 px-7 py-5 my-7 flex lg:flex-row flex-col'>
      <div className='flex lg:justify-start justify-center lg:gap-3 gap-6 lg:flex-row md:flex-row flex-col flex-wrap w-fit'>
        <BlogCard image={"/blog-post-1.jpg"} date={"Dec 2025"} title={"Top 5 Trends Shaping Modern Logistics in 2025"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestias est commodi, ipsam rerum eligendi quam culpa nesciunt. Ratione, soluta?"} />
        <BlogCard image={"/blog-post-2.jpg"} date={"Dec 2025"} title={"Greener Supply Chains Start with Smart Moves"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestias est commodi, ipsam rerum eligendi quam culpa nesciunt. Ratione, soluta?"} />
        <BlogCard image={"/blog-post-3.jpg"} date={"Dec 2025"} title={"AUB Students Shine at Abu Dhabi’s Arabic Creative Industries Congress"} description={"Six graduate students from the American University of Beirut (AUB), all affiliated with AUB's Sheikh Zayed Bin Sultan Al-Nahyan Chair for Arabic and Islamic Studies..."} />
        <BlogCard image={"/blog-post-1.jpg"} date={"Dec 2025"} title={"Top 5 Trends Shaping Modern Logistics in 2025"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestias est commodi, ipsam rerum eligendi quam culpa nesciunt. Ratione, soluta?"} />
        <BlogCard image={"/blog-post-2.jpg"} date={"Dec 2025"} title={"Greener Supply Chains Start with Smart Moves"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestias est commodi, ipsam rerum eligendi quam culpa nesciunt. Ratione, soluta?"} />
        <BlogCard image={"/blog-post-3.jpg"} date={"Dec 2025"} title={"AUB Students Shine at Abu Dhabi’s Arabic Creative Industries Congress"} description={"Six graduate students from the American University of Beirut (AUB), all affiliated with AUB's Sheikh Zayed Bin Sultan Al-Nahyan Chair for Arabic and Islamic Studies..."} />
        <BlogCard image={"/blog-post-1.jpg"} date={"Dec 2025"} title={"Top 5 Trends Shaping Modern Logistics in 2025"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestias est commodi, ipsam rerum eligendi quam culpa nesciunt. Ratione, soluta?"} />
        <BlogCard image={"/blog-post-2.jpg"} date={"Dec 2025"} title={"Greener Supply Chains Start with Smart Moves"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestias est commodi, ipsam rerum eligendi quam culpa nesciunt. Ratione, soluta?"} />
        <BlogCard image={"/blog-post-3.jpg"} date={"Dec 2025"} title={"AUB Students Shine at Abu Dhabi’s Arabic Creative Industries Congress"} description={"Six graduate students from the American University of Beirut (AUB), all affiliated with AUB's Sheikh Zayed Bin Sultan Al-Nahyan Chair for Arabic and Islamic Studies..."} />
      </div>
      <div className='lg:mt-0 mt-10 lg:w-95'>
        <h2 className='uppercase font-bold lg:text-3xl md:text-3xl text-2xl text-[#0B7077] drop-shadow-md'>Top Resources</h2>
        <div className='mt-5'>
          <TopPost />
        </div>
      </div>
    </div>
  )
}

export default BlogPosts;