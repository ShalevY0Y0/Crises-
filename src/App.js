import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import HostDashboard from './components/HostDashboard';
import HostForm from './components/HostForm';
import GuestForm from './components/GuestForm';
import Matches from './components/Matches';
import Chat from './components/Chat';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/host-dashboard" element={<HostDashboard />} />
          <Route path="/host-form" element={<HostForm />} />
          <Route path="/guest-form" element={<GuestForm />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
