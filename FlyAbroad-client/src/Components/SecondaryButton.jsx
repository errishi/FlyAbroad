import React from 'react'

const SecondaryButton = ({name, isCurrent}) => {
  return (
    <div>
    {isCurrent ? (<button className='border lg:text-[14px] md:text-[12px] text-[12px] w-fit px-4 py-1.5 rounded-md bg-[#09585e] text-white cursor-pointer'>{name}</button>) : (<button className='border lg:text-[14px] md:text-[12px] text-[12px] w-fit px-4 py-1.5 rounded-md text-[#818C96] hover:text-gray-600 cursor-pointer'>{name}</button>)}
    </div>
  )
}

export default SecondaryButton;