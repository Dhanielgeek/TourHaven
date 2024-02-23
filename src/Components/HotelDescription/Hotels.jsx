import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";



const Hotels = () => {
  return (
    <div className='Hotels'>
      <div className="GoldenTuilp">
        <h4>Golden Tuilp Hotel</h4> 
        <h5>Description</h5>
        <h6>It is a long established fact that a reader will be distracted <br/>by the readable content of a page when looking at its layout.<br/> The point of using Lorem Ipsum is that it has a more-or-less <br/>normal distribution of letters</h6>
        <h3>₦ 40,000.00</h3>
      </div>
      <div className="Right">
        <div className="Holder">
            <MdLocationOn className='LocationOn'/>
            <h6>Lekki Phase 1</h6>
            <RiStarSFill  className='Star'/>
            <RiStarSFill className='Star'/>
            <RiStarSFill className='Star'/>
            <RiStarSFill className='Star'/>
            <RiStarSFill className='Star'/>
        </div>
        <div className="ButtonHolder">
            <button className='Book'>Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hotels
