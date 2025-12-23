import React from 'react'
import CategoryCard from './CategoryCard';
import PrimaryButton from '../PrimaryButton';

const Category = () => {
  return (
    <div className='lg:px-15 md:px-10 px-7 py-5 mt-15'>
      <div>
        <h1 className='text-center font-bold lg:text-5xl md:text-4xl text-2xl drop-shadow-lg text-[#0B7077]'>Courses Category</h1>
        <img src="/category-Vector.svg" className='m-auto lg:pl-70 md:pl-50 pl-30 lg:pt-2 pt-1 md:w-80 lg:w-100 w-50' alt="vector" />
        <p className='lg:w-135 lg:text-[16px] text-[14px] m-auto text-center my-6 text-gray-500'>FlyAbroad is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
      </div>
      <div className='flex lg:justify-evenly gap-8 justify-center items-center lg:flex-row md:flex-row flex-wrap flex-col my-15'>
        <CategoryCard title={"Beauty"} description={"One powerful online software suite that combines"} image={"/category-beauty.svg"} />
        <CategoryCard title={"Medical"} description={"One powerful online software suite that combines"} image={"/category-medical.svg"} />
        <CategoryCard title={"Sports"} description={"One powerful online software suite that combines"} image={"/category-sports.svg"} />
        <CategoryCard title={"Nutrition"} description={"One powerful online software suite that combines"} image={"/category-nutrition.svg"} />
      </div>
      <div className='text-center -mt-5'>
        <PrimaryButton name={"View All"} />
      </div>
    </div>
  )
}

export default Category;