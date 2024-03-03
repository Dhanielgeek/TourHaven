import React, { useState } from 'react';
import './Booking.css';
import { format } from 'date-fns';

const Bookings = () => {
  const [checkinDate, setCheckinDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [checkoutDate, setCheckoutDate] = useState(format(new Date(), 'yyyy-MM-dd'));

  const handleCheckinDateChange = (e) => {
    setCheckinDate(e.target.value);
  };

  const handleCheckoutDateChange = (e) => {
    setCheckoutDate(e.target.value);
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
            <input type="text" />
          </div>
          <div className="BookingEmail">
            <label htmlFor="">Email <span className="red-asterisk">*</span></label>
            <input type="email" />
          </div>
          <div className="BookingNumber">
            <label htmlFor="">PhoneNumber <span className="red-asterisk">*</span></label>
            <input type="text" />
          </div>
          <div className="BookingCheckinDate">
            <label htmlFor="">Check-in date <span className="red-asterisk">*</span></label>
            <input
              type="date"
              value={checkinDate}
              onChange={handleCheckinDateChange}
              style={{ fontSize: '1.2rem', color: 'grey' }}
            />
          </div>
          <div className="BookingCheckoutDate">
            <label htmlFor="">Check-out date <span className="red-asterisk">*</span></label>
            <input
              type="date"
              value={checkoutDate}
              onChange={handleCheckoutDateChange}
              style={{ fontSize: '1.2rem', color: 'grey' }}
            />
          </div>
          <div className="BookingSelectedRoom">
            <label htmlFor="">Selected Room</label>
          </div>
          <div className="BookingBtnToPayment">
            <button>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
