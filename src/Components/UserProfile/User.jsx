import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loading';
import { useSelector } from 'react-redux';
import './User.css'
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineInboxIn } from "react-icons/hi";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";

const User = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const userToken = useSelector((state) => state.mySlice.userToken);
  const user = useSelector((state) => state.mySlice.user);

  const Url = 'https://tour-haven-application.vercel.app/api/v1/users/get-one-user';
  const headers = {
    Authorization: `Bearer ${userToken}`,
  };

  useEffect(() => {
    const handleGetUser = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(Url, { headers });
        setUserData(response.data.details);
        setIsLoading(false);
      } catch (error) {
        console.log('Error:', error);
        setIsLoading(false);
      }
    };
    
    if (user) {
      handleGetUser();
    }
  }, [user, userToken]);

  return (
    <div className='UserBody'>
      {isLoading ? (
        <Loader />
      ) : userData ? (
        <>
          <div className="UserContainerHold">
            <div className="UserMenu">
              <div className="UserMenuHeader">
                <div className="UserProfileImage"></div>
                <div className="NameofUserHold">
                  <h3>{userData.name}</h3>
                </div>
              </div>
              <div className="UserSettings">
                <h3>Settings</h3>
              </div>
            </div>
            <div className="UserHeader">
              <div className="UserHeaderTitle">
                <h4>Personal Bookings</h4>
              </div>
              <div className="UserActiveContiner">
                <div className="AllBtn">
                  <BsThreeDots />All
                </div>
                <div className="ActiveBtn">
                  <HiOutlineInboxIn />Active
                </div>
                <div className="AcceptedBtn">
                  <FaRegCheckCircle /> Accepted
                </div>
                <div className="DeclinedBtn">
                  <IoWarningOutline />Declined
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Failed to load user data.</p>
      )}
    </div>
  );
};

export default User;
