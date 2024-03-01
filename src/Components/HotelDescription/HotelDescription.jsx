import React, { useEffect, useState } from 'react';
import './HotelDescription.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loader/Loading';

const HotelDescription = () => {
  const { id } = useParams();
  const [hotelDes, setHotelDes] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://tour-haven-application.vercel.app/api/v1/users/hotel-details/${id}`);
        setHotelDes(response.data);
      } catch (error) {
        console.error('Error fetching hotel details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHotelDetails();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="HotelContainer">
          <div className="HotelImg">
            <img src={hotelDes.profileImage} alt="Hotel" />
          </div>
          <div className="HotelText">
            <span>{hotelDes.name}</span>
          </div>
          <div className="HotelPrice">
            <span>₦{hotelDes.price}</span>
          </div>
          <div className="HotelDescription">
            <span>{hotelDes.description}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelDescription;
