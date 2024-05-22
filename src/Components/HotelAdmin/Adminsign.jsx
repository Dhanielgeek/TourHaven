import React, { useState } from 'react';
import '../../Auth/Auth.css';
import Logo from '../../assets/TourHavenLo.png';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from 'axios';
import Loader from '../Loader/Loading';
import Swal from 'sweetalert2';

const Adminsign = () => {
  const [Showpassword, setShowpassword] = useState(false);
  const [ShowConfirmPassword, setShowConfirmPassword] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);
  const [hotelName, setHotelName] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    hotelName: '',
    city: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  });

  const Navigate = useNavigate();

  const HandleHotelName = (e) => {
    setHotelName(e.target.value);
    setErrorMessages({ ...errorMessages, hotelName: '' })
  }

  const HandleCity = (e) => {
    setCity(e.target.value);
    setErrorMessages({ ...errorMessages, city: '' })
  }

  const HandleEmail = (e) => {
    setEmail(e.target.value);
    setErrorMessages({ ...errorMessages, email: '' })
  }

  const HandleAddress = (e) => {
    setAddress(e.target.value);
    setErrorMessages({ ...errorMessages, address: '' })
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
    if (!hotelName || !city || !email || !address || !password || !confirmPassword || !phoneNumber) {
      setErrorMessages({
        hotelName: !hotelName ? 'Hotel Name is required' : '',
        city: !city ? 'City is required' : '',
        email: !email ? 'Email is required' : '',
        address: !address ? 'Address is required' : '',
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
    const Url = 'https://tourhaven.onrender.com/api/v1/users/hotelsignup';
    const dataNeeded = { hotelName, city, email, password, confirmPassword, phoneNumber, address };

    try {
      setIsLoading(true);
      const res = await axios.post(Url, dataNeeded);
      Swal.fire({
        title: 'Registration Successful!',
        text: 'You have successfully signed up. A message has been sent to your mail for verification',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#00a6fb',
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
      });
      console.log(errorMessage);
    } finally {
      setIsLoading(false);
    }
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
        <div className="AdminSignupContainer">
          <div className="AdminSignHoldAll">
            <div className="SignupHeader">
              <div className="SignupImg">
                <img src={Logo} alt="" />
              </div>
              <div className="SignupTitle">
                <h4>Sign Up</h4>
              </div>
            </div>
            <div className="SignupForm">
              <div className="AdminSignupFirstandcity">
                <div className="AdminSignup">
                  <label>Hotel Name</label>
                  <input type="text" onChange={HandleHotelName} />
                  <p className="error">{errorMessages.hotelName}</p>
                </div>
                <div className="AdminCity">
                  <label>City</label>
                  <input type="text" onChange={HandleCity} />
                  <p className="error">{errorMessages.city}</p>
                </div>
              </div>
              <div className="AdminSignupEmailandAddress">
                <div className="AdminEmail">
                  <label>Email</label>
                  <input type="email" onChange={HandleEmail} />
                  <p className="error">{errorMessages.email}</p>
                </div>
                <div className="AdminAddress">
                  <label>Address</label>
                  <input type="text" onChange={HandleAddress} />
                  <p className="error">{errorMessages.address}</p>
                </div>
              </div>
              <div className="SignupPhoneNumber">
                <label>Phone Number</label>
                <input type="text" onChange={HandlePhoneNumber} />
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

export default Adminsign
