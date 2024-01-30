import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Createeventbutton from '../components/Createeventbutton';
import '../app/globals.css';
import Slidepics from '@/components/Slidespics';
import Benefits from '../components/Benefits';

const createevents = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Slidepics />
      </div>
      <div>
        <Createeventbutton />
      </div>
      <div>
        <Benefits />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default createevents;
