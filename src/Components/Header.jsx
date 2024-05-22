import React, { useState, useEffect } from 'react';
import './Style.css';
import HeaderLogo from '../assets/TourHavenLo.png';
import { NavLink } from 'react-router-dom';
import { FaRegCircleUser } from 'react-icons/fa6';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdOutlineClear } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Dropdown, Menu, Modal } from 'antd';
import { RemoveUser } from '../Functions/Features';

const { SubMenu } = Menu;

const Header = () => {
  const [Toggle, setToggle] = useState(false);
  const [Open, setOpen] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const Navigate = useNavigate();
  const Dispatch = useDispatch();
//   const [sessionTimeout, setSessionTimeout] = useState(null);

// useEffect(() => {
//   const resetSessionTimeout = () => {
//     if (sessionTimeout) {
//       clearTimeout(sessionTimeout);
//     }

//     // Set new timeout for one day (24 hours)
//     const timeout = setTimeout(logoutUser, 24 * 60 * 60 * 1000); // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
//     setSessionTimeout(timeout);
//   };

//   const logoutUser = () => {
//     console.log('Session timed out. Logging out user.');
//     showLogoutModal();
//   };

//   // Reset session timeout on user activity
//   const handleUserActivity = () => {
//     resetSessionTimeout();
//   };

//   document.addEventListener('mousemove', handleUserActivity);
//   document.addEventListener('keydown', handleUserActivity);

//   // Initialize session timeout
//   resetSessionTimeout();

//   return () => {
//     document.removeEventListener('mousemove', handleUserActivity);
//     document.removeEventListener('keydown', handleUserActivity);
//   };
// }, [sessionTimeout]);


  const handleToggle = () => {
    setToggle(!Toggle);
  };

  const handleOpen = () => {
    setOpen(!Open);
  };

  const handleClose = () => {
    setOpen(false);
    setToggle(false);
  };

  const headerVariants = {
    open: { opacity: 1, x: 5 },
    closed: { opacity: 0, x: '100%' },
  };

  // Handle the selector from redux
  const user = useSelector((state) => state.mySlice.user);
  const userToken = useSelector((state) => state.mySlice.userToken);

  // Function to show logout confirmation modal
  const showLogoutModal = () => {
    setLogoutModalVisible(true);
  };

  // Handle Function for the Logout

  const headers = {
    Authorization: `Bearer ${userToken}`,
  };
  const Url = 'https://tour-haven-application.vercel.app/api/v1/users/logout';

  const HandleLogout = async () => {
    try {
      const response = await axios.post(Url, null, { headers });
      if (response.status === 200) {
        Swal.fire({
          title: 'Logged out successfully',
          icon: 'success',
        });
        Navigate('/');
        Dispatch(RemoveUser());
        setLogoutModalVisible(false);
      } else {
        Swal.fire({
          title: 'Logout Failed',
          text: 'Failed to logout. Please try again later.',
          icon: 'error',
        });
      }
    } catch (error) {
      console.error('Logout error:', error);
      Swal.fire({
        title: 'Logout Failed',
        text: 'An error occurred while logging out. Please try again later.',
        icon: 'error',
      });
    }
  };

  // Function to handle canceling logout
  const handleCancelLogout = () => {
    setLogoutModalVisible(false);
  };

  // flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'display: 'flex',
  const menu = (
    <Menu onClick={handleClose} style={{ width: '10rem', height: '7rem' }}>
      <Menu.Item>
        <Link to="/user" style={{ fontFamily: 'Lora', color: '#fb8500' }}>
          Account
        </Link>
      </Menu.Item>
      <Menu.Item>
        <button
          onClick={showLogoutModal}
          style={{
            paddingLeft: '40px',
            paddingRight: '40px',
            paddingBottom: '10px',
            paddingTop: '10px',
            border: '1px solid #05446E',
            background: 'none',
            fontFamily: 'Lora',
            borderRadius: '7px',
          }}
        >
          Logout
        </button>
      </Menu.Item>
    </Menu>
  );

  return (
    // Web view
    <div className="Header">
      <div className="HeaderLogo">
        <img src={HeaderLogo} alt="" />
      </div>
      <div className="HeaderLink">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'Active' : 'Inactive')}>
          {' '}
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'Active' : 'Inactive')}>
          {' '}
          About Us
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'Active' : 'Inactive')}>
          {' '}
          Contact
        </NavLink>
        <NavLink to="/team" className={({ isActive }) => (isActive ? 'Active' : 'Inactive')}>
          {' '}
          Team
        </NavLink>
        {/* <NavLink to="/adminsign" className={({ isActive }) => (isActive ? 'Active' : 'Inactive')}>
          {' '}
          Become a Partner
        </NavLink> */}
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
              {user && user.firstName && user.lastName ? (
                <div className="UserHoldall">
                  <div className="ViewAccount">
                    <span>
                      <Link to="/user" style={{ textDecoration: 'none', color: '#05446E' }}>
                        Account
                      </Link>
                    </span>
                  </div>
                  <div className="LineSign"></div>
                  <div className="HeaderLogOut">
                    <button onClick={showLogoutModal}>LogOut</button>
                  </div>
                </div>
              ) : (
                <div className="SignsHoldall">
                  <div className="SignUpOfferText">
                    <span>Sign up for amazing offer</span>
                    <div className="LineSign"></div>
                  </div>
                  <div className="LoginLink">
                    <Link to="/login" style={{ textDecoration: 'none', color: '#EC8B05', fontSize: '0.9rem' }}>
                      Login
                    </Link>
                  </div>
                  <div className="NewMember">
                    <span>New member ? </span> &nbsp;{' '}
                    <Link
                      to="/signup"
                      style={{ textDecoration: 'none', color: '#EC8B05', fontWeight: '700', fontSize: '1rem' }}
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* End of Web view */}

      {/* Mobile View */}
      <div className="HeaderMobile">
        {Toggle ? (
          <MdOutlineClear className="MenuHold" onClick={handleToggle} />
        ) : (
          <RxHamburgerMenu className="MenuHold" onClick={handleToggle} />
        )}
        <div className="ProfileUser">
          {user && user.firstName && user.lastName ? (
            <Dropdown overlay={menu}>
              <div className="UserInitials">
                <h3>
                  {user.firstName.charAt(0)}
                  {user.lastName.charAt(0)}
                </h3>
              </div>
            </Dropdown>
          ) : (
            <div className="UserMobileHold">
              <button className="UserLog">
                <NavLink to="/login" style={{ textDecoration: 'none', color: '#05446E' }}>
                  {' '}
                  Login{' '}
                </NavLink>
              </button>
              <button className="UserSign">
                <NavLink to="/signup" style={{ textDecoration: 'none', color: '#ffff' }}>
                  Sign up
                </NavLink>
              </button>
            </div>
          )}
        </div>
        <AnimatePresence>
          {Toggle && (
            <motion.div
              className="HeaderHold"
              initial="closed"
              animate="open"
              exit="closed"
              variants={headerVariants}
              transition={{ duration: 0.3 }}
            >
              <NavLink to="/" className={({ isActive }) => (isActive ? 'Active' : 'Inactive')} onClick={handleClose}>
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'Active' : 'Inactive')}
                onClick={handleClose}
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'Active' : 'Inactive')}
                onClick={handleClose}
              >
                Contact
              </NavLink>
              <NavLink to="/team" className={({ isActive }) => (isActive ? 'Active' : 'Inactive')} onClick={handleClose}>
                Team
              </NavLink>
              {/* <NavLink to="/admin" className={({ isActive }) => (isActive ? 'Active' : 'Inactive')}  onClick={handleClose}>
                Become a Partner
        </NavLink> */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Logout Confirmation Modal */}
      <Modal
        title="Logout Confirmation"
        centered
        visible={logoutModalVisible}
        onOk={HandleLogout}
        onCancel={handleCancelLogout}
        okText={<span>Yes</span>}
        cancelText="Cancel"
        style={{ backgroundColor: '#05446E', color: 'red' }}
      >
        <p>Are you sure you want to logout?</p>
      </Modal>
    </div>
  );
};

export default Header;
