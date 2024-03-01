import React from 'react'
import './Style.css';
import HeaderLogo from '../assets/TourHavenLo.png';

const Footer = () => {
  return (
    <div className="FooterBody">
    <div className="FooterContainer">
    <div className="FooterDetail">
      <div className="FooterDetailHeader">
        <div className="FooterDetailImgHold">
          <img src={HeaderLogo} alt="" />
        </div>
        <h3>TourHaven</h3>
      </div>
      {/* <div className="FooterSocial"></div> */}
    </div>
      <div className="FooterLinks">
        <div className="FooterLinksHeader">
          <h3>Links</h3>
          <h3>Services</h3>
        </div>
        <div className="FooterHold">
        <div className="FooterwebHold">
          <span>Home</span>
          <span>About</span>
          <span>Get in Touch</span>
          <span>FAQS</span>
        </div>
        <div className="FooterserHold">
          <span>Lagos Travel</span>
          <span>Lagos Hotel</span>
          <span>Lodging</span>
        </div>
        </div>
      </div>
    </div>
      <div className="FooterLastLine">
      <p>Copyright ©2024 All rights reserved | This Page is made with</p>
      {/* <span>💖</span> */}
      </div>
    </div>
  )
}

export default Footer