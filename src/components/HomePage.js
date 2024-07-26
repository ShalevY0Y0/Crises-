import React from 'react';
import './HomePage.css';
import evacuLogo from './evacu_logo.jpg'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1>Welcome to EvacU</h1>
      <img src={evacuLogo} alt="Evacu Logo" className="logo" />
      <div className="options">
        <div
          className="option"
          onMouseEnter={() => document.getElementById('host-options').style.display = 'flex'}
          onMouseLeave={() => document.getElementById('host-options').style.display = 'none'}
        >
          <h2>Host</h2>
          <div id="host-options" className="hidden-options">
            <button onClick={() => navigate('/login?role=host')}>Login</button>
            <button onClick={() => navigate('/signup?role=host')}>Sign Up</button>
          </div>
        </div>
        <div
          className="option"
          onMouseEnter={() => document.getElementById('guest-options').style.display = 'flex'}
          onMouseLeave={() => document.getElementById('guest-options').style.display = 'none'}
        >
          <h2>Guest</h2>
          <div id="guest-options" className="hidden-options">
            <button onClick={() => navigate('/login?role=guest')}>Login</button>
            <button onClick={() => navigate('/signup?role=guest')}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
