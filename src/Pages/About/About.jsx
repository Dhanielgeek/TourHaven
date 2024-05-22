import React from 'react'
import AboutHero from './AboutHero'
import './About.css'
import AboutUs from './AboutUs'
import OurMission from './OurMission'
import MeetTeam from './MeetTeam'


const About = () => {
  return (
    <div className='AboutBody'>
      <AboutHero/>
      <AboutUs/>
      <OurMission/>
      <MeetTeam/>
     
    </div>
  )
}

export default About
