import React, { useState } from 'react';
import './Style.css';
import HeaderLogo from '../assets/TourHavenLo.png';
import { NavLink } from 'react-router-dom';
import { FaRegCircleUser } from 'react-icons/fa6';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdOutlineClear } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { UserToken } from '../Functions/Features';
import axios from 'axios';



const Header = () => {
  const [Toggle, setToggle] = useState(false)
  const [Open, setOpen] = useState(false)

  const handleToggle = () => {
    setToggle(!Toggle)
  }

  const handleOpen = () => {
    setOpen(!Open);
  }

  const handleClose = () => {
    setOpen(false)
    setToggle(false)
  }

  const headerVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  }

  //Handle Logout Function 
  const userToken = useSelector((state) => state.mySlice.userToken) 
  const Url = 'https://tour-haven-application.vercel.app/logout'
  const headers = {
    Authorization : `Bearer${userToken}` 
  }

  const HandleLogout = async () => {
    try {
      const res = await axios.post(Url, null, { headers });
      // Assuming successful logout action based on response status
      if (res.status === 200) {
        Swal.fire({
          title: "Logged out successfully",
          text: res.data.message, // Assuming your backend sends a message
          icon: "success"
        });
        // Perform any additional cleanup, like clearing local storage, etc.
      } else {
        // Handle unexpected status code
        Swal.fire({
          title: "Logout failed",
          text: "An unexpected error occurred",
          icon: "error"
        });
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error logging out:", error);
      Swal.fire({
        title: "Logout failed",
        text: "An error occurred while logging out",
        icon: "error"
      });
    }
  };
  

  // Handle the selector from redux 
  const user = useSelector((state)=> state.mySlice.user)

  return (
        // Web View
    <div className="Header">
      <div className="HeaderLogo">
        <img src={HeaderLogo} alt="" />
      </div>
      <div className="HeaderLink">
        <NavLink to="/" className={({ isActive }) => isActive ? 'Active' : 'Inactive'} > Home</NavLink>
        <NavLink to="/bookings" className={({ isActive }) => isActive ? 'Active' : 'Inactive'} >Bookings</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'Active' : 'Inactive'} >About Us</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'Active' : 'Inactive'} >Contact</NavLink>
        <NavLink to="/team" className={({ isActive }) => isActive ? 'Active' : 'Inactive'} >Team</NavLink>
      </div>
      <div className="HeaderProfile">
      <div className="ProfileLogo" onClick={handleOpen}>
          {user && user.firstName && user.lastName ? (
            <div className="UserNameHolderCircle">
               <h3>
              {user.firstName.charAt(0)}
              {user.lastName.charAt(0)}
            </h3> 
            </div>
          
          ) : (
            <FaRegCircleUser style={{ fontSize: '1.8rem' }} />
          )}
        </div>
        <AnimatePresence>
          {Open && (
            <motion.div
              className="UserDropDown"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              onClick={handleClose}
            >
            {
              user && user.firstName && user.lastName ? (
                <div className="UserHoldall">
                  <div className="ViewAccount">
                    <span>View Account</span>
                  </div>
                  <div className="LineSign"></div>
                  <div className="HeaderLogOut">
                    <button onClick={HandleLogout}>LogOut</button>
                  </div>
                </div>
              ) : (
                <div className="SignsHoldall">
                  <div className="SignUpOfferText">
                    <span>Sign up for amazing offer</span>
                    <div className="LineSign"></div>
                  </div>
                  <div className="LoginLink">
                    <Link to="/login" style={{ textDecoration: 'none', color: '#EC8B05' }}>Login</Link>
                  </div>
                  <div className="NewMember">
                    <span>New member ? </span> &nbsp; <Link to="/signup" style={{ textDecoration: 'none', color: '#EC8B05', fontWeight: '700',fontSize:'1rem' }}>Sign Up</Link>
                  </div>
                </div>
              )
            }
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
      {/* Mobile View */}
      <div className="HeaderMobile">
        {Toggle ? (
          <MdOutlineClear className="MenuHold" onClick={handleToggle} />
        ) : (
          <RxHamburgerMenu className="MenuHold" onClick={handleToggle} />
        )}
        <AnimatePresence>
          { Toggle && (
            <motion.div
              className="HeaderHold"
              initial="closed"
              animate="open"
              exit="closed"
              variants={headerVariants}
              transition={{ duration: 0.3 }}
              onClick={handleClose}
            >
              <NavLink to="/" className={({ isActive }) => isActive ? 'Active' : 'Inactive'}onClick={handleClose}>Home</NavLink>
              {/* <NavLink to="/" className={({ isActive }) => isActive ? 'Active' : 'Inactive'}>Bookings</NavLink> */}
              <NavLink to="/about" className={({ isActive }) => isActive ? 'Active' : 'Inactive'}onClick={handleClose}>About Us</NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'Active' : 'Inactive'}onClick={handleClose}>Contact</NavLink>
              <NavLink to="/team" className={({ isActive }) => isActive ? 'Active' : 'Inactive'}onClick={handleClose}>Team</NavLink>
              <div className="ProfileUser">
                <button className='UserLog'>
                  <NavLink to='/login' style={{textDecoration:"none",color:"#05446E"}}> Login </NavLink>
                </button>
                <button className='UserSign'>
                <NavLink to='/signup' style={{textDecoration:"none",color:"#ffff"}}> Create Account </NavLink>
                </button>
              </div>
              
            </motion.div>
          )}
        </AnimatePresence>
      </div>
     
    </div>
    
  )
}

export default Header
