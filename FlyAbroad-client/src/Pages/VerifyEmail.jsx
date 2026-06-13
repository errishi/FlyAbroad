import React from 'react'

const VerifyEmail = () => {
  return (
    <div className='lg:px-15 md:px-10 px-7 py-5 text-center flex flex-col justify-center items-center'>
      <div className='lg:relative md:relative w-fit'>
        <img src="/VerifyEmail-image.svg" className='lg:w-120 md:w-80 w-60 h-auto m-auto mt-10' alt="404" />
        <div>
            <h1 className='text-2xl font-bold mt-5 mb-3'>We have sent an email to Verify Your Account</h1>
        </div>
        <p className='lg:absolute md:absolute lg:bottom-30 lg:-left-5 md:bottom-17 md:-left-25 w-70 font-medium'>We have sent you an email to verify your account. Please check your inbox and click on the verification link.</p>
      </div>
    </div>
  )
}

export default VerifyEmail;
