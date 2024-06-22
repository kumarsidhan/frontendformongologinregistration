import React, { useState } from 'react';
import axios from 'axios';

const Logout = () => {
  const [message, setMessage] = useState('');
  const handleLogout = async() => {
    
    const token = localStorage.getItem('token'); // Retrieve the token from local storage

    try {
      const res = await axios.post('http://localhost:5000/api/auth/logout', {}, {
        headers: {
          'x-auth-token': token // Add the token in the header
        }
      });
      setMessage(res.data.msg);
      localStorage.removeItem('token'); // Remove the token from local storage upon logout
    } catch (err) {
      setMessage(err.response.data.error);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Logout;
