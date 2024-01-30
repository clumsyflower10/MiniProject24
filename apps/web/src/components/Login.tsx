'use client';
import axios from 'axios';

import React, { useState } from 'react';

const Login = () => {
  // Define state variables for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('Login Attempt with:', username, password);
    // Add authentication logic here
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/auth/login',
      data: {
        username: username,
        password: password,
      },
    })
      .then(function (response) {
        console.log('Success: ', response);
        // Clear form fields on success
        setUsername('');
        setPassword('');
      })
      .catch(function (error) {
        console.log('Error: ', error);
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
