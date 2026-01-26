import React from 'react'
import CountryCard from './CountryCard';
import NearMeIcon from '@mui/icons-material/NearMe';

const countryData = [
    {
        name: "Australia",
        image: "/australia-image.png"
    },
    {
        name: "Canada",
        image: "/canada-image.png"
    },
    {
        name: "Germany",
        image: "/germany-image.png"
    },
    {
        name: "Russia",
        image: "/russia-image.png"
    },
    {
        name: "UK",
        image: "/uk-image.png"
    },
    {
        name: "USA",
        image: "/usa-image.png"
    },
]

const Countries = () => {
  return (
    <div className='lg:px-15 md:px-10 m-auto px-7 py-5 mt-20'>
        <h1 className='font-bold p-1 w-fit flex lg:gap-3 md:gap-3 gap-0 lg:items-center md:items-center text-center lg:text-4xl text-2xl drop-shadow-lg rounded bg-linear-to-l from-[#0B7077]/50 via-transparent to-transparent'>
            <span className='text-[#FD661F]'><NearMeIcon sx={{ fontSize: 40 }} /></span> Where FlyAbroad can take you? &nbsp;
        </h1>
        <p className='lg:text-lg text-[16px] text-gray-500 my-3 lg:ml-15 lg:text-start md:text-start text-center'>Explore the Ultimate Destinations across the Globe!</p>
        <div className='flex flex-wrap gap-5 justify-center mt-15'>
            {countryData.map((country, index)=>{
                return(
                    <CountryCard key={index} name={country.name} image={country.image} />
                )
            })}
        </div>
    </div>
  )
}

export default Countries;