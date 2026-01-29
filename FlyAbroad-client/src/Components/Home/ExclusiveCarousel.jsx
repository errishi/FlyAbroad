import { Star } from 'lucide-react';
import React from 'react'

const ExclusiveCarousel = ({ image, title, description, userName, setReadFeedback }) => {
    return (
        <div className='px-7 py-5 my-10 lg:h-95 md:h-90 h-95 flex justify-around flex-col rounded-xl border bg-[#FD661F]/3 shadow-xl relative'>
            <img src="/comma.svg" className='absolute right-5 top-4' alt="image" />
            <div className='lg:mt-10 md:mt-10 mt-12'>
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
              <Star className="size-4 fill-[#09585e]" />
              <span className="text-sm font-semibold">4.9/5 Average Rating</span>
            </div>
                <h3 className='font-semibold lg:text-lg text-[17px]'>{title}</h3>
                <div>
                    <p className='mt-3 lg:text-[16px] md:text-[16px] text-[15px] lg:h-25 md:h-25 line-clamp-4'>"{description}.. </p>
                    <span onClick={()=>setReadFeedback(true)} className='relative text-blue-500 cursor-pointer hover:underline transition-all'>read more</span>
                </div>
            </div>
            <div className='mt-5 flex items-center gap-3'>
                <img
                  alt="profile image"
                  src="/profile_image.png"
                  className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                />
                <h4 className='font-medium'>{userName}</h4>
            </div>
        </div>
    )
}

export default ExclusiveCarousel;