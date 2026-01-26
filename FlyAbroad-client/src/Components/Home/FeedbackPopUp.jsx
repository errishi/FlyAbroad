import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const FeedbackPopUp = ({title, description, userName, setReadFeedback}) => {
  return (
    <div className='w-full h-full z-10 fixed bg-[#00000094] grid'>
        <div className='place-self-center lg:w-170 md:w-160 lg:mx-0 md:mx-0 mx-5'>
            <div className='bg-white px-7 py-5 my-10 flex justify-around flex-col rounded-xl border shadow-xl relative'>
                <div onClick={() => setReadFeedback(false)} className='border-2 border-black w-fit h-8.5 flex items-center rounded-full p-1 cursor-pointer absolute lg:top-5 md:top-5 top-5 lg:left-5 md:left-5 left-5 hover:opacity-65'>
                        <CloseIcon />
                </div>
            <img src="/comma.svg" className='absolute right-5 top-4' alt="image" />
            <div className='lg:mt-15 md:mt-15 mt-12'>
                <h3 className='font-semibold lg:text-lg text-[17px]'>{title}</h3>
                <div>
                    <p className='mt-3 font-medium lg:text-[16px] md:text-[16px] text-[15px]'>"{description}"</p>
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
        </div>
    </div>
  )
}

export default FeedbackPopUp;