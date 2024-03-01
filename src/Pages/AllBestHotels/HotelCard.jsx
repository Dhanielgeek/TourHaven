import React, { useEffect, useState } from 'react';
import './AllBest.css';
import { CiLocationOn } from "react-icons/ci";
import { IoMdStar } from 'react-icons/io';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HotelCard = () => {
    const [hotels, setHotels] = useState([]);

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

    return (
        <div className="HotelCardHold">
            {hotels.map((hotel, index) => (
                <div className="HotelInfo" key={index}>
                    <div className="HotelImg">
                        <img src={hotel.profileImage} alt={hotel.name} />
                    </div>
                    <div className="HotelInfo">
                        <div className="HotelName">
                            <h3>{hotel.name}</h3>
                        </div>
                        <div className="HotelLocation">
                            <div className="HotelLocationdIcon">
                                <CiLocationOn className="LocationIcon" />
                                <h3>{hotel.city}</h3>
                            </div>
                            <div className="HotelStarIcon">
                                {[...Array(hotel.stars)].map((_, i) => (
                                    <IoMdStar key={i} className="StarIcon" />
                                ))}
                            </div>
                        </div>
                        <div className="HotelBtn">
                            <button>
                                <Link to="/hoteldes" style={{ textDecoration: 'none', color: 'white' }}>
                                    View Hotel
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HotelCard;
