import React from 'react'
import Hero from './Hero'
import BestHotels from './BestHotels'
import HotelCard from './AllBestHotels/HotelCard'
import TotalEverything from './TotalEverything'
import Services from './Services'
import Testimonals from './Testimonals'
import Subs from './Subs'


const Home = () => {
  return (
    <>
    <Hero/>
    <BestHotels/>
    <HotelCard/>
    <TotalEverything/>
    <Services/>
    <Testimonals/>
    <Subs/>
    </>
  )
}

export default Home