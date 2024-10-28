import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../Styles/Verification.css';

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

  // State to manage which option is selected, OTP, and phone number
  const [selectedOption, setSelectedOption] = useState('Phone Number');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [rashi,setRashi] = useState('easi');

  const checkRashi =()=> {
    if(rashi !== 'rashi'){
      showAlert();
    }
  }

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
    setErrorMessage(''); 
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    const phoneRegex = /^[0-9\b]+$/;

    if (value === '' || phoneRegex.test(value)) {
      setPhoneNumber(value);
      if (value.length < 10) {
        setErrorMessage('Phone number must contain at least 10 digits.');
      } else {
        setErrorMessage('');
      }
    }
  };

  const handleSendOtp = () => {
    if (phoneNumber.length < 10) {
      alert('Please enter a valid 10-digit phone number.');
    } else {
      alert('OTP sent successfully!');
      checkRashi();
    }
  };

  return (
    <div className='Verfication-container'>
      <div className='Verification-header'>
        Member Verification
      </div>

      {/* Input field for Phone Number or Member ID */}
      <div className='Verification-input-container'>
      <div>
          {selectedOption === 'Phone Number' ? (
            <>
              <input
                placeholder={`Enter ${selectedOption}`}
                className={`Verification-input ${
                  phoneNumber.length === 0
                    ? '' // No class applied if there's no input
                    : phoneNumber.length < 10
                    ? 'input-error' // Red if less than 10 digits
                    : 'input-success' // Green if valid
                }`}
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                maxLength={10} // Limit input to 10 digits
              />
            </>
          ) : (
            <input
              placeholder={`Enter ${selectedOption}`}
              className='Verification-input'
            />
          )}
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
