'use client';
import React, { useState } from 'react';
import styles from '../app/FindEvent.module.css'; // Assuming CSS module is used

const EventSearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement the search functionality here or redirect to search results
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className={styles.eventSearchContainer}>
      <div className={styles.searchContainer}>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="type locations or events here"
            value={searchTerm}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButtonEvents}>
            Search
          </button>
        </form>
      </div>
      <div className={styles.headerContainer}>
        <h1 className="collectmoments">COLLECT MOMENTS</h1>
        <h2>NOT THINGS</h2>
      </div>
    </div>
  );
};

export default EventSearchComponent;
