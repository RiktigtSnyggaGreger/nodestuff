import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const [message, setMessage] = useState('');

  return (
    <div>
      <h1>Contact Page</h1>
      <textarea
        placeholder="Write a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p>Your message: {message}</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default Contact;