import React, { useState } from 'react';
import '../Styles/GuestList.css';

const GuestList = () => {
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
    <div className="guest-list">
      <div className='GuestH3'>Guest List</div>
      <div className="counter-group">
        {/* Adult Counter */}
        <div className="counter">
          <button onClick={() => handleAdultChange(-1)}>-</button>
          <span>Adults</span>
          <button onClick={() => handleAdultChange(1)}>+</button>
        </div>
        <div className="count">{adults}</div>
        {/* Kid Counter */}
        <div className="counter">
          <button onClick={() => handleKidChange(-1)}>-</button>
          <span>Kids</span>
          <button onClick={() => handleKidChange(1)}>+</button>
        </div>
        <div className="count">{kids}</div>
      <button className="confirm-button" onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default GuestList;