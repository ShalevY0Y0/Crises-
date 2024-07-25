// src/components/GuestForm.js
import React, { useState } from 'react';

const GuestForm = ({ addGuest }) => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    guests: 1,
    needs: ''
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
      guests: 1,
      needs: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Guest Registration</h2>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        city:
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
      </label>
      <label>
        Number of Guests:
        <input type="number" name="guests" value={formData.guests} onChange={handleChange} required />
      </label>
      <label>
        Needs:
        <textarea name="needs" value={formData.needs} onChange={handleChange} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default GuestForm;
