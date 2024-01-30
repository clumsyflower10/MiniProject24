import React from 'react';
import '../app/globals.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import EventDisplay from '@/components/Eventdisplaylist';

const arts = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <EventDisplay />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default arts;
