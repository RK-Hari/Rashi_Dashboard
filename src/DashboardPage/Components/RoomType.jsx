import '../Styles/RoomType.css';
import React, { useState } from 'react';

const RoomCard = () => {
  // Dummy data for multiple room types and rooms under each type
  const [roomTypes, setRoomTypes] = useState([
    {
      id: 1,
      type: 'Type 1',
      rooms: [
        { roomNumber: 101, amenitiesCount: 2, occupancyCount: 2 },
        { roomNumber: 102, amenitiesCount: 2, occupancyCount: 3 },
        { roomNumber: 103, amenitiesCount: 1, occupancyCount: 4 },
      ],
    },
    {
      id: 2,
      type: 'Type 2',
      rooms: [
        { roomNumber: 201, amenitiesCount: 3, occupancyCount: 2 },
        { roomNumber: 202, amenitiesCount: 1, occupancyCount: 4 },
      ],
    },
  ]);

  const [isOpen, setIsOpen] = useState({});
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(1);
  const [bed, setBed] = useState(1);

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

  const handleBedChange = (value) => {
    if (bed + value >= 0) {
      setBed(bed + value);
    }
  };

  // Toggle dropdown for specific room type
  const toggleDropdown = (typeId) => {
    setIsOpen((prevOpen) => ({
      ...prevOpen,
      [typeId]: !prevOpen[typeId],
    }));
  };

  return (
    <div className="room-card">
      {roomTypes.map((roomType) => (
        <div key={roomType.id} className="room-type-container"> {/* Added class */}
          <div className="room-header">
            <div className="room-type">
              <h3>
                {roomType.type} | <span className="rooms-available">{roomType.rooms.length} Rooms Available</span>
              </h3>
              <p>Amenities</p>
              <div className="amenities">
                {/* Display sample icons for amenities */}
                <span>🛁</span>
                <span>♨</span>
              </div>
            </div>
            <div className="room-occupancy">
              <p>Max Occupancy</p>
              <div className="occupancy-icons">
                {/* Display sample icons for occupancy */}
                <span>👤👤</span>
                <span>🙂</span>
              </div>
            </div>
            <button className="dropdown-button" onClick={() => toggleDropdown(roomType.id)}>
              {isOpen[roomType.id] ? '↑' : '↓'}
              {/* {isOpen[roomType.id] ? '👆' : '👇'} */}
            </button>
          </div>

          {/* Only show rooms list when the dropdown is open */}
          {isOpen[roomType.id] && (
            <div className="room-details">
              {roomType.rooms.map((room) => (
                <div key={room.roomNumber} className="single-room-details">
                  <p>Room {room.roomNumber}</p>
                  <div className="occupant-controls">
                    <div className="Room-counter">
                      <button onClick={() => handleAdultChange(-1)}>-</button>
                      <span>Adults</span>
                      <button onClick={() => handleAdultChange(1)}>+</button>
                    </div>
                    <div className="Room-count">{adults}</div>

                    <div className="Room-counter">
                      <button onClick={() => handleKidChange(-1)}>-</button>
                      <span>Kids</span>
                      <button onClick={() => handleKidChange(1)}>+</button>
                    </div>
                    <div className="Room-count">{kids}</div>

                    <div className="Room-counter">
                      <button onClick={() => handleBedChange(-1)}>-</button>
                      <span>Beds</span>
                      <button onClick={() => handleBedChange(1)}>+</button>
                    </div>
                    <div className="Room-count">{bed}</div>
                  </div>
                  <div className="meal-plans">
                    <label>
                      <input type="radio" name={`meal-plan-${room.roomNumber}`} value="AP" /> AP
                    </label>
                    <label>
                      <input type="radio" name={`meal-plan-${room.roomNumber}`} value="CP" /> CP
                    </label>
                    <label>
                      <input type="radio" name={`meal-plan-${room.roomNumber}`} value="MCP" /> MCP
                    </label>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RoomCard;