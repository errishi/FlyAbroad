import React from 'react'

const PrimaryButton = ({name, url}) => {
  return (
    <button className='bg-[#09585e] w-fit rounded-md text-white hover:bg-[#0B7077] transition-all cursor-pointer px-5 py-2'>{name}</button>
  )
}

export default PrimaryButton;