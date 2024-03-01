import React, { useState } from 'react';
import { IoBed } from 'react-icons/io5';
import { format } from 'date-fns';
import { Oval } from 'react-loader-spinner';
import axios from 'axios';
import { Modal, List, Avatar } from 'antd';
import './Page.css'
import Swal from 'sweetalert2';

const Search = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDestination, setSelectedDestination] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);


  const handleDateChange = (event) => {
    setSelectedDate(new Date(event.target.value));
  };

  const handleSelectedDestination = (e) => {
    setSelectedDestination(e.target.value);
    console.log(selectedDestination);
  };

  

  const Urlhotels = `https://tour-haven-application.vercel.app/api/v1/users/search-hotels/${selectedDestination}`;
  const UrlLoc = `https://tour-haven-application.vercel.app/api/v1/users/search-location/${selectedDestination}`;
  const data =  {search:selectedDestination}

  
  const handleSearchFunction = async () => {
    if (selectedDestination === '') {
      alert('Please enter a destination');
      return;
    }
  
    setIsLoading(true);
    try {
      // Make request to fetch hotels
      const hotelRes = await axios.get(Urlhotels, { params: data });
      console.log('Hotels:', hotelRes.data);
  
      // Make request to fetch locations
      const locRes = await axios.get(UrlLoc, { params: data });
      console.log('Locations:', locRes.data);
  
      // Set the search results in the state
      setSearchResults([...hotelRes.data.data, ...locRes.data.data]);
  
      // Open the modal
      setModalVisible(true);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = error.response ? error.response.data.error : 'An error occurred';
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
      console.log(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  
  

 

  return (
    <div className="SearchBody">
      <div className="SearchDestination">
        <div className="InputfileDestination">
          <IoBed style={{ fontSize: '1.8rem', color: 'grey' }} />
          <input
            type="text"
            placeholder="Where are you going?"
            onChange={handleSelectedDestination}
          />
        </div>
      </div>
      <div className="SearchCheck">
        <div className="DateCheck">
          <input
            type="date"
            value={format(selectedDate, 'yyyy-MM-dd')}
            onChange={handleDateChange}
            placeholder="Date"
            style={{ fontSize: '1.2rem', color: 'grey' }}
          />
        </div>
      </div>
      <div className="SearchBtn">
        <button onClick={handleSearchFunction}>
          {isLoading ? (
            <div className="Loadinghol">
              <Oval
                height={30}
                width={30}
                color="#fff"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#030303"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>
          ) : (
            <span>Search</span>
          )}
        </button>
      </div>
      <Modal
        title="Search Results"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <List
          itemLayout="horizontal"
          dataSource={searchResults}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.profileImage} />}
                title={<a href={item.profileImage}>{item.name}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Modal>
    </div>
  );
};

export default Search;
