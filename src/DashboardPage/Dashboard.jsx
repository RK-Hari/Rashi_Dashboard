import React from 'react';

import MemberDetailsCard from './Components/MemberDetailsCard';
import Verification from './Components/Verification';
import UpcomingBookings from './Components/UpcomingBookings';
import ClientMembershipCard from './Components/MemberDetails';
import BookingHistory from './Components/BookingHistory';
import GuestList from './Components/GuestList';
import CustomDatePicker from './Components/CustomDatePicker';
import ActivitySelection from './Components/ActivitySelection';
import GuestListDate from './Components/GuestWithDate';
import CartComponent from './Components/CartComponent';
import RoomCard from './Components/RoomType';

import './Dashboard.css';


const Dashboard = () => {
  return (
    <div className='dashboard-container'>
        <div className='dashboard-1'>
            <MemberDetailsCard/>
        </div>
        <div className='dashboard-2'>
            <Verification/>
            <GuestList/>        
            <GuestListDate/>
            <RoomCard/>
            <UpcomingBookings/>
            <CustomDatePicker/>
            <BookingHistory/>  
            <ActivitySelection/> 
        </div>
        <div className='dashboard-3'>
          <ClientMembershipCard/>
          <CartComponent/>
        </div>
    </div>
  )
}

export default Dashboard;
