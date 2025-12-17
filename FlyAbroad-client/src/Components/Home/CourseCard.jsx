import React from 'react';
import PrimaryButton from '../PrimaryButton';

const CourseCard = ({image, studentsEnroll, title, description, price, discount, mrp }) => {
    return (
        <div className='w-90 rounded-2xl overflow-clip relative bg-white'>
            <img src={image} className='w-full' alt="course image" />
            <div className='flex items-center absolute top-42 left-10 gap-3 bg-gray-100 px-3 py-1.5 rounded-full'>
                <img src="/Group-profile.svg" alt="enrolled profile" />
                <p>+ {studentsEnroll} Students</p>
            </div>
            <div className='p-5 mt-5'>
                <p className='text-sm text-gray-600'>1-28 Dec 2025</p>
                <h2 className='font-bold text-xl text-[#0B7077]'>{title}</h2>
                <p className='text-sm py-2 text-gray-500'>{description}</p>
                <div className='flex justify-between items-center mt-5'>
                    <h3 className='font-bold text-xl text-[#FD661F]'>$ {price}  &nbsp; &nbsp;<span className='text-gray-400 font-normal line-through'>$ {mrp}</span></h3>
                    <div>
                        <PrimaryButton name={"Enroll Now"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard;