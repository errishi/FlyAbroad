import React from 'react'
import Header from '../Components/Home/Header';
import Exclusive from '../Components/Home/Exclusive';
import UniversityData from '@/Components/Home/UniversityData';
import Essentials from './Essentials';
import StepsToApply from '@/Components/Home/StepsToApply';
import Exams from '@/Components/Home/Exams';
import Destination from '@/Components/Home/Destination';
import ServicesByTeam from './ServicesByTeam';
import StorySection from '@/Components/Home/StorySection';
import ChooseUneFly from '@/Components/Home/ChooseUneFly';
import Faq from '@/Components/Home/Faq';
import VideoTestimonialPage from '@/Components/Home/VideoTestimonialPage';
import CTA from '@/Components/Home/CTA';
import FlagMotion from './FlagMotion';
import OurMission from './OurMission';
const Home = ({setCurrentAuth, setReadFeedback, sendData}) => {
  return (
    <div>
      <Header />
      <OurMission />
      <Exams />
      <FlagMotion />
      <Destination />
      <ChooseUneFly />
      <UniversityData />
      <Essentials />
      <VideoTestimonialPage />
      <ServicesByTeam />
      <StepsToApply setCurrentAuth={setCurrentAuth} />
      <StorySection />
      <Exclusive sendData={sendData} setReadFeedback={setReadFeedback} />
      <Faq />
      <CTA />
    </div>
  )
}

export default Home;