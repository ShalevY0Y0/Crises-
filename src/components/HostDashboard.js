import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HostDashboard.css';

const HostDashboard = () => {
  const [hostInfo, setHostInfo] = useState({});
  const [preferences, setPreferences] = useState({
    maxGuests: '',
    location: '',
    requirements: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch host information from the backend
    // For example purposes, using mock data
    setHostInfo({
      name: 'Noam Shtrahman',
      email: 'john.doe@example.com',
      profilePicture: 'https://pixabay.com/photos/young-man-portrait-beard-young-man-1281282/'
    });
  }, []);

  const handleChange = (e) => {
    setPreferences({
      ...preferences,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save preferences logic here
    alert('Preferences saved successfully!');
  };

  return (
    <div className="host-dashboard">
      <div className="welcome-section">
        <img src={hostInfo.profilePicture} alt="Profile" className="profile-picture" />
        <h2>Welcome, {hostInfo.name}!</h2>
        <p>We're glad to have you as a host. Let's set your preferences to help you find the perfect guests.</p>
      </div>
      <div className="preferences-section">
        <h3>Set Your Hosting Preferences</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Maximum Number of Guests:
            <input
              type="number"
              name="maxGuests"
              value={preferences.maxGuests}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={preferences.location}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Requirements:
            <textarea
              name="requirements"
              value={preferences.requirements}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Save Preferences</button>
        </form>
      </div>
    </div>
  );
};

export default HostDashboard;
