'use client';
import axios from 'axios';

import React, { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Sign Up with:', name, email, password);
    // Add sign-up logic here
    axios({
      method: 'post',
      url: 'http:??localhost:8000/api/auth/register',
      data: {
        username: name,
        email: email,
        password: password,
      },
    })
      .then(function (response) {
        console.log('Success: ', response);
        // Clear form fields on success
        setName('');
        setEmail('');
        setPassword('');
      })
      .catch(function (error) {
        console.log('Error: ', error);
      });
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="signup-form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="signup-form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="signup-form-group">
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
        <button type="submit" className="signup-submit-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
