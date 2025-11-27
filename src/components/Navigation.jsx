import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/useLanguage';
import { translations } from '../translations/translations';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].nav;
  const baseUrl = import.meta.env.BASE_URL;
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <a href="/">
            <img src={`${baseUrl}icono.png`} alt="Social Diving Club Logo" className="logo-image" />
            <span>Social Diving Club</span>
          </a>
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {isHomePage ? (
            <>
              <li><a href="#home">{t.home}</a></li>
              <li><a href="#courses">{t.courses}</a></li>
              <li><a href="#about">{t.about}</a></li>
              <li><a href="#gallery">{t.gallery}</a></li>
              <li><a href="#contact">{t.contact}</a></li>
            </>
          ) : (
            <>
              <li><Link to="/">{t.home}</Link></li>
              <li><Link to="/#courses">{t.courses}</Link></li>
              <li><Link to="/#about">{t.about}</Link></li>
              <li><Link to="/#gallery">{t.gallery}</Link></li>
              <li><Link to="/#contact">{t.contact}</Link></li>
            </>
          )}
          <li><Link to="/faqs">{t.faqs}</Link></li>
        </ul>

        <div className="nav-secondary">
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
