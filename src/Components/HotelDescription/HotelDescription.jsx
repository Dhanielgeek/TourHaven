import React from 'react'
import './HotelDescription.css'
import DescriptionHero from './DescriptionHero'
import Hotels from './Hotels'
import Features from './Features'

const HotelDescription = () => {
  return (
    <div className='DescriptionBody'>
      <DescriptionHero/>
      <Hotels/>
      <Features/>
    </div>
  )
}

export default HotelDescription