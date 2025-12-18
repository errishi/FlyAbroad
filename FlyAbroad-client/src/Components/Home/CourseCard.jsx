import React from 'react';
import PrimaryButton from '../PrimaryButton';

const CourseCard = ({image, studentsEnroll, title, description, price, discount, mrp }) => {
    return (
        <div className='lg:w-90 md:w-83 h-auto w-auto rounded-2xl overflow-clip relative bg-white'>
            <img src={image} className='w-full' alt="course image" />
            <div className='flex items-center absolute lg:top-40 xs:top-34 smL:top-45 md:top-42 lg:left-8 xs:left-8 smL:left-18 md:left-13 gap-3 bg-gray-100 px-3 py-1.5 rounded-full'>
                <img src="/Group-profile.svg" className='lg:w-auto md:w-auto xs:w-19' alt="enrolled profile" />
                <p className='text-sm lg:text-[16px]'>+ {studentsEnroll} Students</p>
            </div>
            <div className='p-5 mt-5'>
                <p className='text-sm text-gray-600'>1-28 Dec 2025</p>
                <h2 className='font-bold text-xl text-[#0B7077]'>{title}</h2>
                <p className='text-sm py-2 text-gray-500'>{description}</p>
                <div className='flex lg:flex-row md:flex-row smL:flex-row xs:flex-col justify-between lg:items-center md:items-center items-start gap-3 mt-5'>
                    <h3 className='font-bold text-xl text-[#FD661F]'>$ {price}  &nbsp; &nbsp;<span className='text-gray-400 font-normal line-through text-sm'>$ {mrp}</span></h3>
                    <div>
                        <PrimaryButton name={"Enroll Now"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard;