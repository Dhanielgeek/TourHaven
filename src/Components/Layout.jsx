import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from './Header'
import Footers from './Footer'


const Layout = () => {
  return (
    <>
     <Headers/>
     <Outlet/>
     {/* <Footers/> */}
    
    </>
   
  )
}

export default Layout