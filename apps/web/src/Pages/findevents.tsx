import React from 'react';
import { Footer } from '../components/Footer';
import Header from '../components/Header';
import '../app/globals.css';
import EventSearchComponent from '@/components/FindEvents';
import EventDisplay from '@/components/Eventdisplaylist';
import Page from '../app/page';

export const findevents = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <EventSearchComponent />
      </div>
      <div>
        <Page />
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

export default findevents;
