import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../Styles/Verification.css';
import axios from 'axios';

const Verification = () => {
  const showAlert = () => {
    Swal.fire({
      title: 'Member has opted for RCI',
      text: 'Kindly contact support',
      icon: 'warning',
      customClass: {
        title: 'swal-title',
        htmlContainer: 'swal-text',
        confirmButton: 'swal-confirm-btn'
      },
      confirmButtonText: 'OK'
    });
  };

  const [selectedOption, setSelectedOption] = useState('Phone Number');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [rashi, setRashi] = useState('easi');

  const checkRashi = () => {
    if (rashi !== 'rashi') {
      showAlert();
    }
  };

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
    setErrorMessage('');
    setPhoneNumber(''); // Reset phone number when switching options
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    const phoneRegex = /^[0-9\b]+$/;

    if (value === '' || phoneRegex.test(value)) {
      setPhoneNumber(value);
      if (selectedOption === 'Phone Number' && value.length < 10) {
        setErrorMessage('Phone number must contain at least 10 digits.');
      } else if (selectedOption === 'Member ID' && value.length !== 16) {
        setErrorMessage('Member ID must contain exactly 16 digits.');
      } else {
        setErrorMessage('');
      }
    }
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    const isValid = 
      (selectedOption === 'Phone Number' && phoneNumber.length === 10) ||
      (selectedOption === 'Member ID' && phoneNumber.length === 16);
    
    if (!isValid) {
      alert(`Please enter a valid ${selectedOption === 'Phone Number' ? '10' : '16'}-digit ${selectedOption}.`);
      return;
    }

    const NumberDetails = {
      call_type: 1,
      call: '9207',
      reg_number: phoneNumber,
      number_type: selectedOption === 'Phone Number' ? 'phn_number' : 'card_id'
    };

    try {
      const numresponse = await axios.post('https://krushika.org/demo/sampath/apitest.php', NumberDetails);
      console.log(phoneNumber);
      console.log(numresponse);
      alert(`OTP sent successfully for ${selectedOption}!`);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  return (
    <div className='Verfication-container'>
      <div className='Verification-header'>Member Verification</div>

      <div className='Verification-input-container'>
        <div>
          <input
            placeholder={`Enter ${selectedOption}`}
            className={`Verification-input ${
              phoneNumber.length === 0
                ? '' // No class if there's no input
                : selectedOption === 'Phone Number'
                ? phoneNumber.length === 10 ? 'input-success' : 'input-error' // Green if 10 digits, red otherwise
                : phoneNumber.length === 16 ? 'input-success' : 'input-error' // Green if 16 digits, red otherwise
            }`}
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            maxLength={selectedOption === 'Phone Number' ? 10 : 16} // Set max length based on selection
          />
          <button onClick={handleSendOtp}>Send OTP</button>
        </div>

        <div>
          <input
            placeholder='Enter OTP'
            className='Verification-input'
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button>Verify</button>
        </div>
      </div>

      <div className='Verification-checkbox-container'>
        <div className='Verification-checkbox-1'>
          <div className='Verfication-checkbox-sub'>
            <div className='Verfifcation-checkbox-text'>Phone Number</div>
            <input
              type='checkbox'
              className='verification-checkbox'
              checked={selectedOption === 'Phone Number'}
              onChange={() => handleCheckboxChange('Phone Number')}
            />
          </div>
          <div className='Verfication-checkbox-sub'>
            <div className='Verfifcation-checkbox-text'>Member ID</div>
            <input
              type='checkbox'
              className='verification-checkbox'
              checked={selectedOption === 'Member ID'}
              onChange={() => handleCheckboxChange('Member ID')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
