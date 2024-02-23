import React,{useState} from 'react'
import './Auth.css'
import Logo from '../assets/TourHavenLo.png'
import {Link} from 'react-router-dom'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import SideImg from '../assets/signnnn4.jpeg'
import SideImg2 from '../assets/signnnn3.jpeg'


const Signup = () => {

  const [Showpassword, setShowpassword] = useState(false)
  const [ShowConfirmPassword, setShowConfirmPassword] = useState(false)
  const [ImageChange, setImageChange] = useState([
    SideImg,
    SideImg2
  ])
  const [Num, setNum] = useState(0)
  
  const HandleNext = ()=>{
    console.log("show");
    setNum(Num + 1)
  }

  const handleShowPassword = ()=>{
    console.log("show");
    setShowpassword(!Showpassword)
  }
  const handleShowConfirmPassword = ()=>{
    console.log("show");
    setShowConfirmPassword(!ShowConfirmPassword)
  }


  return (
<div className="SignupBody">
  <div className="SignupContainer">
  <div className="SignSideImg">
    <img src={ImageChange[Num % ImageChange.length]} alt="" />
    <div className="HoldSpan">
          <span onClick={HandleNext}></span>
          <span onClick={HandleNext}></span>
          <span onClick={HandleNext}></span>
        </div>
  </div>
  <div className="SignHoldAll">
     <div className="SignupHeader">
      <div className="SignupImg">
        <img src={Logo} alt="" />
      </div>
      <div className="SignupTitle">
        <h4>Sign Up</h4>
        <span>Let's get you set up so you can access your account</span>
      </div>
    </div>
    <div className="SignupForm">
      <div className="SignupFirstandLastName">
        <div className="SignupFirst">
          <label>First Name</label>
          <input type="text"/>
        </div>
        <div className="SignupLast">
          <label>Last Name</label>
          <input type="text" />
        </div>
      </div>
      <div className="SignupEmail">
        <label>Email</label>
        <input type="email" />
      </div>
      <div className="SignupPhoneNumber">
    <label>Phone Number</label>
      <input type="text" />
      </div>
      <div className="SignupPassword">
        <label>Password</label>
        <div className="PasswordInput">
        <input type={Showpassword ? "text" : "password"} />
        {
          Showpassword?
          <AiOutlineEye onClick={handleShowPassword}/>
          :
          <AiOutlineEyeInvisible onClick={handleShowPassword}/>
        }
        </div>
      </div>
      <div className="SignupConfirmPassword">
        <label>ConfirmPassword</label>
        <div className="SignupConfirmeyes">
        <input type={ShowConfirmPassword ? "text": "password"} />
          {
            ShowConfirmPassword ?
            <AiOutlineEye onClick={handleShowConfirmPassword}/>
            :
            <AiOutlineEyeInvisible onClick={handleShowConfirmPassword}/>
          }
        </div>
      </div>
      <div className="SignupAgreeTerms">
        <input type="checkbox"/>
        &nbsp;
        <label>I agree to terms of use</label>
      </div>
      <div className="SignupBtn">
        <button>
        <Link to='/login'style={{textDecoration:"none",color:"white",fontSize:"1.2rem"}}>Sign Up</Link>
        </button>
      </div>
      <div className="SignupAlready">
     <span>Already have an account?&nbsp;</span> <Link to="/login" style={{textDecoration:"none",color:"#EC8B05"}}>Login</Link>
      </div>
    </div>
  </div>
   
  </div>
</div>
  )
}

export default Signup