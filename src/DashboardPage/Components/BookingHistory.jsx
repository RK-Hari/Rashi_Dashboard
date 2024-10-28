import React, { useState } from 'react';
import '../Styles/BookingHistory.css';

const Booking = ({ booking }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='member-history-booking-container'>
      {/* Booking Summary */}
      <div className='member-history-booking-summary' onClick={() => setIsOpen(!isOpen)}>
        <div className='member-history-hotel-name'>{booking.hotelName}</div>
        <div className='member-history-checkin-date'>{booking.date}</div>
        <div className='member-history-points-spent'>{booking.points} Points</div>
        <div className={`member-history-dropdown-icon ${isOpen ? 'open' : ''}`}>v</div>
      </div>

      {isOpen && (
        <div className="member-history-upcoming-bookings-container">
          
          <div className="member-history-upcoming-bookings-body">
            <div className="member-history-upcoming-bookings-details">
              <p><strong>Accommodation</strong></p>
              <p><span>Resort :</span> {booking.hotelName}</p>
              <p><span>Room Type :</span> {booking.roomDetails}</p>
            </div>
            
            <div className="member-history-upcoming-bookings-info">
              <p className='member-history-upcoming-bookings-adult-count'>{booking.guests}</p>
              <p><span>Check In :</span> {booking.checkIn}</p>
              <p><span>Check Out :</span> {booking.checkOut}</p>
            </div>
          </div>
          
          <div className="member-history-upcoming-bookings-footer">
            <div className="member-history-upcoming-bookings-activities">
              <p><strong>Activity</strong></p>
              <div className="member-history-upcoming-bookings-activity-items">
                {booking.activities.map((activity, index) => (
                  <div key={index} className="member-history-activity-item">
                    {activity.name} <span>x{activity.count}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className='member-history-upcoming-bookings-bottom-container'>
              <div className="member-history-upcoming-bookings-points">
                {booking.points} Points
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const BookingHistory = () => {
  const bookings = [
    {
      hotelName: 'Shilhadhara',
      date: 'Tue 08 Oct 2024',
      roomDetails: 'Chariot Room',
      guests: '3x Adult 1x Kid',
      checkIn: 'Tue 08 Oct 2024',
      checkOut: 'Fri 09 Oct 2024',
      activities: [
        { name: 'Paint Ball', count: 2 },
        { name: 'Tug Of War', count: 2 },
        { name: 'Quad', count: 2 },
        { name: 'Zip Line', count: 2 },
      ],
      points: 459,
    },
    {
      hotelName: 'Shilhadhara',
      date: 'Tue 08 Oct 2024',
      roomDetails: 'Deluxe Room',
      guests: '2x Adult 2x Kid',
      checkIn: 'Tue 08 Oct 2024',
      checkOut: 'Thu 09 Oct 2024',
      activities: [
        { name: 'Paint Ball', count: 1 },
        { name: 'Hiking', count: 1 },
      ],
      points: 350,
    },
  ];

  return (
    <div className='member-history-booking-history-container'>
      <div className='member-history-heading-text'>Member History</div>
      <div className='member-history-booking-summary-heading'>
      <div className='member-history-hotel-heading-name'>Name</div>
      <div className='member-history-checkin-heading-date'>Date</div>
      <div className='member-history-points-heading-spent'>Points</div>
      </div>
      {bookings.map((booking, index) => (
        <Booking key={index} booking={booking} />
      ))}
    </div>
  );
};

export default BookingHistory;
