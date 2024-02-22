import React from 'react'
import './AllBest.css'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import Hotels from '../../assets/hotelsss.svg'

const HotelCard = () => {
  return (
    <div className="HotelCardHold">
        <div className="HotelImg">
            <img src={Hotels} alt="" />
        </div>
        <div className="HotelInfo">
            <div className="HotelName">
                <h3>Medalion Hotels</h3>
            </div>
            <div className="HotelLocation">
                <div className="HotelLocationdIcon">
                <FaLocationDot className="LocationIcon"/>
                <h3>Ikeja,Lagos</h3>
                </div>
                <div className="HotelStarIcon">
                <IoMdStar className="StarIcon"/>
                <IoMdStar className="StarIcon"/>
                <IoMdStar className="StarIcon"/>
                <IoMdStar className="StarIcon"/>
                <IoMdStar className="StarIconLast"/>
                </div>
            </div>
            <div className="HotelBtn">
                <button>View Hotel</button>
            </div>
        </div>
    </div>
  )
}

export default HotelCard