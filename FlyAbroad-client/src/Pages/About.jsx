import React from 'react'
import AboutHeader from '../Components/AboutUs/AboutHeader';
import AboutPlatform from '@/Components/AboutUs/AboutPlatform';
import Story from '@/Components/AboutUs/Story';
import Partners from '@/Components/AboutUs/Partners';
import MissionVision from '@/Components/AboutUs/MissionVision';
import CoreValues from '@/Components/AboutUs/CoreValues';
import Journey from '@/Components/AboutUs/Journey';
import StudentChoice from '@/Components/AboutUs/StudentChoice';
import AboutCTA from '@/Components/AboutUs/AboutCTA';

const About = () => {
  return (
    <div>
      <AboutHeader />
      <AboutPlatform />
      <MissionVision />
      <CoreValues />
      <Story />
      <Journey />
      <Partners />
      <StudentChoice />
      <AboutCTA />
    </div>
  )
}

export default About;