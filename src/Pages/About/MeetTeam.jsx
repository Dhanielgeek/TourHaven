import React from 'react'
import ImageHolder from './ImageHolder'
import './About.css'


const MeetTeam = () => {
  return (
    <div className='MeetUsPage'>
      <div className="MeetTeamHeader">
          <h1>Meet The Team</h1>
          <p>We are a thoughtful team who's priority is to make our customers enjoy a <span style={{color: '#EC8B05'}}>stress-free hotel </span><br/><span style={{color:"#EC8B05"}}>booking experience.</span></p>
      </div>
      <div className='ImageHolderPage'>
        <div className="ImageHolderWrap">
      <ImageHolder image="https://res.cloudinary.com/dfqlpxmqi/image/upload/v1709698715/daniel_tmdrck.jpg"
      Name="Ben Daniel"
      stack="Frontend Developer"
      />
      <ImageHolder image="https://res.cloudinary.com/dfqlpxmqi/image/upload/v1709698782/maro_wmidi0.jpg" 
      Name="Oghenemaro Akeh"
      stack='Frontend Developer'
      />
      <ImageHolder image="https://res.cloudinary.com/dfqlpxmqi/image/upload/v1709698800/christiana_gmg7hh.jpg"
      Name="Christana Omole"
      stack="Frontend Developer"
      />
      <ImageHolder image='https://res.cloudinary.com/dfqlpxmqi/image/upload/v1709698822/me_zzmslm.jpg'
      Name="Anthony Odoh"
      stack="Backend Developer"
      />
      <ImageHolder image='https://res.cloudinary.com/dfqlpxmqi/image/upload/v1709698760/jerry_wizbxs.jpg'
      Name="Jeremiah Bowoto"
      stack="Backend Developer"
      />
      </div>
      </div>
    </div>
  )
}

export default MeetTeam
