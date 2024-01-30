import React from 'react';
import Login from '../components/Login';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../app/globals.css';

const loginPage = () => {
  return (
    <div>
      <div>
        <div>
          <Header />
        </div>
        <Login />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default loginPage;
