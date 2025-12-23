import React from 'react'
import PrimaryButton from '../PrimaryButton';

const SocialMediaCard = ({image, title}) => {
  return (
    <div className='border w-fit px-6 py-10 rounded-xl bg-gray-200/50'>
        <img src={image} className='text-[#FD661F] lg:w-11 md:w-11 w-9 m-auto' alt="image" />
        <div>
            <h3 className='my-3 font-medium'>{title}</h3>
            <PrimaryButton name={`Write us on ${title}`} />
        </div>
    </div>
  )
}

export default SocialMediaCard;