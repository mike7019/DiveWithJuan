import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './Hero.css';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero" id="home" aria-label="Welcome to Juan Diving Cozumel">
      <div className="hero-content">
        <p className="hero-subtitle">PADI SCUBA INSTRUCTION, PERSONALIZED DIVING & SNORKEL TOURS IN COZUMEL</p>
        <h1 className="hero-title">
          {t.title}
        </h1>
        <a href="#courses" className="btn-primary" aria-label="Explore our diving courses">{t.cta}</a>
      </div>

      <button className="scroll-indicator" onClick={scrollToNext} aria-label="Scroll to next section">
        <FaChevronDown aria-hidden="true" />
      </button>
    </section>
  );
};

export default Hero;
