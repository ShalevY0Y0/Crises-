import React, { useState } from 'react';
import './HostForm.css';
import axios from 'axios'

const HostForm = ({ addHost }) => {
  const [formData, setFormData] = useState({
    id: '',
    first_name: '',
    last_name: '',
    city: '',
    max_guests: 1,
    requirements: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendDataToBackend = async (obje) => {
    const response = await axios.post("http://127.0.0.1:5000/HostData", {...obje})
    console.log(response.data)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendDataToBackend(formData);
    console.log(formData);
    addHost(formData);
    setFormData({
      id: '',
      first_name: '',
      last_name: '',
      city: '',
      max_guests: 1,
      requirements: ''
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="form-heading">Host Registration</h2>
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
          Max Guests:
          <input
            type="number"
            name="max_guests"
            value={formData.max_guests}
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
