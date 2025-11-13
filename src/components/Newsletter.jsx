import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <section className="newsletter section">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <p className="newsletter-label">KEEP ME UPDATED</p>
            <h2 className="newsletter-title">NEWSLETTER</h2>
            <p className="newsletter-description">
              Get dive updates, photo drops, and exclusive tips for exploring Cozumel's underwater world.
            </p>
          </div>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-primary">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
