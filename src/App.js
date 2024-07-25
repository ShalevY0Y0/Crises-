import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import HostForm from './components/HostForm';
import GuestForm from './components/GuestForm';
import Matches from './components/Matches';
import Chat from './components/Chat';
import './App.css';

function App() {
  const [hosts, setHosts] = useState([]);
  const [guests, setGuests] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(null);

  const addHost = (host) => {
    setHosts([...hosts, host]);
  };

  const addGuest = (guest) => {
    setGuests([...guests, guest]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/host" element={<HostForm addHost={addHost} />} />
        <Route path="/guest" element={<GuestForm addGuest={addGuest} />} />
        <Route path="/matches" element={<Matches hosts={hosts} guests={guests} />} />
        <Route path="/chat" element={selectedMatch && <Chat match={selectedMatch} />} />
      </Routes>
    </Router>
  );
}

export default App;
