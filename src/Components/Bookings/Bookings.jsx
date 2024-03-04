import React, { useState } from 'react';
import './Booking.css';
import { format } from 'date-fns';

const Bookings = ({ bookingData, setBookingData, handleConfirmBooking }) => {
  const { guestName, NoOfGuest,email, checkIn, checkOut, checkInTime, checkOutTime } = bookingData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckinDateChange = (e) => {
    const value = e.target.value;
    setBookingData(prevData => ({
      ...prevData,
      checkIn: value,
    }));
  };

  const handleCheckoutDateChange = (e) => {
    const value = e.target.value;
    setBookingData(prevData => ({
      ...prevData,
      checkOut: value,
    }));
  };
  const handleCheckinTimeChange = (e) => {
    const value = e.target.value;
    const [hours, minutes] = value.split(':').map(Number);
    
    const checkOutHours = (hours + 24) % 24;
    
    const checkOutTime = `${checkOutHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  
    setBookingData(prevData => ({
      ...prevData,
      checkInTime: value,
      checkOutTime: checkOutTime,
    }));
  };
  

  const handleCheckoutTimeChange = (e) => {
    const value = e.target.value;
    setBookingData(prevData => ({
      ...prevData,
      checkOutTime: value,
    }));
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
            <input type="number" name="number" value={NoOfGuest} onChange={handleInputChange} />
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
