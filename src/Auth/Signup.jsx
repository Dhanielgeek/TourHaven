import React,{useState} from 'react'
import './Auth.css'
import Logo from '../assets/TourHavenLo.png'
import {Link} from 'react-router-dom'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import SideImg from '../assets/signnnn4.jpeg'
import SideImg2 from '../assets/signnnn3.jpeg'
import axios from  'axios'
import Loader from '../Components/Loader/Loading'


const Signup = () => {

  const [Showpassword, setShowpassword] = useState(false)
  const [ShowConfirmPassword, setShowConfirmPassword] = useState(false)
  const [ImageChange, setImageChange] = useState([
    SideImg,
    SideImg2
  ])
  const [Num, setNum] = useState(0)
  const [IsLoading, setIsLoading] = useState(false)
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')

  // Getting user value

  const HandleFirstName = (e)=>{
    setfirstName(e.target.value)
  }
  const HandleLastName = (e)=>{
    setlastName(e.target.value)
  }
  const HandleEmail = (e)=>{
    setemail(e.target.value)
  }
  const HandlePassword = (e)=>{
    setpassword(e.target.value)
  }
  const HandleConfirmPassword = (e)=>{
    setconfirmPassword(e.target.value)
  }
  const HandlePhoneNumber = (e)=>{
    setphoneNumber(e.target.value)
  }






  //Handling Signup Function
  const Url = 'https://tour-haven-application.vercel.app/signup'
  const dataNeeded = {firstName,lastName,email,password,confirmPassword,phoneNumber}

  const HandleSignUp = async (e)=>{
    e.preventDefault()
    try{
      setIsLoading(true)
      const res = await axios.post(Url,dataNeeded)
      console.log(res.data);
    }
    catch (error){
      console.log(error.message);
    }
    finally{
      setIsLoading(false)
    }
  }


  
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
  {
    IsLoading === true ? <Loader/> : (
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
              <input type="text" onChange={HandleFirstName}/>
            </div>
            <div className="SignupLast">
              <label>Last Name</label>
              <input type="text" onChange={HandleLastName} />
            </div>
          </div>
          <div className="SignupEmail">
            <label>Email</label>
            <input type="email" onChange={HandleEmail} />
          </div>
          <div className="SignupPhoneNumber">
        <label>Phone Number</label>
          <input type="text" onChange={HandlePhoneNumber} />
          </div>
          <div className="SignupPassword">
            <label>Password</label>
            <div className="PasswordInput">
            <input type={Showpassword ? "text" : "password"} onChange={HandlePassword} />
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
            <input type={ShowConfirmPassword ? "text": "password"} onChange={HandleConfirmPassword} />
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
            <button onClick={HandleSignUp}>
              Sign Up
            </button>
          </div>
          <div className="SignupAlready">
         <span>Already have an account?&nbsp;</span> <Link to="/login" style={{textDecoration:"none",color:"#EC8B05"}}>Login</Link>
          </div>
        </div>
      </div>
       
      </div>
    )
  }
</div>
  )
}

export default Signup