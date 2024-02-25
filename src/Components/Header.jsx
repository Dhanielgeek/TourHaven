import React, { useState } from 'react';
import './Style.css';
import HeaderLogo from '../assets/TourHavenLo.png';
import { NavLink } from 'react-router-dom';
import { FaRegCircleUser } from 'react-icons/fa6';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdOutlineClear } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  const [Toggle, setToggle] = useState(false);
  const [Open, setOpen] = useState(false);

  const handleToggle = () => {
    setToggle(!Toggle);
  };

  const handleOpen = () => {
    setOpen(!Open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const headerVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  return (
    <div className="Header">
      <div className="HeaderLogo">
        <img src={HeaderLogo} alt="" />
      </div>
      <div className="HeaderLink">
        <NavLink to="/" className={({ isActive }) => isActive ? 'Active' : 'Inactive'}> Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'Active' : 'Inactive'}>About Us</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'Active' : 'Inactive'}>Contact</NavLink>
        <NavLink to="/team" className={({ isActive }) => isActive ? 'Active' : 'Inactive'}>Team</NavLink>
      </div>
      <div className="HeaderProfile">
        <div className="ProfileLogo" onClick={handleOpen}>
          <FaRegCircleUser style={{ fontSize: '1.8rem' }} />
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="HeaderMobile">
        {Toggle ? (
          <MdOutlineClear className="MenuHold" onClick={handleToggle} />
        ) : (
          <RxHamburgerMenu className="MenuHold" onClick={handleToggle} />
        )}
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
              <NavLink to="/" className={({ isActive }) => isActive ? 'Active' : 'Inactive'}>Home</NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'Active' : 'Inactive'}>About Us</NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'Active' : 'Inactive'}>Contact</NavLink>
              <NavLink to="/team" className={({ isActive }) => isActive ? 'Active' : 'Inactive'}>Team</NavLink>
              <div className="ProfileLogo">
                <FaRegCircleUser style={{ fontSize: '1.8rem' }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
