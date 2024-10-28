import React from 'react';
import '../Styles/UpcomingBookings.css';

const UpcomingBookings = () => {
  return (
    <div className="upcoming-bookings-container">
      <div className="upcoming-bookings-header">
        <div className='upcoming-bookings-heade-text'>Upcomming Bookings</div>
        <div className="upcoming-bookings-next-page">next Page &gt;</div>
      </div>
      
      <div className="upcoming-bookings-body">
        <div className="upcoming-bookings-details">
          <p><strong>Accomodation</strong></p>
          <p><span>Resort :</span> Shilhandhara</p>
          <p><span>Room Type :</span> Chariot Room</p>
        </div>
        
        <div className="upcoming-bookings-info">
          <p className='upcoming-bookings-adult-count'>3x Adult &nbsp; 1x kid</p>
          <p><span>Check In :</span> Tue 08 Oct 2024</p>
          <p><span>Check Out :</span> Fri 09 Oct 2024</p>
        </div>
      </div>
      
      <div className="upcoming-bookings-footer">
      <div className="upcoming-bookings-activities">
          <p><strong>Activity</strong></p>
          <div className="upcoming-bookings-activity-items">
            <div className="activity-item">Paint Ball <span>x2</span></div>
            <div className="activity-item">Tug Of War <span>x2</span></div>
            <div className="activity-item">Quad <span>x2</span></div>
            <div className="activity-item">Zip Line <span>x2</span></div>
          </div>
        </div>
        
        <div className='upcoming-bookings-bottom-container'>
          <div className="upcoming-bookings-points">
          459 Points
          </div>
        <div className="upcoming-bookings-actions">
          <button className="upcoming-bookings-cancel">Cancel</button>
          <button className="upcoming-bookings-confirm">Confirm</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingBookings;
