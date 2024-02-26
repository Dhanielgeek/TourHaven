import React,{useEffect, useState} from 'react'
import './Auth.css'
import LoginLogo from '../assets/TourHavenLo.png'
import { Link } from 'react-router-dom'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import LoginRoom1 from '../assets/LoginRomm1.jpeg'
import LoginRoom2 from '../assets/loginromm2.jpeg'
import axios from 'axios';
import Loader from '../Components/Loader/Loading'
import Swal from 'sweetalert2'
import {  useDispatch } from 'react-redux';
import { userData } from '../Functions/Features';

const Login = () => {

  const [Showpassword, setShowpassword] = useState(false)
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [Isloading, setIsloading] = useState(false)
  const [ErrorMessage, setErrorMessage] = useState({
    email: "",
    password: ""
  })

  // Catching user's value 

  const HandleEmail = (e)=>{
    setemail(e.target.value)
    setErrorMessage({...ErrorMessage,email: ''})
  }
  const HandlePassword = (e)=>{
    setpassword(e.target.value)
    setErrorMessage({...ErrorMessage,password:''})
  }

/// Handling user Login 

const Url = 'https://tour-haven-application.vercel.app/api/v1/users/login'
const data = {email,password}
const Dispatch = useDispatch()

const HandleLogs = async (e)=>{

  if(!email || !password){
    setErrorMessage({
      email: !email ? "Email is Required" : '',
      password: !password ? "Password" : ''
    })
    return;
   }

  e.preventDefault()
  try{
    setIsloading(true)
    const response = await axios.post(Url,data)
    Dispatch(userData(response.data.data))
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${response.data}`,
      showConfirmButton: false,
      timer: 1500
    });
    console.log(response.data);
  }
  catch(error){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${error.response.error}`,
      // footer: '<a href="#">Why do I have this issue?</a>'
    });
    console.log(error.response.error);
  }
  finally{
    setIsloading(false)
  }
}

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
      {
        Isloading === true ? <Loader/> : (
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
                <input type="email" onChange={HandleEmail}/>
                <p className="error">{ErrorMessage.email}</p>
              </div>
              <div className="LoginPassword">
                <label>Password</label>
                <div className="ShowPasswrd">
                <input type={Showpassword ? "text" : "password"} onChange={HandlePassword} />
                {
              Showpassword?
              <AiOutlineEye onClick={handleShowPassword}/>
              :
              <AiOutlineEyeInvisible onClick={handleShowPassword}/>
            }
                </div>
                <p className="error">{ErrorMessage.password}</p>
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
                <button onClick={HandleLogs}>
                  Login
                </button>
              </div>
              <div className="LoginAlready">
                <span>Don't have an account?</span> &nbsp; <Link to="/signup" style={{textDecoration:"none",color:"#EC8B05",fontSize:"1rem"}}>Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
        )
      }

    </div>
  )
}

export default Login