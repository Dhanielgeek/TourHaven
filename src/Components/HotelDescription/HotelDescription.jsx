import React, { useEffect, useState } from 'react';
import './HotelDescription.css';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdStar } from 'react-icons/io';
import { useParams } from 'react-router-dom';

const HotelDescription = () => {

  const [HotelDes, setHotelDes] = useState({})
  const [Isloading, setIsloading] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id } = useParams()
  console.log(id);

  const HotelDesUrl = `https://tour-haven-application.vercel.app/api/v1/users/search-hotels/${id}`

  useEffect(()=>{
    const GetHotelsDes = async()=>{
      setIsloading(true)
      try{
        const res = await axios.get(HotelDesUrl)
        setHotelDes(res.data.data)
        console.log(res.data);
      }
      catch(error){
        const errorMessage = error.response ? error.response.data.error : 'Error getting details';
        errorMessage
      }
      finally{
        setIsloading(false)
      }
    }
    GetHotelsDes()
  },[id])




 useEffect(() => {
    if (HotelDes.hotelImages && HotelDes.hotelImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HotelDes.hotelImages.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [HotelDes.hotelImages]);


  return (
    <div className='HotelDesBody'>
      {Isloading ? (
        (
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
                ) 
                     ) : (
        <>
          <div className="HotelHero">
          {HotelDes.hotelImages && HotelDes.hotelImages.length > 0 && (
              <img src={HotelDes.hotelImages[currentImageIndex]} alt="" />
            )}
          </div>
          <div className="HotelTitleandPrice">
            <div className="NameOfHotel">
              <h3>
                {HotelDes.name}
              </h3>
            </div>
            <div className="LocationHotel">
              <div className="LocationNameIcon">
               <FaLocationDot style={{color:"#05446E"}}/><span>{HotelDes.city}</span> 
              </div>
              <div className="HotelStarRate">
              {Array.from({ length: HotelDes.stars }, (_, index) => (
                  <IoMdStar key={index}  />
                ))}
              </div>
            </div>
          </div>
          <div className="HotelDescription">
            <div className="HoteldesTitle">
              <h3>Description</h3>
            </div>
            <div className="Hotelcontext">
              <span>
               {HotelDes.description}
                </span> 
            </div>
          </div>
          <div className="HotelFeatures">
            <div className="FeaturesTitle">
              <h3>Features</h3>
            </div>
            <div className="Featurecontent">
            {HotelDes.features && HotelDes.features.length > 0 ? (
                <div className='feat'>
                  {HotelDes.features.map((feature, index) => (
                    <span key={index}>{feature}</span>
                  ))}
                </div>
              ) : (
                <p>No features available</p>
              )}
            </div>
         </div>
      <div className="HotelAvailableRooms">
        <div className="AvailbleTitle">
          <h3>Availble Rooms</h3>
        </div>
        <div className="Availblecontent">
              {HotelDes.availableRooms && HotelDes.availableRooms.length > 0 ? (
                HotelDes.availableRooms.map(room => (
                  <div className="AvailDiv" key={room.id}>
                    <div className="AvailImg">
                      <img src={room.image} alt={room.Type} />
                    </div>
                    <div className="AvailRoomInfo">
                      <h4>{room.Type}</h4>
                      <p>Price: ${room.price}</p>
                      <p>Number: {room.Number}</p>
                    </div>
                    <div className="AvailRoomPriceBookBtn">
                      <button>Book Now</button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No available rooms</p>
              )}
            </div>
        </div> 
        </>
      )}
    </div>
  );
  
};

export default HotelDescription;
