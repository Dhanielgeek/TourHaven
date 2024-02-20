import React, { useState } from 'react';
import { IoBed } from 'react-icons/io5';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { format } from 'date-fns';
import './Page.css';

const Search = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleDateChange = (event) => {
    setSelectedDate(new Date(event.target.value))
  }

  return (
    <div className="SearchBody">
      <div className="SearchDestination">
        <div className="InputfileDestination">
          <IoBed style={{ fontSize: '1.8rem', color: 'grey' }} />
          <input type="text" placeholder="Where are you going?" />
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
        <button>Search</button>
      </div>
    </div>
  )
}

export default Search;
