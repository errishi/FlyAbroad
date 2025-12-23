import React from 'react'

const SecondaryButton = ({name, isCurrent}) => {
  return (
    <div>
    {isCurrent ? (<button className='border lg:text-[14px] md:text-[12px] text-[12px] w-fit px-4 py-2 rounded-md bg-[#09585e] text-white cursor-pointer'>{name}</button>) : (<button className='border border-gray-600 lg:text-[14px] md:text-[12px] text-[12px] w-fit px-4 py-2 rounded-md text-[#818C96] hover:text-[#FD661F] cursor-pointer'>{name}</button>)}
    </div>
  )
}

export default SecondaryButton;