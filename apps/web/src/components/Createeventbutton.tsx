import React from 'react';
import '../app/globals.css';

const EventCreationBanner = () => {
  return (
    <div className="eventCreationContainer">
      <div className="eventTextSection">
        <p> Start your hosting journey here</p>
      </div>
      <div className="eventButtonSection">
        <div className="eventButtonBox">
          <button className="eventCreateButton">Create events here</button>
        </div>
      </div>
    </div>
  );
};

export default EventCreationBanner;
