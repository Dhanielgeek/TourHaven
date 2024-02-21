import React from 'react'

const AboutUs = () => {
  return (
  <div className='AboutUsPage'>
    <h1>About Us</h1>
    <div className="AboutUs">
        <div className="LeftAboutUs">
            <div className="LeftHold">
            <p>A vibrant online booking platform that specializes in booking hotels for tourists in Lagos.<br/>
          TourHaven offer our customers complete assistance and support while facilitating a 
          <span style={{color: '#EC8B05'}}>simple</span> and <span style={{color:'#EC8B05'}}>straightforward</span>  hotel booking experience.<br/>
          <br/>
          
        In order to guarantee that our customers stay in excellent, hygienic, and secure hotels around the state. We also offer <span style={{color: '#EC8B05'}}>hotel evaluations.</span></p>
            </div>
        </div>
        <div className="RightAboutUs">
        <img src="./src/assets/About.jpg" alt="" className='IMG'/>
        </div>
    </div>
  </div>
  )
}

export default AboutUs
