import React from 'react'

const Button = ({name}) => {
  return (
    <div className='lg:w-50 md:w-50 w-full mt-5 text-center px-10 py-1.5 transition-all rounded-md bg-[#0B7077] text-white hover:shadow-lg hover:shadow-[#0B7077]/50 cursor-pointer'>{name}</div>
  )
}

export default Button;