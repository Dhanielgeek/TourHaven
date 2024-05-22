import React from 'react';
import './Style.css';
import HeaderLogo from '../assets/TourHavenLo.png';
import { Link } from 'react-router-dom';

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
              <Link to="/" ><span>Home</span></Link>
              <Link to="about" ><span>About</span></Link>
              <Link to="contact" ><span>Get in Touch</span></Link>
              <Link to="contact" ><span>FAQS</span></Link>
            </div>
            <div className="FooterserHold">
              <Link to="lagos-travel" smooth={true} duration={1000}><span>Lagos Travel</span></Link>
              <Link to="lagos-hotel" smooth={true} duration={1000}><span>Lagos Hotel</span></Link>
              <Link to="lodging" smooth={true} duration={1000}><span>Lodging</span></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="FooterLastLine">
        <p>Copyright ©2024 All rights reserved | This Page is made with</p>
      </div>
    </div>
  );
};

export default Footer;
