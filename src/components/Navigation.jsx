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
  const [servicesOpen, setServicesOpen] = useState(false);
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
    // Don't close services immediately if we want to keep state, but usually we want to reset
    // setServicesOpen(false); 
  };

  const toggleServices = (e) => {
    e.preventDefault();
    setServicesOpen(!servicesOpen);
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>

        <div className="logo">
          <a href="/">
            <img src={`${baseUrl}socialdivingclub.ico`} alt="Social Diving Club Logo" className="logo-image" />
            <span>Social Diving Club</span>
          </a>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <button className="menu-close" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
          {isHomePage ? (
            <>
              <li><a href="#home" onClick={handleLinkClick}>{t.home}</a></li>
              <li className="dropdown" onMouseEnter={() => window.innerWidth > 968 && setServicesOpen(true)} onMouseLeave={() => window.innerWidth > 968 && setServicesOpen(false)}>
                <a href="#courses" onClick={toggleServices} className="dropdown-toggle">
                  {t.services}
                  <span className={`arrow ${servicesOpen ? 'up' : 'down'}`}></span>
                </a>
                <ul className={`dropdown-menu ${servicesOpen ? 'show' : ''}`}>
                  <li className="dropdown-submenu">
                    <span className="submenu-title">{t.diveCourses}</span>
                    <ul className="submenu-items">
                      <li><Link to="/course/discovery" onClick={handleLinkClick}>{t.dsd}</Link></li>
                      <li><Link to="/course/open-water" onClick={handleLinkClick}>{t.openWater}</Link></li>
                      <li><Link to="/course/advanced" onClick={handleLinkClick}>{t.advancedCourse}</Link></li>
                      <li><Link to="/course/rescue" onClick={handleLinkClick}>{t.rescue}</Link></li>
                      <li><Link to="/course/refresher" onClick={handleLinkClick}>{t.refresherCourse}</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <span className="submenu-title">{t.recreationalDiving}</span>
                    <ul className="submenu-items">
                      <li><Link to="/course/fun-dive" onClick={handleLinkClick}>{t.funDive}</Link></li>
                      <li><Link to="/course/dive-packages" onClick={handleLinkClick}>{t.divePackages}</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <span className="submenu-title">{t.snorkeling}</span>
                    <ul className="submenu-items">
                      <li><Link to="/course/snorkel-trips" onClick={handleLinkClick}>{t.snorkelTrips}</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="#about" onClick={handleLinkClick}>{t.about}</a></li>
              <li><a href="#gallery" onClick={handleLinkClick}>{t.gallery}</a></li>
              <li><a href="#contact" onClick={handleLinkClick}>{t.contact}</a></li>
            </>
          ) : (
            <>
              <li><Link to="/" onClick={handleLinkClick}>{t.home}</Link></li>
              <li className="dropdown" onMouseEnter={() => window.innerWidth > 968 && setServicesOpen(true)} onMouseLeave={() => window.innerWidth > 968 && setServicesOpen(false)}>
                <Link to="/#courses" onClick={toggleServices} className="dropdown-toggle">
                  {t.services}
                  <span className={`arrow ${servicesOpen ? 'up' : 'down'}`}></span>
                </Link>
                <ul className={`dropdown-menu ${servicesOpen ? 'show' : ''}`}>
                  <li className="dropdown-submenu">
                    <span className="submenu-title">{t.diveCourses}</span>
                    <ul className="submenu-items">
                      <li><Link to="/course/discovery" onClick={handleLinkClick}>{t.dsd}</Link></li>
                      <li><Link to="/course/open-water" onClick={handleLinkClick}>{t.openWater}</Link></li>
                      <li><Link to="/course/advanced" onClick={handleLinkClick}>{t.advancedCourse}</Link></li>
                      <li><Link to="/course/rescue" onClick={handleLinkClick}>{t.rescue}</Link></li>
                      <li><Link to="/course/refresher" onClick={handleLinkClick}>{t.refresherCourse}</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <span className="submenu-title">{t.recreationalDiving}</span>
                    <ul className="submenu-items">
                      <li><Link to="/course/fun-dive" onClick={handleLinkClick}>{t.funDive}</Link></li>
                      <li><Link to="/course/dive-packages" onClick={handleLinkClick}>{t.divePackages}</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <span className="submenu-title">{t.snorkeling}</span>
                    <ul className="submenu-items">
                      <li><Link to="/course/snorkel-trips" onClick={handleLinkClick}>{t.snorkelTrips}</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><Link to="/#about" onClick={handleLinkClick}>{t.about}</Link></li>
              <li><Link to="/#gallery" onClick={handleLinkClick}>{t.gallery}</Link></li>
              <li><Link to="/#contact" onClick={handleLinkClick}>{t.contact}</Link></li>
            </>
          )}
          <li><Link to="/faqs" onClick={handleLinkClick}>{t.faqs}</Link></li>
        </ul>

        <div className="nav-secondary">
          <LanguageSelector />
        </div>
      </div>

      {/* Overlay to close menu when clicking outside */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;
