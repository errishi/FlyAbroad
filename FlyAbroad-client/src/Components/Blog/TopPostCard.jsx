import React from 'react'

const TopPostCard = ({image, date, title}) => {
  return (
    <div className='border border-gray-300 px-1 flex gap-3 items-center rounded-md overflow-clip'>
        <img src="/about-image-1.jpg" className='w-25 h-15 rounded-md cursor-pointer hover:scale-105 transition-all' alt="image" />
        <div className='py-2'>
            <p className='text-xs text-gray-600'>Dec 10, 2025</p>
            <h3 className='text-sm font-semibold cursor-pointer hover:text-indigo-600 hover:underline transition-all'>Why short term study abroad is gaining popularity</h3>
        </div>
    </div>
  )
}

export default TopPostCard;