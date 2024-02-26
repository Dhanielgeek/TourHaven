import React from 'react'
import './Auth.css'
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Verify = () => {
  return (
    <div className="VerifyBody">
        <div className="VerifyContainer">
        <div className="VerifyIcon">
        <FaRegCircleCheck style={{fontSize:"8rem",color:"#06d6a0"}} />
        </div>
        <div className="VerifyTitle">
            <h2>Email Verified</h2>
            <span>Your email address has been successfully verified</span>
            </div> 
            <div className="VerifyBtn">
                <button>
                    <Link to='/login' style={{textDecoration:'none', color:"white"}}> Back to Login </Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Verify