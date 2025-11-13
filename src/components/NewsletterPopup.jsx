import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './NewsletterPopup.css';

const NewsletterPopup = ({ show, onClose }) => {
  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="newsletter-popup-overlay" onClick={onClose}>
      <div className="newsletter-popup" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="popup-content">
          <p className="popup-title">SIGNUP FOR OUR NEWSLETTER</p>
          <p className="popup-description">
            Describe what your customers will receive when subscribing to your newsletter.
          </p>

          <form className="popup-form" onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" required />
            <button type="submit" className="btn-primary">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
