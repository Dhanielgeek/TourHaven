import React, { useState, useEffect } from 'react';
import './Booking.css';
import { format } from 'date-fns';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {ThreeDots} from 'react-loader-spinner'

const Bookings = ({ bookingData, setBookingData }) => {
  const [success, setSuccess] = useState(false);
  const [idBooking, setidBooking] = useState(null)
  const [isLoading, setisLoading] = useState(false)
  const { guestName, NoOfGuest, email, checkIn, checkOut, checkInTime, checkOutTime } = bookingData
  const userToken = useSelector((state) => state.mySlice.userToken);
  const initialBookingData = {
    guestName: '',
    NoOfGuest: '',
    email: '',
    checkIn: '',
    checkOut: '',
    checkInTime: '',
    checkOutTime: ''
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleCheckinDateChange = (e) => {
    const value = e.target.value;
    setBookingData(prevData => ({
      ...prevData,
      checkIn: value,
    }))
  }

  const handleCheckoutDateChange = (e) => {
    const value = e.target.value;
    setBookingData(prevData => ({
      ...prevData,
      checkOut: value,
    }))
  }

  const handleCheckinTimeChange = (e) => {
    const value = e.target.value;
    const [hours, minutes] = value.split(':').map(Number)
    
    const checkOutHours = (hours + 24) % 24
    
    const checkOutTime = `${checkOutHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
  
    setBookingData(prevData => ({
      ...prevData,
      checkInTime: value,
      checkOutTime: checkOutTime,
    }))
  }

  const handleCheckoutTimeChange = (e) => {
    const value = e.target.value
    setBookingData(prevData => ({
      ...prevData,
      checkOutTime: value,
    }))
  }

  const headers = {
    Authorization : `Bearer ${userToken}`
  }
  const handleConfirmBooking = async () => {
    const BookingUrl = `https://tour-haven-application.vercel.app/api/v1/users/bookings/${bookingData.roomId}`;
    const Bookdata = bookingData;
    
    try {
     setisLoading(true) 
     const response = await axios.post(BookingUrl, Bookdata, { headers });
      console.log(response.data);
      const { AmountToPay, Name, bookingId } = response.data.data;
      setidBooking(bookingId)
      console.log(AmountToPay, Name, bookingId);
      Swal.fire({
        icon: 'success',
        title: 'Booking Successful',
        text: 'Your booking has been confirmed!',
      });
      payKorapay(AmountToPay, Name, bookingId);
      resetBookingData()
    } catch (error) {
      const errorMessage = error.response ? error.response.data.error : 'An error occurred';
      Swal.fire({
        icon: 'error',
        title: 'Booking Failed',
        text: errorMessage,
      });
      console.log(errorMessage);
    }
    finally{
      setisLoading(false)
    }
  };

  const resetBookingData = () => {
    setBookingData(initialBookingData);
  };
  
  const payKorapay = (AmountToPay, Name, bookingId) => {
    const Keys = `key${Math.random()}`;
     console.log('Kora pay with :', AmountToPay,Name,bookingId)
    
    window.Korapay.initialize({
      key: "pk_test_eR5xsWZRG1XfPVe8JvDJyHQWR1nieyBU2DaE5dBm",
      reference: Keys,
      amount: AmountToPay, 
      currency: "NGN",
      customer: {
        name: Name,
        email: "daniel@gmail.com"
      },
      onClose: function (data) {
        console.log(data);
      },
      onSuccess: function (data) {
        // console.log("on suess",data, bookingId);
        if(data.status === "success"){
          
          setSuccess(!success)
        }
      },
      onFailed: function (data) {
        console.log(data);
      }
    });
  };
  
  const HandleCheckOutPayment = async (bookingId) => {
    // console.log('bookings id',bookingId);
    try {
      const response = await axios.put(`https://tourhaven.onrender.com/api/v1/users/bookings-checkout/${bookingId}`, {}, { headers });
      if(response){
        Swal.fire({
          icon: 'success',
          title: 'Payment Successful',
          text: response.data.message
        });
      }else{
        console.log(error);
      }
      console.log(response.data);
    } catch (error) {
      const errorMessage = error.response ? error.response.data.error : 'An error occurred';
      console.log(errorMessage);
      Swal.fire({
        icon: 'error',
        title: 'Payment Failed',
        text: errorMessage
      });
    }
  };

  useEffect(()=>{
    if(success === true){
      HandleCheckOutPayment(idBooking);
    }
  },[success])
  

  return (
    <div className="BookingBody">
      <div className="BookingContainer">
        <div className="BookingHeader">
          <h3>Checkout Form</h3>
        </div>
        <div className="BookingForm">
          <div className="BookingName">
            <label htmlFor="">FullName <span className="red-asterisk">*</span></label>
            <input type="text" name="guestName" value={guestName} onChange={handleInputChange} />
          </div>
          <div className="BookingEmail">
            <label htmlFor="">Email <span className="red-asterisk">*</span></label>
            <input type="email" name="email" value={email} onChange={handleInputChange} />
          </div>
          <div className="BookingNo">
            <label htmlFor="">Number of Guest <span className="red-asterisk">*</span> </label>
            <input type="number" name="NoOfGuest" value={NoOfGuest} onChange={handleInputChange} />
          </div>
          <div className="BookingCheckinDate">
            <label htmlFor="">Check-in date <span className="red-asterisk">*</span></label>
            <input
              type="date"
              value={checkIn}
              onChange={handleCheckinDateChange}
              style={{ fontSize: '1.2rem', color: 'grey' }}
            />
          </div>
          <div className="BookingCheckoutDate">
            <label htmlFor="">Check-out date <span className="red-asterisk">*</span></label>
            <input
              type="date"
              value={checkOut}
              onChange={handleCheckoutDateChange}
              style={{ fontSize: '1.2rem', color: 'grey' }}
            />
          </div>
          <div className="BookingCheckinTime">
            <div className="rightTime">
              <label htmlFor="">Check-In Time <span className="red-asterisk">*</span></label>
              <input
                type="time"
                name="checkinTime"
                value={checkInTime}
                onChange={handleCheckinTimeChange}
              />
            </div>
            <div className="leftTime">
              <label htmlFor="">Check-Out Time <span className="red-asterisk">*</span></label>
              <input
                type="time"
                name="checkoutTime"
                value={checkOutTime}
                onChange={handleCheckoutTimeChange}
              />
            </div>
          </div>
          <div className="BookingBtnToPayment">
          <button onClick={handleConfirmBooking}>
          {isLoading ? (
            <div className="Loadinghol">
               <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#FFFF"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
            </div>
          ) : (
            <span>Confirm</span>
          )}
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
