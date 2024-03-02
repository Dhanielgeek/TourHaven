import React from 'react'
import './Style.css';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";




const Footer = () => {
  return (
    <div className="FooterBody">
    <div className="FooterContainer">
      <div className="FooterImage">
      <div className="FooterHold">
        <div className="FooterHolder">
        <img src="./src/assets/TourHavenLo.png" alt="" className='FooterIcon'/>
        <h3>TourHaven</h3>
        </div>
      </div>
      </div>
      <div className="Link">
        <div className="Ink">Links</div>
        <div className="Home">Home</div>
        <div className="Home">About</div>
        <div className="Home">Get in touch</div>
        <div className="Home">FAQS</div>
      </div>
      <div className="Services">
        <div className="Service">Services</div>
        <div className="Travel">Lagos Travel Guide</div>
        <div className="Travel">Lagos Hotel</div>
        <div className="Travel">Lodging</div>
        <div className="Travel">Easy</div>
      </div>
      <div className="Language">
        <h3>Sponsors</h3>
          <h5>Kora Pay</h5>
          <h5>Fincra</h5>
          <h5>Quadix</h5>
      </div>
      <div className="Contact">
        <h3>Contact us</h3>
        <div className="ContactIcon">
          <CiFacebook className='Fb'/>
          <FaInstagram className='Instagram'/>
          <PiLinkedinLogoBold className='Linkedin'/>
        </div>
      </div>
    {/* <div className="FooterDetail">
      <div className="FooterDetailHeader">
        <div className="FooterDetailImgHold">
          <img src={HeaderLogo} alt="" />
        </div>
        <h3>TourHaven</h3>
      </div>
      <div className="FooterSocial"></div>
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
      <p>Copyright ©2024 All rights reserved | This Page is made with</p> */}
      </div>
      <div className="FooterLastLine">
      <p>Copyright ©2024 All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer