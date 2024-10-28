import React from 'react'
import '../Styles/MemberDetailsCard.css';

import dashboardmonitor from '../Assets/dashboard-monitor.png';

const MemberDetailsCard = () => {
  return (
    <div className='membercard-container'>
      <div className='member-card'>
        <div className='member-card-sub-container'>
            <div className='memeber-card-name'>Hi,
            <br/>John Doe</div>
            <div className='member-card-resort-and-active'>
            <div className='member-card-resort'>Shilhandra</div>
            <div className='member-card-active-status'>
            <span className="member-card-active-dot"></span>
              Active
            </div>
            </div>
        </div>
      </div>

        <div className='member-card-bottom-container'>
            <img src={dashboardmonitor} alt="" className='membercard-bottom-icon'/>
            <span>Dashboard</span>
        </div>

        <div className='membercard-container-checkin'>
            <button className='membercard-container-checkin'>Check-In</button>
        </div>
    </div>
  )
}

export default MemberDetailsCard
