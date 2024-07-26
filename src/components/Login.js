import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const role = new URLSearchParams(location.search).get('role');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here

    // On success, navigate to the appropriate dashboard
    if (role === 'host') {
      navigate('/host-dashboard');
    } else if (role === 'guest') {
      navigate('/guest-dashboard'); // You can implement this page later
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <span onClick={() => navigate(`/signup?role=${role}`)} className="auth-link">
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default Login;
