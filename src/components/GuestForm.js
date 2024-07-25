import React, { useState } from 'react';
import './GuestForm.css';

const GuestForm = ({ addGuest }) => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
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
    addGuest(formData);
    setFormData({
      name: '',
      city: '',
      requirements: ''
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="form-heading">Guest Registration</h2>
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

export default GuestForm;
