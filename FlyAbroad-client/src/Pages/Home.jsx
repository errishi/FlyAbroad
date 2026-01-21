import React from 'react'
import Header from '../Components/Home/Header';
import PopularCourse from '../Components/Home/PopularCourse';
import Category from '../Components/Home/Category';
import Benefit from '../Components/Home/Benefit';
import { FacilitiesSection } from '../Components/Home/FacilitiesSection';
import GiftCard from '../Components/Home/GiftCard';
import Exclusive from '../Components/Home/Exclusive';
import UniversityData from '@/Components/Home/UniversityData';
import StepsToApply from '@/Components/Home/StepsToApply';

const Home = ({setCurrentAuth}) => {
  return (
    <div>
      <Header />
      <PopularCourse />
      <Category />
      <UniversityData />
      <Benefit />
      <StepsToApply setCurrentAuth={setCurrentAuth} />
      <FacilitiesSection />
      <GiftCard />
      <Exclusive />
    </div>
  )
}

export default Home;