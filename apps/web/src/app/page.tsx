import React from 'react';
import Link from 'next/link';
import './globals.css';

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <div className="header">Find Your Next Event</div>
      <input className="search-bar" type="text" placeholder="Search..." />
      <div className="category-grid">
        {/* Music Category */}
        <div className="category-card">
          <Link href="/music">
            <button className="category-title no-border">Music</button>
          </Link>
          <p className="category-description">
            Discover upcoming concerts, events, and parties.
          </p>
        </div>

        {/* Wellness Category */}
        <div className="category-card">
          <Link href="/wellness">
            <button className="category-title no-border">Wellness</button>
          </Link>
          <p className="category-description">
            Find wellness workshops, classes, and retreats.
          </p>
        </div>

        {/* Food & Drinks Category */}
        <div className="category-card">
          <Link href="/fooddrinks">
            <button className="category-title no-border">Food & Drinks</button>
          </Link>
          <p className="category-description">
            Browse cooking classes, wine-tasting, and other food-related
            activities.
          </p>
        </div>
        {/* Add more category cards as needed */}
      </div>
    </div>
  );
};

export default Homepage;
