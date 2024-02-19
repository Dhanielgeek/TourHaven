import React,{useState} from 'react'
import './Style.css'
import HeaderLogo from '../assets/TourHavenLo.png'
import { NavLink } from 'react-router-dom'
import { FaRegCircleUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClear } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';


const Header = () => {



  const [Toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!Toggle)
  }

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
        <NavLink to="/" className={({isActive})=> isActive ? "Active" : "Inactive"}> Home</NavLink>
        <NavLink to="/about" className={({isActive})=> isActive ? "Active" : "Inactive"}>About Us</NavLink>
        <NavLink to="/contact" className={({isActive})=> isActive ? "Active" : "Inactive"}>Contact</NavLink>
      </div>
      <div className="HeaderProfile">
        <div className="ProfileLogo">
          <FaRegCircleUser style={{fontSize: "1.8rem"}}/>
        </div>
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
            <NavLink to="/home" className={({ isActive }) => isActive ? "Active" : "Inactive"}>Home</NavLink>
            <NavLink to="/home/about" className={({ isActive }) => isActive ? "Active" : "Inactive"}>About Us</NavLink>
            <NavLink to="/home/contact" className={({ isActive }) => isActive ? "Active" : "Inactive"}>Contact</NavLink>
            <NavLink to="/explore" className={({ isActive }) => isActive ? "Active" : "Inactive"}>Explore</NavLink>
            <NavLink to="/partner" className={({ isActive }) => isActive ? "Active" : "Inactive"}>Become a partner</NavLink>
            <div className="ProfileLogo">
              <FaRegCircleUser style={{ fontSize: "1.8rem" }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </div>
  )
}

export default Header