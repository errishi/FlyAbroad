import React from 'react'
import Header from '../Components/Home/Header';
import PopularCourse from '../Components/Home/PopularCourse';
import Category from '../Components/Home/Category';
import Benefit from '../Components/Home/Benefit';
import Training from '../Components/Home/Training';
import GiftCard from '../Components/Home/GiftCard';
import Exclusive from '../Components/Home/Exclusive';
import UniversityData from '@/Components/Home/UniversityData';
import StepsToApply from '@/Components/Home/StepsToApply';
import Exams from '@/Components/Home/Exams';

const Home = ({setCurrentAuth}) => {
  return (
    <div>
      <Header />
      {/* <Exams /> */}
      <PopularCourse />
      <Category />
      <UniversityData />
      <Benefit />
      <StepsToApply setCurrentAuth={setCurrentAuth} />
      <Training />
      <GiftCard />
      <Exclusive />
    </div>
  )
}

export default Home;