import SecondaryButton from '@/Components/SecondaryButton';
import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='lg:px-15 md:px-10 px-7 py-5 text-center flex flex-col justify-center items-center'>
      <div className='lg:relative md:relative w-fit'>
        <img src="/Notfound-image.svg" className='lg:w-120 md:w-80 w-60 h-auto m-auto mt-10' alt="404" />
        <p className='lg:absolute md:absolute lg:bottom-30 lg:-left-5 md:bottom-17 md:-left-25 w-70 font-medium'>We Apologies, but the page
          you're looking for is not in
          our records.</p>
      </div>
      <div className='lg:-mt-10 md:-mt-8 my-6 z-1'>
        <Link to={"/"}>
          <SecondaryButton name={"Back to home"} />
        </Link>
      </div>
    </div>
  )
}

export default NotFound;