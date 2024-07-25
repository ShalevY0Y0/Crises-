// src/components/Matches.js
import React from 'react';

const Matches = ({ hosts, guests }) => {
  const getMatches = () => {
    let matches = [];
    hosts.forEach((host) => {
      guests.forEach((guest) => {
        if (host.lcity === guest.city && host.maxGuests >= guest.guests) {
          matches.push({ host, guest });
        }
      });
    });
    return matches;
  };

  const matches = getMatches();

  return (
    <div>
      <h2>Matches</h2>
      {matches.map((match, index) => (
        <div key={index}>
          <h3>Host: {match.host.name}</h3>
          <p>city: {match.host.city}</p>
          <p>Max Guests: {match.host.maxGuests}</p>
          <p>Requirements: {match.host.requirements}</p>
          <h3>Guest: {match.guest.name}</h3>
          <p>Lcity: {match.guest.city}</p>
          <p>Number of Guests: {match.guest.guests}</p>
          <p>Needs: {match.guest.needs}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Matches;
