import React from 'react';
import '../app/globals.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Page from '../app/page';

import Slidepics from '@/components/Slidespics';

const EventTypes = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Page />
      <div>
        <Slidepics />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default EventTypes;
