import React from 'react';
import '../app/globals.css';
import Header from '../components/Header';
import SignUp from '../components/Signup';
import Footer from '../components/Footer';

const loginPage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <SignUp />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default loginPage;
