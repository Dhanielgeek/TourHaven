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
      <ImageHolder image="./src/assets/Daniel.jpg"
      Name="Daniel Ben"
      stack="Frontend Developer"
      />
      <ImageHolder image="./src/assets/Maro.jpg" 
      Name="Oghenemaro Akeh"
      stack='Frontend Developer'
      />
      <ImageHolder image="./src/assets/TEE.jpg"
      Name="Christana Omole"
      stack="Frontend Developer"
      />
      <ImageHolder image='./src/assets/odoh.jpg'
      Name="Anthony Odoh"
      stack="Backend Developer"
      />
      <ImageHolder
      Name="Jeremiah Bowoto"
      stack="Backend Developer"
      />
      </div>
      </div>
    </div>
  )
}

export default MeetTeam
