// src/components/HostForm.js
import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <h2>Host Registration</h2>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
       city:
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
      </label>
      <label>
        Max Guests:
        <input type="number" name="maxGuests" value={formData.maxGuests} onChange={handleChange} required />
      </label>
      <label>
        Requirements:
        <textarea name="requirements" value={formData.requirements} onChange={handleChange} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default HostForm;
