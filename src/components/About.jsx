import React from 'react';
import { useLanguage } from '../context/useLanguage';
import { translations } from '../translations/translations';
import './About.css';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=1000&fit=crop" 
              alt="Juan Rodriguez - Professional PADI Scuba Diving Instructor in Cozumel, Mexico" 
              loading="lazy"
            />
          </div>
          
          <div className="about-content">
            <h3 className="about-subtitle">JUAN RODRIGUEZ</h3>
            <h2 className="about-title" id="about-title">{t.title}</h2>
            
            <div className="about-text">
              <p>{t.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
