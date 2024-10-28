import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import '../Styles/CustomDatePicker.css'; // Custom CSS for styling

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [availability, setAvailability] = useState(null);

  // Minimum date: October 9, 2024
  const minDate = moment('2024-10-09').toDate();

  // Function to check availability on button click
  const handleCheckAvailability = async () => {
    if (selectedDate) {
      const formattedDate = moment(selectedDate).format('YYYY-MM-DD');
      // Replace with your actual API call
      const response = await fetch(`/api/check-availability?date=${formattedDate}`);
      const data = await response.json();
      setAvailability(data.available ? 'Available' : 'Not Available');
    } else {
      alert('Please select a date first');
    }
  };

  return (
    <div className="calendar-container">
      <div className="date-picker-section">
        <div className='date-picker-header'>Select The Date</div>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          minDate={minDate}
          inline
          dateFormat="dd-MM-yyyy"
        />
      </div>

      <div className='calender-div-2'>
        {availability === 'Not Available' && (
          <div className='Avaliblity-msg-box'>
            <img src='' alt='Logo' />
            <h1>Not Available</h1>
          </div>
        )}
        <button className="availability-button" onClick={handleCheckAvailability}>
          Check Availability
        </button>
        {availability && <p className='availability-availability'>{availability}</p>}
        </div>


    </div>
  );
};

export default CustomDatePicker;