import React, { useState } from 'react';
import './Auth.css';
import Logo from '../assets/TourHavenLo.png';
import { Link,useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import SideImg from '../assets/signnnn4.jpeg';
import SideImg2 from '../assets/signnnn3.jpeg';
import axios from 'axios';
import Loader from '../Components/Loader/Loading';
import Swal from 'sweetalert2'



const Signup = () => {
  const [Showpassword, setShowpassword] = useState(false);
  const [ShowConfirmPassword, setShowConfirmPassword] = useState(false);
  const [ImageChange, setImageChange] = useState([SideImg, SideImg2]);
  const [Num, setNum] = useState(0);
  const [IsLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  });

  const Navigate = useNavigate();

  const HandleFirstName = (e) => {
    setFirstName(e.target.value);
    setErrorMessages({ ...errorMessages, firstName: '' })
  }

  const HandleLastName = (e) => {
    setLastName(e.target.value);
    setErrorMessages({ ...errorMessages, lastName: '' })
  }

  const HandleEmail = (e) => {
    setEmail(e.target.value);
    setErrorMessages({ ...errorMessages, email: '' })
  }

  const HandlePassword = (e) => {
    setPassword(e.target.value);
    setErrorMessages({ ...errorMessages, password: '' })
  }

  const HandleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setErrorMessages({ ...errorMessages, confirmPassword: '' })
  }

  const HandlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    setErrorMessages({ ...errorMessages, phoneNumber: '' })
  }

  const HandleSignUp = async () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword || !phoneNumber) {
      setErrorMessages({
        firstName: !firstName ? 'First Name is required' : '',
        lastName: !lastName ? 'Last Name is required' : '',
        email: !email ? 'Email is required' : '',
        password: !password ? 'Password is required' : '',
        confirmPassword: !confirmPassword ? 'Confirm Password is required' : '',
        phoneNumber: !phoneNumber ? 'Phone Number is required' : ''
      });
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessages({ ...errorMessages, confirmPassword: 'Passwords do not match' });
      return;
    }


    // Perform axios post request here
    const Url = 'https://tourhaven.onrender.com/api/v1/users/signup';
    const dataNeeded = { firstName, lastName, email, password, confirmPassword, phoneNumber };

    try {
      setIsLoading(true);
      const res = await axios.post(Url, dataNeeded);
      Swal.fire({
        title: 'Registration Successful!',
        text: 'You have successfully signed up. A message has been sent to your mail for verification',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#00a6fb',
        // confirmButtonText: 'Go to Login',
        allowOutsideClick: false,
      })
      console.log(res.data);
      // Redirect to success page or handle success as needed
    } catch (error) {
      const errorMessage = error.response ? error.response.data.error : 'An error occurred';
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
      console.log(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  const HandleNext = () => {
    setNum(Num + 1);
  }

  const handleShowPassword = () => {
    setShowpassword(!Showpassword);
  }

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!ShowConfirmPassword);
  }


  return (
    <div className="SignupBody">
      {IsLoading ? <Loader /> : (
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
                <Link to='/' className='linkimg'>
               <img src={Logo} alt="" />
             </Link>
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
                  <input type="text" onChange={HandleFirstName} placeholder='John' />
                  <p className="error">{errorMessages.firstName}</p>
                </div>
                <div className="SignupLast">
                  <label>Last Name</label>
                  <input type="text" onChange={HandleLastName} placeholder='Doe' />
                  <p className="error">{errorMessages.lastName}</p>
                </div>
              </div>
              <div className="SignupEmail">
                <label>Email</label>
                <input type="email" onChange={HandleEmail} placeholder='johndoe@gmail.com' />
                <p className="error">{errorMessages.email}</p>
              </div>
              <div className="SignupPhoneNumber">
                <label>Phone Number</label>
                <input type="text" onChange={HandlePhoneNumber} placeholder='+234' />
                <p className="error">{errorMessages.phoneNumber}</p>
              </div>
              <div className="SignupPassword">
                <label>Password</label>
                <div className="PasswordInput">
                  <input type={Showpassword ? "text" : "password"} onChange={HandlePassword} />
                  {Showpassword ?
                    <AiOutlineEye onClick={handleShowPassword} />
                    :
                    <AiOutlineEyeInvisible onClick={handleShowPassword} />
                  }
                </div>
                <p className="error">{errorMessages.password}</p>
              </div>
              <div className="SignupConfirmPassword">
                <label>Confirm Password</label>
                <div className="SignupConfirmeyes">
                  <input type={ShowConfirmPassword ? "text" : "password"} onChange={HandleConfirmPassword} />
                  {ShowConfirmPassword ?
                    <AiOutlineEye onClick={handleShowConfirmPassword} />
                    :
                    <AiOutlineEyeInvisible onClick={handleShowConfirmPassword} />
                  }
                </div>
                <p className="error">{errorMessages.confirmPassword}</p>
              </div>
              {/* <div className="SignupAgreeTerms">
                <input type="checkbox" />
                &nbsp;
                <label>I agree to terms of use</label>
              </div> */}
              <div className="SignupBtn">
                <button onClick={HandleSignUp}>
                  Sign Up
                </button>
              </div>
              <div className="SignupAlready">
                <span>Already have an account?&nbsp;</span> <Link to="/login" style={{ textDecoration: "none", color: "#EC8B05" }}>Login</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Signup
