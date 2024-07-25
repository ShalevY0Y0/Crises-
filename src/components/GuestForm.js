import React, { useState } from 'react';
import './GuestForm.css';
import axios from 'axios'

const GuestForm = ({ addGuest }) => {
  const [formData, setFormData] = useState({
    id: '',
    first_name: '',
    last_name: '',
    city: '',
    number_of_guests: 1,
    info: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendDataToBackend = async (obje) => {
    const response = await axios.post("http://127.0.0.1:5000/GuestData", {...obje})
    // The line below recieves the hosts that match this guest
    console.log(response.data)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendDataToBackend(formData);
    console.log(formData);
    addGuest(formData);
    setFormData({
      id: '',
      first_name: '',
      last_name: '',
      city: '',
      number_of_guests: 1,
      info: ''
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="form-heading">Guest Registration</h2>
        <label className="form-label">
          ID:
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <label className="form-label">
          First_Name:
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <label className="form-label">
          Last_Name:
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
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
          Number_of_Guests:
          <input
            type="number"
            name="number_of_guests"
            value={formData.number_of_guests}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <label className="form-label">
          Info:
          <textarea
            name="info"
            value={formData.info}
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
