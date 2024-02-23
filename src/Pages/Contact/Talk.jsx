import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";



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
                  <CiLocationOn className='Location' style={{fontSize:"0.3rem",width:'10%',height:'100%',color:"#05446E"}}/>
                  <h5>24 Road, Carat 24, Festac, Lagos.</h5>
                </div>
                <div className="PhoneHolder">
                <FiPhoneCall className='Phone'/>
                  <h5>+234 9074639869</h5>
                </div>
                <div className="MailHolder">
                  <CiMail className='Mail'/>
                  <h5>tourhaven@gmail.com</h5>
                </div> 
            </div>
            </div>
            <div className="TalkRight">
              <div className="InputHolder">
              <div className="NameHolder">
                <input type="text"  placeholder='Helen|'/>
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
             <div className="ButtonHolder">
             <button className='Btn'>Send Message</button>
             </div>
              </div>
            </div>
    </div>
  )
}

export default Talk
