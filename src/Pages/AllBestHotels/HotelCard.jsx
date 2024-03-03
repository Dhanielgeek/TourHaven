import React, { useEffect, useState } from 'react';
import './AllBest.css';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdStar } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';

const HotelCard = () => {
    const [hotels, setHotels] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    console.log(hotels);

    const url = 'https://tour-haven-application.vercel.app/api/v1/users/get-all-hotels';
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHotels = async () => {
            setIsLoading(true);
            try {
                const res = await axios.get(url);
                setHotels(res.data.data);
            } catch (error) {
                const errorMessage = error.response ? error.response.data.error : 'An error occurred';
                console.log(errorMessage);
            } finally {
                setIsLoading(false);
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

    const viewHotel = (id) => {
        navigate(`/hoteldes/${id}`);
    };

    return (
        <div className="HotelHold">
            <div className="HotelContainer">
                {isLoading ? (
                    <div className="LoaderContainer">
                       <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="#FFA500"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
                    </div>
                ) : (
                    hotels.map((item) => (
                        <div className="HotelCard" key={item.id}>
                            <div className="HotelImg">
                                <img src={item.profileImage} alt="" />
                            </div>
                            <div className="HotelContext">
                                <div className="HotelName">
                                    <h4>{item.name}</h4>
                                </div>
                                <div className="HotelLocationReviews">
                                    <div className="Hoteloc">
                                        <FaLocationDot style={{color:"#ea4335"}} />
                                        <span>{item.city}</span>
                                    </div>
                                    <div className="HotelReview">
                                        {renderStars(item.stars)}
                                    </div>
                                </div>
                                <div className="HotelBtn">
                                    <button onClick={() => viewHotel(item.id)}>View</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default HotelCard;
