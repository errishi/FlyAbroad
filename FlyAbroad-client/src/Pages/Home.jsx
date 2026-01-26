import React from 'react'
import Header from '../Components/Home/Header';
import PopularCourse from '../Components/Home/PopularCourse';
import Category from '../Components/Home/Category';
import Benefit from '../Components/Home/Benefit';
import Exclusive from '../Components/Home/Exclusive';
import UniversityData from '@/Components/Home/UniversityData';
import StepsToApply from '@/Components/Home/StepsToApply';
import StorySection from '@/Components/Home/StorySection';
import Countries from '@/Components/Home/Countries';

const Home = ({setCurrentAuth, setReadFeedback, sendData}) => {
  return (
    <div>
      <Header />
      <PopularCourse />
      <Category />
      <UniversityData />
      <Countries />
      {/* <Benefit /> */}
      <StepsToApply setCurrentAuth={setCurrentAuth} />
      <StorySection />
      <Exclusive sendData={sendData} setReadFeedback={setReadFeedback} />
    </div>
  )
}

export default Home;