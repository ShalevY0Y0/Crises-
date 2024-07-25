import React, { useState } from 'react';
import './HostForm.css';

const HostForm = ({ addHost }) => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    maxGuests: 1,
    requirements: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHost(formData);
    setFormData({
      name: '',
      city: '',
      maxGuests: 1,
      requirements: ''
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="form-heading">Host Registration</h2>
        <label className="form-label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <label className="form-label">
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <label className="form-label">
          Max Guests:
          <input
            type="number"
            name="maxGuests"
            value={formData.maxGuests}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <label className="form-label">
          Requirements:
          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            className="form-textarea"
            required
          />
        </label>
        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default HostForm;
