import React from 'react'
import './HotelDescription.css'
import DescriptionHero from './DescriptionHero'
import Hotels from './Hotels'
import Features from './Features'
import Available from './Available'

const HotelDescription = () => {
  return (
    <div className='DescriptionBody'>
      <DescriptionHero/>
      <Hotels/>
      <Features/>
      <Available/>
    </div>
  )
}

export default HotelDescription