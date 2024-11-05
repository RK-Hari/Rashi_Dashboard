import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/ActivitySelection.css';

const ActivitySelection = () => {
  const [activities, setActivities] = useState([]); // Store fetched activities
  const [activityCounts, setActivityCounts] = useState([]); // Track selection counts for each activity

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.post('https://krushika.org/demo/sampath/apitest.php', {
          call_type: 1,
          call: 1430,
          purchase_id: "x",
          property_id: "x",
          checkin_date: "yyyy-mm-dd 00:00:00"
        });

        if (response.data.status === "success" && response.data.activities) {
          setActivities(response.data.activities);
          setActivityCounts(new Array(response.data.activities.length).fill(0)); // Initialize counts for each activity
        } else {
          console.error('Failed to fetch activities.');
        }
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, []);

  const handleIncrement = (index) => {
    const newActivityCounts = [...activityCounts];
    newActivityCounts[index] += 1;
    setActivityCounts(newActivityCounts);
    logActivityCounts(newActivityCounts);
  };

  const handleDecrement = (index) => {
    const newActivityCounts = [...activityCounts];
    if (newActivityCounts[index] > 0) {
      newActivityCounts[index] -= 1;
      setActivityCounts(newActivityCounts);
      logActivityCounts(newActivityCounts);
    }
  };

  // Function to log activity names and their counts
  const logActivityCounts = (counts) => {
    console.log("Selected Activity Counts:");
    activities.forEach((activity, index) => {
      console.log(`Activity: ${activity.name}, Count: ${counts[index]}`);
    });
  };

  return (
    <div className="activity-container">
      <div className="activity-H3">Activity</div>
      <div className="activity-cards">
        {activities.map((activity, index) => (
          <div key={activity.id} className="Activity-Placer">
            <div className="activity-card">
            </div>
            <div className='ActivityDescription'>
                <p>{activity.name} <br/>
                 ({activity.points} Points)</p>
            </div>
            <div className="ACTcounter">
              <button onClick={() => handleDecrement(index)}>-</button>
              <span>{activityCounts[index]}</span>
              <button onClick={() => handleIncrement(index)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitySelection;