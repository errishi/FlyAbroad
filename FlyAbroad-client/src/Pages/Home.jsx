import React from 'react'
import Header from '../Components/Home/Header';
import Exclusive from '../Components/Home/Exclusive';
import UniversityData from '@/Components/Home/UniversityData';
import StepsToApply from '@/Components/Home/StepsToApply';
import Exams from '@/Components/Home/Exams';
import Destination from '@/Components/Home/Destination';
import StorySection from '@/Components/Home/StorySection';
import ChooseUneFly from '@/Components/Home/ChooseUneFly';
import CTA from '@/Components/Home/CTA';
import VideoTestimonialPage from '@/Components/Home/VideoTestimonialPage';

const Home = ({setCurrentAuth, setReadFeedback, sendData}) => {
  return (
    <div>
      <Header />
      <Destination />
      <ChooseUneFly />
      {/* <Exams /> */}
      <UniversityData />
      <VideoTestimonialPage />
      <StepsToApply setCurrentAuth={setCurrentAuth} />
      <StorySection />
      <Exclusive sendData={sendData} setReadFeedback={setReadFeedback} />
      <CTA />
    </div>
  )
}

export default Home;