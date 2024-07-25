// src/components/Chat.js
import React, { useState } from 'react';

const Chat = ({ match }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    setMessages([...messages, { user: 'User', text: message }]);
    setMessage('');
  };

  return (
    <div>
      <h2>Chat between {match.host.name} and {match.guest.name}</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Chat;
