import React from 'react'
import ImageHolder from './ImageHolder'
const MeetTeam = () => {
  return (
    <div className='MeetUsPage'>
      <h1>Meet The Team</h1>
      <div className="MeetUs">
        <p>We are a thoughtful team who's priority is to make our customers enjoy a <span style={{color: '#EC8B05'}}>stress-free hotel </span><br/><span style={{color:"#EC8B05"}}>booking experience.</span></p>
      </div>
      <div className='ImageHolderPage'>
        <div className="ImageHolderWrap">
      <ImageHolder image="./src/assets/Daniel.jpg"
      Name="Daniel Ben"
      stack="A Frontend Developer"
      />
      <ImageHolder image="./src/assets/Maro.jpg" 
      Name="Oghenemaro Akeh"
      stack='A Frontend Developer'
      />
      <ImageHolder image="./src/assets/TEE.jpg"
      Name="Christana Omole"
      stack="A frontend Developer"
      />
      <ImageHolder 
      Name="Anthony Odoh"
      stack="A Backend Developer"
      />
      <ImageHolder
      Name="Jeremiah Bowoto"
      stack="A Backend Developer"
      />
      </div>
      </div>
    </div>
  )
}

export default MeetTeam
