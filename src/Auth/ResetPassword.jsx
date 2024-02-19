import React,{useState} from 'react'
import './Auth.css'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

const ResetPassword = () => {
  const [Showpassword, setShowpassword] = useState(false)
  const [ShowConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleShowNewPassword = ()=>{
    console.log("show");
    setShowpassword(!Showpassword)
  }

  const handleShowConfirmPassword = ()=>{
    console.log("show");
    setShowConfirmPassword(!ShowConfirmPassword)
  }

  return (
    <div className="ResetpasswordBody">
      <div className="ResetHeader">
        <h1>Reset Password</h1>
      </div>
      <div className="ResetContainer">
        <div className="ResetTitle">
          <h2>Reset Password</h2>
          <span>Create New Password Here </span>
        </div>
        <div className="ResetForm">
          <div className="ResetNewPass">
            <label>New Password</label>
              <div className="ShowNewPasswrd">
              <input type={Showpassword ? "text" : "password"} />  
              {
            Showpassword?
            <AiOutlineEye onClick={handleShowNewPassword} style={{color:"#05446E"}}/>
            :
            <AiOutlineEyeInvisible onClick={handleShowNewPassword} style={{color:"#05446E"}}/>
          }
              </div>
          </div>
          <div className="ResetConfirmPass">
            <label>Confirm Password</label>
              <div className="ConfirmShPas">
              <input type={ShowConfirmPassword ? "text" : "password"} />
              {
            ShowConfirmPassword?
            <AiOutlineEye onClick={handleShowConfirmPassword} style={{color: '#05446E'}}/>
            :
            <AiOutlineEyeInvisible onClick={handleShowConfirmPassword} style={{color:"#05446E"}}/>
          }
              </div>
          </div>
          <div className="ResetBtnPassword">
            <button>Reset Password</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword