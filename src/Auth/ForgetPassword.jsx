import React from 'react'
import './Auth.css'

const ForgetPassword = () => {
  return (
    <div className="ForgetBody">
        <div className="ForgetHeader">
            <h1>Forgot Password</h1>
        </div>
        <div className="ForgetContainer">
            <div className="ForgetTitle">
                <h2>Forget Password</h2>
                <span>Input your emaill address a code will be sent to you!
                </span>
            </div>
            <div className="ForgetForm">
                <div className="ForgetEmail">
                    <label>Email</label>
                    <input type="email" placeholder='Email' />
                </div>
                <div className="ForgetBtn">
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForgetPassword