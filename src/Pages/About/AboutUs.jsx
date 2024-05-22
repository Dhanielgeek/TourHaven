import React from 'react'
import './About.css'
const AboutUs = () => {
  return (
  <div className='AboutUsPage'>
    <div className="AboutUs">
        <div className="LeftAboutUs">
        <div className="AboutHeader">
      <h1>About Us</h1> 
    </div>
            <div className="LeftHold">
            <p>A vibrant online booking platform that specializes in booking hotels for tourists in Lagos.<br/>
          TourHaven offer our customers complete assistance and support while facilitating a <span style={{color: '#EC8B05',fontWeight:'700'}}>simple</span> and <span style={{color:'#EC8B05',fontWeight:'700'}}>straightforward</span>  hotel booking experience.<br/>
          <br/>
          
        In order to guarantee that our customers stay in excellent, hygienic, and secure hotels around the state. We also offer <span style={{color: '#EC8B05'}}>hotel evaluations.</span></p>
            </div>
        </div>
        <div className="RightAboutUs">
        <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        </div>
    </div>
  </div>
  )
}

export default AboutUs
