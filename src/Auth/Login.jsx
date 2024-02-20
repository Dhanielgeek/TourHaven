import React,{useEffect, useState} from 'react'
import './Auth.css'
import LoginLogo from '../assets/TourHavenLo.png'
import { Link } from 'react-router-dom'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import LoginRoom1 from '../assets/LoginRomm1.jpeg'
import LoginRoom2 from '../assets/loginromm2.jpeg'
import {motion} from 'framer-motion'

const Login = () => {
  const [Showpassword, setShowpassword] = useState(false)
 
  const ImageHold = [LoginRoom1,LoginRoom2]
  const [NumIndex, setNumIndex] = useState(0)

  const HandleNext = ()=>{
    setNumIndex(NumIndex + 1)
  }


  const handleShowPassword = ()=>{
    console.log("show");
    setShowpassword(!Showpassword)
  }



  return (
    <div className="LoginBody">
      <div className="LoginContainer">
        <div className="LoginLeft">
          <img src={ImageHold[NumIndex % ImageHold.length]} alt=""/>
            <div className="LoginHoldSpan">
          <span onClick={HandleNext}></span>
          <span onClick={HandleNext}></span>
          <span onClick={HandleNext}></span>
        </div>
        </div>
        <div className="LoginRight">
          <div className="LoginHeader">
            <div className="LoginImg">
              <img src={LoginLogo} alt="" />
            </div>
            <div className="LoginTitle">
              <h2>Login</h2>
              <span>Login to access your account</span>
            </div>
          </div>
          <div className="LoginForm">
            <div className="LoginEmail">
              <label>Email</label>
              <input type="email" />
            </div>
            <div className="LoginPassword">
              <label>Password</label>
              <div className="ShowPasswrd">
              <input type={Showpassword ? "text" : "password"} />
              {
            Showpassword?
            <AiOutlineEye onClick={handleShowPassword}/>
            :
            <AiOutlineEyeInvisible onClick={handleShowPassword}/>
          }
              </div>
            </div>
            <div className="LoginForgetPassword">
              <div className="LoginRemeber">
              <input type="checkbox" />
              &nbsp;
                <span>Remember Me</span>
              </div>
                <Link className='ForgetPass' to='/forgetpass' >Forgot Password?</Link>
            </div>
            <div className="LoginBtn">
              <button>Login</button>
            </div>
            <div className="LoginAlready">
              <span>Don't have an account?</span> &nbsp; <Link to="/signup" style={{textDecoration:"none",color:"#EC8B05",fontSize:"1.2rem"}}>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
       
    </div>
  )
}

export default Login