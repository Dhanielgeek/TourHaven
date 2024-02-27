import React,{useState} from 'react'
import './Auth.css'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import Loading from '../Components/Loader/Loading';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const [Showpassword, setShowpassword] = useState(false)
  const [ShowConfirmPassword, setShowConfirmPassword] = useState(false)
  const [newPassword, setnewPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [Isloading, setIsloading] = useState(false)
  const [ErrorMessage, setErrorMessage] = useState({
    newPassword : '',
    confirmPassword : ''
  })



  const handleShowNewPassword = ()=>{
    console.log("show");
    setShowpassword(!Showpassword)
    setErrorMessage({...ErrorMessage,newPassword: ''})
  }

  const handleShowConfirmPassword = ()=>{
    console.log("show");
    setShowConfirmPassword(!ShowConfirmPassword)
    setErrorMessage({...ErrorMessage,confirmPassword: ''})
  }



  // Handling the Reset Password Api and Function

  const {Token} = useParams()

  const Url = `https://tour-haven-application.vercel.app/reset_password/${Token}`
  const data = {newPassword,confirmPassword}
  const Navigate = useNavigate()

   const HandleResetpassword = async (e)=>{
    if(!newPassword || !confirmPassword){
      setErrorMessage({
        newPassword: !newPassword ? "Password is required" : '',
        confirmPassword : !confirmPassword ? "Confirm Password is required" : ""
    })
    return;
   }
   if(newPassword === confirmPassword){
    setErrorMessage({
      confirmPassword : !confirmPassword ? "Password does not match" : ''
    })
    return;
  }
  e.preventDefault()
  try{
    setIsloading(true)
    const response = await axios.put(Url,data)
    Swal.fire({
      title: 'Reset Password successfully',
      text: `${response.data.message}`,
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: '#05446E',
      confirmButtonText: 'Back to Login',
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
          Navigate('/login');
      }
    });
    console.log(response);
  }
  catch(error){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${error}`,
      // footer: '<a href="#">Why do I have this issue?</a>'
    });
  }
  finally{
    setIsloading(false)
  }
  
  }


  return (
    <div className="ResetpasswordBody">
      {
        Isloading === true ? <Loading/> : (<div className="ResetHolder">
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
                <p className="error">{ErrorMessage.newPassword}</p> 
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
                <p className="error">{ErrorMessage.confirmPassword}</p>
            </div>
            <div className="ResetBtnPassword">
              <button onClick={HandleResetpassword}>Reset Password</button>
            </div>
          </div>
        </div>
        </div>)
      }
      
    </div>
  )
}

export default ResetPassword