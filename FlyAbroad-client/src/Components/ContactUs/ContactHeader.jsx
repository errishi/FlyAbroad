import React, { useState } from 'react'
import SecondaryButton from '../SecondaryButton';
import PrimaryButton from '../PrimaryButton';

const ContactHeader = () => {
    const [userRole, setUserRole] = useState(true);

  return (
    <div className='lg:px-15 md:px-10 px-7 py-10 overflow-clip relative bg-linear-to-t from-gray-100 lg:via-transparent md:via-transparent to-transparent'>
        <img src="/contact-image.svg" className='lg:w-200 md:w-150 w-120 absolute lg:top-35 md:top-35 top-40 lg:-left-80 md:-left-60 -left-50 -z-3 ' alt="image" />
        {userRole ? <img src="/student-icon.svg" className='w-15 m-auto my-10' alt="image" /> :
        <img src="/building.svg" className='w-15 m-auto my-10' alt="image" />}
        <h1 className='lg:text-7xl md:text-5xl text-2xl font-bold'>Contact for {userRole ? "students" : "institutions"}</h1>
        {userRole ? <p className='lg:my-10 my-5 lg:text-xl text-[15px]'>How can we help you?</p> :
        <p className='lg:my-10 my-5 lg:text-xl text-[15px]'>Trusted by institutions worldwide. Discover how we can help your institution's recruitment goals!</p>
        }
        <div className='flex justify-center items-center lg:flex-row md:flex-row flex-wrap lg:gap-8 gap-5'>
            <div onClick={()=>setUserRole(false)}>
                {userRole ? 
                <SecondaryButton name={"I work at an institution"} /> : 
                <PrimaryButton name={"I work at an institution"} />}
            </div>
            <div onClick={()=>setUserRole(true)}>
                {userRole ? 
                <PrimaryButton name={"I'm student"} /> :
                <SecondaryButton name={"I'm student"} />}
            </div >
        </div>
    </div>
  )
}

export default ContactHeader;