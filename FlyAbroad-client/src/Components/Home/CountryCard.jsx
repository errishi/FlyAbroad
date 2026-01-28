import { ArrowForward } from '@mui/icons-material';
import React from 'react'

const CountryCard = ({image, name}) => {
  return (
    <div className='relative w-fit h-fit overflow-clip hover:cursor-pointer rounded-lg border-b p-1 bg-linear-to-br from-[#FD661F] to-transparent'>
        <img src={image} className='w-90 hover:scale-99 hover:rounded-2xl overflow-clip rounded-lg hover:shadow-xl transition-all' alt="image" />
        <div className='flex justify-between items-center text-white shadow w-full h-25 px-8 pt-7 rounded-b-lg bg-linear-to-t from-black to-transparent absolute bottom-0'>
            <h3 className='font-semibold text-3xl'>{name}</h3>
            <ArrowForward color='white' />
        </div>
    </div>
  )
}

export default CountryCard;