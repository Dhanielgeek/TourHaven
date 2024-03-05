import React, { useState } from 'react';
import './Booking.css';
import { format } from 'date-fns';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Bookings = ({ bookingData, setBookingData }) => {
  const { guestName, NoOfGuest, email, checkIn, checkOut, checkInTime, checkOutTime } = bookingData
  const userToken = useSelector((state) => state.mySlice.userToken);

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
      const response = await axios.post(BookingUrl, Bookdata, { headers });
      console.log(response.data);
      const { AmountToPay, Name, bookingId } = response.data.data;
      console.log(AmountToPay, Name, bookingId);
      Swal.fire({
        icon: 'success',
        title: 'Booking Successful',
        text: 'Your booking has been confirmed!',
      });
      payKorapay(AmountToPay, Name, bookingId);
    } catch (error) {
      const errorMessage = error.response ? error.response.data.error : 'An error occurred';
      Swal.fire({
        icon: 'error',
        title: 'Booking Failed',
        text: errorMessage,
      });
      console.log(errorMessage);
    }
  };
  
  const payKorapay = (AmountToPay, Name, bookingId) => {
    const Keys = `key${Math.random()}`;
     
  
    window.Korapay.initialize({
      key: "pk_test_eR5xsWZRG1XfPVe8JvDJyHQWR1nieyBU2DaE5dBm",
      reference: Keys,
      amount: AmountToPay, 
      currency: "NGN",
      customer: {
        name: Name,
        email: "daniel@gmail.com"
      },
      onClose: function () {
        // Handle when modal is closed
      },
      onSuccess: function (data) {
        console.log(data);
        // Handle when payment is successful
        HandleCheckOutPayment(bookingId);
      },
      onFailed: function (data) {
        // Handle when payment fails
      }
    });
  };
  
  const HandleCheckOutPayment = async (bookingId) => {
    console.log('bookings id',bookingId);
    try {
      const response = await axios.put(`https://tour-haven-application.vercel.app/api/v1/users/bookings-checkout/${bookingId}`, {}, { headers });
      Swal.fire({
        icon: 'success',
        title: 'Payment Successful',
        text: response.data.message
      });
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
            <button onClick={handleConfirmBooking}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
