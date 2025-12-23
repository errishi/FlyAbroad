import React from 'react'
import SocialMediaCard from './SocialMediaCard';

const socicalMediaDetail = [
    {
        name: "Facebook",
        image: "/facebook-icon.svg"
    },
    {
        name: "X",
        image: "/x-icon.svg"
    },
    {
        name: "Instagram",
        image: "/instagram-icon.svg"
    },
]

const GetInTouch = () => {
  return (
    <div className='lg:px-15 md:px-10 px-7 py-10'>
        <h1 className='text-4xl font-semibold'>Get In Touch</h1>
        <p className='lg:my-10 my-5 lg:text-xl text-[15px]'>Feel free to connect with us.</p>
        <div className='flex mt-10 lg:gap-10 md:gap-7 gap-5 justify-center lg:flex-row md:flex-row flex-col'>
        {
            socicalMediaDetail.map((item,index)=>{
                return(
                    <div key={index} className='m-auto lg:m-0 md:m-0'>
                        <SocialMediaCard title={item.name} image={item.image} />
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default GetInTouch;