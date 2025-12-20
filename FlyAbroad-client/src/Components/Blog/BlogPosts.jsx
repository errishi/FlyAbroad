import React from 'react'
import BlogCard from './BlogCard';

const BlogPosts = () => {
  return (
    <div className='lg:px-15 md:px-10 px-7 py-5 my-7 flex gap-6 justify-center lg:flex-row md:flex-row flex-col flex-wrap'>
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
  )
}

export default BlogPosts;