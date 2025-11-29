import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '../context/useLanguage';
import { translations } from '../translations/translations';
import './Hero.css';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const baseUrl = import.meta.env.BASE_URL;

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero" id="home" aria-label="Welcome to Juan Diving Cozumel">
      <div
        className="video-background"
        aria-hidden="true"
        style={{ backgroundImage: `url(${baseUrl}images-gallery/pexels-harvey-clements-13141095-15288622.jpg)` }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-label="Background video of diving in Cozumel"
          poster={`${baseUrl}images-gallery/pexels-harvey-clements-13141095-15288622.jpg`}
        >
          <source src={`${baseUrl}videos/juan-hero.mp4`} type="video/mp4" />
        </video>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          {t.title}
        </h1>
        <p className="hero-subtitle">{t.subtitle}</p>
        <a href="#courses" className="btn-primary" aria-label="Explore our diving courses">{t.cta}</a>
      </div>

      <button className="scroll-indicator" onClick={scrollToNext} aria-label="Scroll to next section">
        <FaChevronDown aria-hidden="true" />
      </button>
    </section>
  );
};

export default Hero;
