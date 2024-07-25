import React, { useState } from 'react';
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
    <div className="App">
      <h1>Crisis Tech - Host Matching</h1>
      <HostForm addHost={addHost} />
      <GuestForm addGuest={addGuest} />
      <Matches hosts={hosts} guests={guests} />
      {selectedMatch && <Chat match={selectedMatch} />}
    </div>
  );
}

export default App;

