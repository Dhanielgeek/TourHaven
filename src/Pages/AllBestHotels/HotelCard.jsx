import React, { useEffect, useState } from 'react';
import './AllBest.css';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdStar } from 'react-icons/io';
import { Link } from 'react-router-dom';
import axios from 'axios';



const HotelCard = () => {


    const [Hotels, setHotels] = useState([])
    console.log(Hotels);

    const Url = 'https://tour-haven-application.vercel.app/api/v1/users/get-all-hotels';
    
    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const res = await axios.get(Url);
                setHotels(res.data.data);
                console.log(res.data.data);
            } catch (error) {
                const errorMessage = error.response ? error.response.data.error : 'An error occurred';
                console.log(errorMessage);
            }
        };
        fetchHotels();
    }, []);



    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<IoMdStar key={i} />);
        }
        return stars;
    };

  return (
    <div className="HotelHold">
        <div className="HotelContainer">
            {
                Hotels.map((item)=>(
                    <div className="HotelCard">
                <div className="HotelImg">
                    <img src={item.profileImage} alt="" />
                </div>
                <div className="HotelContext">
                    <div className="HotelName">
                        <h4>
                            {item.name}
                        </h4>
                    </div>
                    <div className="HotelLocationReviews">
                        <div className="Hoteloc">
                        <FaLocationDot />
                        <span>
                           {item.city}  
                        </span>
                       
                        </div>
                        <div className="HotelReview">
                        {renderStars(item.stars)}
                        </div>
                    </div>
                    <div className="HotelBtn">
                        <button>View Hotel</button>
                    </div>
                </div>
            </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default HotelCard