import React from 'react';
import { FaGlobe, FaStar, FaLeaf, FaCoffee, FaTint } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <FaGlobe />,
      title: 'WORLD CLASS DIVE SPOTS'
    },
    {
      icon: <FaStar />,
      title: 'EXPERT INSTRUCTORS, GUIDES & UNMATCHED SERVICE'
    },
    {
      icon: <FaLeaf />,
      title: 'ECO FRIENDLY OPERATION'
    },
    {
      icon: <FaCoffee />,
      title: 'PREMIUM SERVICE WITH WATER, SNACKS & FULLY EQUIPPED VESSELS'
    },
    {
      icon: <FaTint />,
      title: 'VARIOUS TANK SIZES AVAILABLE'
    }
  ];

  return (
    <section className="features section">
      <div className="container">
        <div className="features-slider">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">{feature.icon}</div>
              <p className="feature-title">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
