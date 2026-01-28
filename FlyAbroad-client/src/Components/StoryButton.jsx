import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const StoryButton = () => {
  return (
    <div className='bg-[#FF7F00] hover:bg-[#e4520e] flex justify-center text-center items-center cursor-pointer text-white w-fit px-3 py-1.5 rounded-full'>Read Blog <ArrowForwardIosIcon fontSize='small'/> </div>
  )
}

export default StoryButton;