import React from 'react'

const LoginButton = ({name}) => {
  return (
    <div className='lg:w-50 md:w-50 w-full m-auto mt-5 text-center py-1.5 transition-all rounded-md bg-[#fd651ff0] text-white hover:shadow-lg hover:shadow-[#FD661F]/50 cursor-pointer'>{name}</div>
  )
}

export default LoginButton;