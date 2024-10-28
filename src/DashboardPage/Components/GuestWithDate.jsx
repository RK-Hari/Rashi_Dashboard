import React, { useState } from 'react';
import '../Styles/GuestWithDate.css';

const GuestListDate = () => {
  // States for keeping track of number of adults and kids
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(1);

  // Functions to handle increment and decrement for adults and kids
  const handleAdultChange = (value) => {
    if (adults + value >= 0) {
      setAdults(adults + value);
    }
  };

  const handleKidChange = (value) => {
    if (kids + value >= 0) {
      setKids(kids + value);
    }
  };

  // Function to handle confirm button click
  const handleConfirm = () => {
    alert(`Confirmed ${adults} adults and ${kids} kids.`);
  };

  return (
    <div className="guestWithDate-list">
      <div className='GuestWithDate-H3'>Guest List</div>
      <div className="guestWithDate-counter-group">
        {/* Adult Counter */}
        <div className='guestWithDate-container'>
        <div className="guestWithDate-counter">
          <button onClick={() => handleAdultChange(-1)}>-</button>
          <span>Adults</span>
          <button onClick={() => handleAdultChange(1)}>+</button>
        </div>
        <div className="guestWithDate-count">{adults}</div>
        </div>
        {/* Kid Counter */}
        <div className='guestWithDate-container'>
        <div className="guestWithDate-counter">
          <button onClick={() => handleKidChange(-1)}>-</button>
          <span>Kids</span>
          <button onClick={() => handleKidChange(1)}>+</button>
        </div>
        <div className="guestWithDate-count">{kids}</div>
        </div>

        {/* {date} */}
        <div className='guestWithDate-container'>
        <div className="guestWithDate-counter">
          <span className='Date-span'>Date</span>
        </div>
        <div className="span-date-counter"><div className='date-text-span'>10-12-2024 - 12-01-2025</div></div>
        </div>
        
      </div>
      <div className='guestWithDate-GuestList-edit'>
        <button className='guestWithDate-Edit-button'>Edit</button>
      </div>
    </div>
  );
};

export default GuestListDate;