import React, { useEffect, useState } from 'react';
import './HotelDescription.css';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import { FaLocationDot } from "react-icons/fa6";
import { IoFastFoodOutline, IoBeerOutline ,IoWifiOutline } from "react-icons/io5";
import { MdHeatPump } from "react-icons/md";
import { PiTelevisionSimple } from "react-icons/pi";
import { FaSwimmer, FaCar } from "react-icons/fa";
import { IoMdStar } from 'react-icons/io';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Modal, Button } from 'antd';
import Bookings from '../Bookings/Bookings';
import ScrollToTop from '../ScrollToTop';

const HotelDescription = () => {
  const [HotelDes, setHotelDes] = useState({});
  const [Isloading, setIsloading] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id} = useParams();
  const Navigate = useNavigate();
  const userToken = useSelector((state) => state.mySlice.userToken);
  const [isBookingModalVisible, setIsBookingModalVisible] = useState(false);
  // const [bookingId, setbookingId] = useState('')

  const [bookingData, setBookingData] = useState({
    guestName: '',
    email: '',
    checkIn: '',
    checkOut: '',
    checkInTime: '',
    checkOutTime: '',
    NoOfGuest:1 
  });



  const handleBookRoom = async (roomId) => {
    console.log(roomId);
    if (!userToken) {
      Modal.warning({
        title: 'Dear user',
        content: (
          <div className='ModalHold' >
            <p>You have to Log In to book a room</p>
            <div className="modal-buttons" style={{ margin: '30px', width: "70%" }}>
              <Button onClick={() => {
                Navigate('/login');
              }} style={{ margin: '0 10px', width: '90%', height: '60%' }} >Login</Button>
            </div>
          </div>
        ),
      });
    } else {
      setBookingData(prevData => ({
        ...prevData,
        roomId: roomId
      }));

      setIsBookingModalVisible(true);
     
    }
  };
  

  const HotelDesUrl = `https://tour-haven-application.vercel.app/api/v1/users/search-hotels/${id}`;
 

  useEffect(() => {
    const GetHotelsDes = async () => {
      setIsloading(true);
      try {
        const res = await axios.get(HotelDesUrl);
        setHotelDes(res.data.data);
        console.log(res.data);
      } catch (error) {
        const errorMessage = error.response ? error.response.data.error : 'Error getting details';
        console.log(errorMessage);
      } finally {
        setIsloading(false);
      }
    };
    GetHotelsDes();
  }, [id]);

  const HandleNextBtn = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HotelDes.hotelImages.length);
  };


  const handleBookingModalVisibility = () => {
    setIsBookingModalVisible(!isBookingModalVisible);
  }

  return (
    <div>
      <ScrollToTop/>
 <div className='HotelDesBody'>
      {Isloading ? (
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
        <>
          <div className="HotelHero">
            <div className="HotelHeroHold">
              <div className="HotelHoldone">
                {HotelDes.hotelImages && (
                  <img src={HotelDes.hotelImages[currentImageIndex]} alt="" />
                )}
              </div>
              <div className="HotelHoldtwo">
                {HotelDes.hotelImages && (
                  <img src={HotelDes.hotelImages[(currentImageIndex + 1) % HotelDes.hotelImages.length]} alt="" />
                )}
              </div>
            </div>
            <div className="NumNext">
              <span onClick={HandleNextBtn}></span>
              <span onClick={HandleNextBtn}></span>
              <span onClick={HandleNextBtn}></span>
            </div>
          </div>

          <div className="HotelTitleandPrice">
            <div className="NameOfHotel">
              <h3>
                {HotelDes.name}
              </h3>
              <div className="HotelAddress">
                <span>{HotelDes.address}</span>
              </div>
            </div>
            <div className="LocationHotel">
              <div className="LocationNameIcon">
                <FaLocationDot style={{ color: "#ea4335" }} /><span>{HotelDes.city}</span>
              </div>
              <div className="HotelStarRate">
                {Array.from({ length: HotelDes.stars }, (_, index) => (
                  <IoMdStar key={index} />
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
              <h3>Facilities</h3>
            </div>
            <div className="Featurecontent">
              {HotelDes.features && HotelDes.features.length > 0 ? (
                <div className='feat'>
                  <div className="FeatureIcons">
                    {HotelDes.features.includes('Restaurant') && <IoFastFoodOutline style={{ fontSize: "1.6rem",color:'orangered' }} />}
                    {HotelDes.features.includes('Bar/lounge') && <IoBeerOutline style={{ fontSize: "1.6rem",color:'lawngreen' }} />}
                    {HotelDes.features.includes('Air condition') && <MdHeatPump style={{ fontSize: "1.6rem",color:'orange' }} />}
                    {HotelDes.features.includes('swimming pool') && <FaSwimmer style={{ fontSize: "1.6rem",color:'lightblue' }} />}
                    {HotelDes.features.includes('car park') && <FaCar style={{ fontSize: "1.6rem",color:"red" }} />}
                    {HotelDes.features.includes('wifi') && <IoWifiOutline  style={{ fontSize: "1.6rem",color:"lightgreen" }} />}
                  </div>
                  <div className="FeatureNames">
                    {HotelDes.features.map((feature, index) => (
                      <div className="Featureicon" key={index}>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p>No features available</p>
              )}
            </div>
          </div>

          <div className="HotelAvailableRooms">
            <div className="AvailbleTitle">
              <h3>Available Rooms</h3>
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
                      <p>RoomNumber: {room.Number}</p>
                    </div>
                    <div className="AvailRoomPriceBookBtn">
                      <p>₦{room.price}/night</p>
                      <button onClick={() => handleBookRoom(room.id)}>Book Now</button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No available rooms</p>
              )}
            </div>
          </div>

          {/* Booking Modal */}
          <Modal
            visible={isBookingModalVisible}
            onCancel={handleBookingModalVisibility}
            footer={null}
          >
            <Bookings
              bookingData={bookingData}
              setBookingData={setBookingData}
            />
          </Modal>

        </>
      )}
    </div>
    </div>
   
  );

};

export default HotelDescription;
