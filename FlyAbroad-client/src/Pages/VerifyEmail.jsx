import React from 'react'

const VerifyEmail = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-6 py-10 text-center'>
      <div className='max-w-xl w-full bg-white shadow-lg rounded-3xl p-8'>
        <img
          src='/VerifyEmailImage.svg'
          className='w-full max-w-sm h-auto mx-auto mt-6'
          alt='Email verification illustration'
        />
        <h1 className='text-3xl font-bold mt-8 mb-4'>We have sent an email to verify your account</h1>
        <p className='text-gray-700 text-base leading-7'>
          We have sent you an email to verify your account. Please check your inbox and click on the verification link.
        </p>
      </div>
    </div>
  )
}

export default VerifyEmail;
