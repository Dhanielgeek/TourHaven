import React from 'react'
import './About.css'

const OurMission = () => {
  return (
    <div className='MissionPage'>
      <div className="OurMission">
        <div className="LeftOurMission">
        <img src="./src/assets/PinkHotel.jpg" alt="" className='IMG'/> 
        </div>
        <div className="RightOurMission">
        <div className="OurMissionHeader">
         <h1>Our Mission</h1>  
            </div>
            <div className="RightMission">
            <p>To serve as the primary independent resource for tourists<br/> and assists tourists,<span style={{color: '#EC8B05'}}>whatever their budget, </span> easily discover, <br/>book  and enjoy best place to stay.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OurMission
