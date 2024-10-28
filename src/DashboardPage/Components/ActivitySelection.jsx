import React, { useState } from 'react';
import '../Styles/ActivitySelection.css'; // Custom CSS for styling

const ActivitySelection = () => {
  const [activities, setActivities] = useState([0, 0, 0, 0, 0]); // Initial activity counts

  const handleIncrement = (index) => {
    const newActivities = [...activities];
    newActivities[index] += 1;
    setActivities(newActivities);
  };

  const handleDecrement = (index) => {
    const newActivities = [...activities];
    if (newActivities[index] > 0) {
      newActivities[index] -= 1;
    }
    setActivities(newActivities);
  };

  return (
    <div className="activity-container">
      <div className="activity-H3">Activity</div>
      <div className="activity-cards">
        {activities.map((count, index) => (
            <div className='Activity-Placer'>
          <div key={index} className="activity-card">
            {/* {index < 2 ? <div className="checkmark">✔</div> : null} */}
          </div>
            <div className="ACTcounter">
              <button onClick={() => handleDecrement(index)}>-</button>
              <span>{count}</span>
              <button onClick={() => handleIncrement(index)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitySelection;