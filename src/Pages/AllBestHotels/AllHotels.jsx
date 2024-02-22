import React from 'react'
import './AllBest.css'
import HotelCard from './HotelCard'


const AllHotels = () => {
  return (
    <div className="AllHotels">
      <div className="AllCardHolder">
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
      </div>
    </div>
  )
}

export default AllHotels