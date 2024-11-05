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

// import React, { useEffect, useState } from 'react';
// import '../Styles/UpcomingBookings.css';

// const UpcomingBookings = () => {
//   const [bookingData, setBookingData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch data from the API endpoint
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://krushika.org/demo/sampath/apitest.php', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             call_type: 1,
//             call: 7632,
//             purchase_id: "x",  
//             number_type: "card_id",
//           }),
//         });

//         if (!response.ok) {
//           throw new Error(`Server error: ${response.status}`);
//         }
        
//         const data = await response.json();
//         console.log(data); // Log full data response for debugging

//         if (data.status === 'success') {
//           setBookingData(data);
//         } else {
//           setError(data.msg || 'An error occurred');
//         }
//       } catch (err) {
//         console.error('Error fetching booking data:', err);
//         setError('Failed to fetch booking data');
//       }
//     };
    
//     fetchData();
//   }, []);

//   if (error) {
//     return <div className="error-message">{error}</div>;
//   }

//   if (!bookingData) {
//     return <div>Loading...</div>;
//   }

//   const activePackage = bookingData.active_packages && bookingData.active_packages.length > 0
//     ? bookingData.active_packages[0]
//     : null;

//   const upcomingBooking = activePackage && activePackage.upcoming_bookings && activePackage.upcoming_bookings.length > 0
//     ? activePackage.upcoming_bookings[0]
//     : null;

//   if (!upcomingBooking) {
//     return <div>No upcoming bookings available.</div>;
//   }

//   return (
//     <div className="upcoming-bookings-container">
//       <div className="upcoming-bookings-header">
//         <div className='upcoming-bookings-header-text'>Upcoming Bookings</div>
//         <div className="upcoming-bookings-next-page">Next Page &gt;</div>
//       </div>
      
//       <div className="upcoming-bookings-body">
//         <div className="upcoming-bookings-details">
//           <p><strong>Accommodation</strong></p>
//           <p><span>Booking ID :</span> {upcomingBooking.booking_id}</p>
//           <p><span>Status :</span> {upcomingBooking.status}</p>
//         </div>
        
//         <div className="upcoming-bookings-info">
//           <p><span>Check In :</span> {new Date(upcomingBooking.checkin_date).toDateString()}</p>
//           <p><span>Check Out :</span> {new Date(upcomingBooking.checkout_date).toDateString()}</p>
//         </div>
//       </div>
      
//       <div className="upcoming-bookings-footer">
//         <div className='upcoming-bookings-bottom-container'>
//           <div className="upcoming-bookings-points">
//             {activePackage.current_remaining_points} Points
//           </div>
//           <div className="upcoming-bookings-actions">
//             <button className="upcoming-bookings-cancel">Cancel</button>
//             <button className="upcoming-bookings-confirm">Confirm</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpcomingBookings;
