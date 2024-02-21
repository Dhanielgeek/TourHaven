import React from 'react'
import ContactUs from './ContactUs'
import Talk from './Talk'
import './Contact.css'

const Contact = () => {
  return (
    <div className='ContactBody'>
       <div className='ContactWrap'>
       <ContactUs/>
       <Talk/>
      </div>
    </div>
  )
}

export default Contact