import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import './Contact.css'



const Talk = () => {
  return (
    <div className='TalkPage'>
            <div className="TalkLeft"> 
           <div className="Suggestion">
           <h3>Let's talk about us</h3>
            <p>Questions, comments, or suggestions? Simply <br/>fill in the form and we’ll be in touch shortly.</p>
           </div>
            <div className='IconHold'>
                <div className="IconHolder">
                  <FaLocationDot style={{color:'#05446E'}}/>
                  <h5>24 Road, Carat 24, Festac, Lagos.</h5>
                </div>
                <div className="PhoneHolder">
                <FiPhoneCall style={{color:'#05446E'}}/>
                  <h5>+234 9074639869</h5>
                </div>
                <div className="MailHolder">
                  <CiMail style={{color:'#05446E'}}/>
                  <h5>tourhaven@gmail.com</h5>
                </div> 
            </div>
            </div>
            <div className="TalkRight">
              <div className="FormHo">
              <div className="NameHolder">
                <input type="text"  placeholder='First Name'/>
                <input type="text"  placeholder='Last Name'/>
              </div>
              <div className="EmailHolder">
                <input type="email" placeholder='Enter your Email' />
              </div>
              <div className="PhoneNumberHolder">
                <input type="text" placeholder='Enter your Phone Number' />
              </div>
              <div className="TextareaHolder">
                <textarea type="text" placeholder='Your Message' />
              </div>
             <div className="ContactBtn">
             <button className='Btn'>Send Message</button>
             </div>
              </div>
            </div>
    </div>
  )
}

export default Talk
