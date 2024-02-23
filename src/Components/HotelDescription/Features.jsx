import React from 'react'

import { CiForkAndKnife } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { HiLightBulb } from "react-icons/hi";
import { TbSwimming } from "react-icons/tb";



const Features = () => {
  return (
    <div className='Features'>
      <div className="OurFeature">
      <h3>Features</h3>
      </div>
      <div className="CardsHolder">
        <div className="Hol">
        <div className="Card1">
          <CiForkAndKnife className='Knife'/>  
        </div>
        <h5>Complimentary <br/> Breakfast</h5>
        </div>
        <div className="Hol1">
        <div className="Card2">
          <FaStar className='Fa'/> 
        </div>
        <h5>Air<br/> Conditioner</h5>
        </div>
        <div className="Hol2">
        <div className="Card3">
       <HiLightBulb className='Bulb'/> 
        </div>
        <h5>24Hours <br/> Electricity</h5>
        </div>
        <div className="Hol3">
        <div className="Card4">
          <TbSwimming className='Swim'/>
        </div>
        <h5>Swimming <br/> Pool</h5>
        </div>
      </div>
    </div>
  )
}

export default Features
