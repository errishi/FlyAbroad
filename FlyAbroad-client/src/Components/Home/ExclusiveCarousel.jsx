import React from 'react'

const ExclusiveCarousel = ({ image, title, description, userName, setReadFeedback }) => {
    return (
        <div className='px-7 py-5 my-10 lg:h-80 md:h-80 h-85 flex justify-around flex-col rounded-xl border bg-[#FD661F]/3 shadow-xl relative'>
            <img src="/comma.svg" className='absolute right-5 top-4' alt="image" />
            <div className='lg:mt-10 md:mt-10 mt-12'>
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