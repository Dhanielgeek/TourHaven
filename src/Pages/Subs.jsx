import React from 'react'
import './Page.css';

const Subs = () => {
  return (
    <div className="SubBody">
        <div className="SubContainer">
            <div className="SubLeft">
                <h3>SUBSCRIBE TO GET UPDATED</h3>
                <span>Get inspired! Receive hotel booking discounts.</span>
            </div>
            <div className="SubRight">
               <div className="SubRightInput">
               <input type="email" placeholder='Enter Your Email' />
               </div>
               <div className="SubRightBtn">
                <button>Subscribe Now</button>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Subs