import React from 'react'
import Header from '../Components/Home/Header';
import Exclusive from '../Components/Home/Exclusive';
import UniversityData from '@/Components/Home/UniversityData';
import StepsToApply from '@/Components/Home/StepsToApply';
import Exams from '@/Components/Home/Exams';
import Destination from '@/Components/Home/Destination';
import StorySection from '@/Components/Home/StorySection';
import ChooseUneFly from '@/Components/Home/ChooseUneFly';
import Logos from '@/Components/Home/Logos';

const Home = ({setCurrentAuth, setReadFeedback, sendData}) => {
  return (
    <div>
      <Header />
      <Exams />
      <Destination />
      {/* <Logos /> */}
      <ChooseUneFly />
      <UniversityData />
      <StepsToApply setCurrentAuth={setCurrentAuth} />
      <StorySection />
      <Exclusive sendData={sendData} setReadFeedback={setReadFeedback} />
    </div>
  )
}

export default Home;