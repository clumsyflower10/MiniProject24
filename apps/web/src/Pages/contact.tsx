import React from 'react';
import '../app/globals.css';

const Contact = () => {
  return (
    <div className="contact-section-container">
      <div className="contact-content-wrapper">
        <div className="contact-title-wrapper">
          <p className="contact-main-title">Contact</p>
          <p className="contact-sub-title">Ask us anything</p>
        </div>

        <div className="contact-form-wrapper">
          <form
            action="https://getform.io/f/f90a5053-5181-4e50-b622-42431c4b09dc"
            method="POST"
            className="contact-form-layout"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="contact-input"
            />

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="contact-input contact-input-email"
            />

            <textarea
              name="message"
              placeholder="Enter your message here"
              className="contact-textarea"
            ></textarea>

            <button className="contact-submit-btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
