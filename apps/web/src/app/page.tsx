import React from 'react';
import './globals.css';

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <div className="header">Find Your Next Event</div>
      <input className="search-bar" type="text" placeholder="Search..." />
      <div className="category-grid">
        <div className="category-card">
          <h3 className="category-title">Music</h3>
          <p className="category-description">
            Discover upcoming concerts, events, and parties.
          </p>
        </div>
        <div className="category-card">
          <h3 className="category-title">Wellness</h3>
          <p className="category-description">
            Find wellness workshops, classes, and retreats.
          </p>
        </div>
        <div className="category-card">
          <h3 className="category-title">Food & Drinks</h3>
          <p className="category-description">
            Browse cooking class, wine-tasting, and other food related
            activities.
          </p>
        </div>
        {/* Add more category cards as needed */}
      </div>
    </div>
  );
};

export default Homepage;
