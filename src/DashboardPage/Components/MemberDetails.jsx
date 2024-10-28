import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/MemberDetails.css'
const ClientMembershipCard = () => {
  const [cardData, setCardData] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    balance: 0,
    maxBalance: 0
  });

  useEffect(() => {
    // Replace with your actual API URL
    axios.get('https://api.example.com/cardDetails')
      .then(response => {
        // Assuming the API returns a response with these keys
        const { name, cardNumber, expiry, balance, maxBalance } = response.data;
        setCardData({ 
          name, 
          cardNumber: maskCardNumber(cardNumber), 
          expiry, 
          balance, 
          maxBalance 
        });
      })
      .catch(error => {
        console.error('Error fetching card data:', error);
      });
  }, []);

  // Function to mask card number except the last 4 digits
  const maskCardNumber = (number) => {
    return '**** **** **** ' + number.slice(-4);
  };

  return (
    <div className="card-container">
      <div className="card-content">
        <h2 className="company-name">Rashi</h2>
        <div className="card-holder">
          {/* <p>{cardData.name}</p> */}
          <p>Rahul A</p>
          {/* <p>{cardData.expiry}</p> */}
          <p>12/30</p>
        </div>
        {/* <p className="card-number">{cardData.cardNumber}</p> */}
        <p className="card-number">XXXX XXXX XXXX 3452</p>
        <div className="card-balance">
          {/* <p>{${cardData.balance}/${cardData.maxBalance}}</p> */}
          <p>2400/4500</p>
          <div className='Rashi-notify'>Rashi</div>
        </div>
      </div>

      
      <div className='Clientmembercard-container-checkin'>
            <button>Book Now</button>
        </div>


        <div className='membership-clients-details'>
  <div className='membership-clients-details-heading'>Member Info</div>
  <div className='mambership-own-details-container'>
    <div className='Membership-name-container'>
      <p className='member-name-h'>Member Name :</p>
      <p>Anirudh Rawat</p>
    </div>
    <div className='Membership-Dob-container'>
      <p className='member-Dob-h'>Date Of Birth :</p>
      <p>June 02 1999</p>
    </div>
    <div className='Membership-phone-container'>
      <p className='member-phone-h'>Phone Number :</p>
      <p>+91 9876543210</p>
    </div>
    <div className='Membership-id-container'>
      <p className='member-id-h'>Member ID :</p>
      <p>0K87H543</p>
    </div>
    <div className='Membership-validity-container'>
      <p className='member-validity-h'>Validity :</p>
      <p>May 25</p>
    </div>
    <div className='Membership-package-container'>
      <p className='member-package-h'>Package :</p>
      <p>Explore</p>
    </div>
    <div className='Membership-points-container'>
      <p className='member-points-h'>Remaining Points :</p>
      <p>750/1200</p>
    </div>
  </div>

  <div className='membership-family-heading'>Family Info</div>
  <div className='Membership-Family-members'>
    <ul>
      <li><span>Family member 01</span> : Sonali</li>
      <li><span>Family member 02</span> : Abhay</li>
      <li><span>Family member 03</span> : Sam</li>
      <li><span>Family member 04</span> : Manisha</li>
    </ul>
  </div>
</div>
    </div>
  );
};

export default ClientMembershipCard;