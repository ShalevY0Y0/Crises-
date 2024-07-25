import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleHostClick = () => {
    navigate('/host');
  };

  const handleGuestClick = () => {
    navigate('/guest');
  };

  return (
    <div className="home-container">
            <img src={"evacu_logo.jpg"} style={{ width: '300px', height: '300px', marginBottom: '30px' }}/>
      <h1 className="home-heading">Welcome to EvacU
      </h1>
      <div className="options-container">
        <div className="option-card" onClick={handleHostClick}>
          <h2>Host</h2>
          <p>Provide a safe place for those in need.</p>
        </div>
        <div className="option-card" onClick={handleGuestClick}>
          <h2>Guest</h2>
          <p>Find a safe place to stay during a crisis.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
