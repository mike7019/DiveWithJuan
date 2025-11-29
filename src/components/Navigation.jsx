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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <a href="/">
            <img src={`${baseUrl}socialdivingclub.ico`} alt="Social Diving Club Logo" className="logo-image" />
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
              <li className="dropdown" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <a href="#courses">{t.services}</a>
                <ul className={`dropdown-menu ${servicesOpen ? 'show' : ''}`}>
                  <li className="dropdown-submenu">
                    <span className="submenu-title">{t.diveCourses}</span>
                    <ul className="submenu-items">
                      <li><Link to="/course/discovery">{t.dsd}</Link></li>
                      <li><Link to="/course/open-water">{t.openWater}</Link></li>
                      <li><Link to="/course/advanced">{t.advancedCourse}</Link></li>
                      <li><Link to="/course/rescue">{t.rescue}</Link></li>
                      <li><Link to="/course/refresher">{t.refresherCourse}</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <span className="submenu-title">{t.recreationalDiving}</span>
                    <ul className="submenu-items">
                      <li><Link to="/course/fun-dive">{t.funDive}</Link></li>
                      <li><Link to="/course/dive-packages">{t.divePackages}</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <span className="submenu-title">{t.snorkeling}</span>
                    <ul className="submenu-items">
                      <li><Link to="/course/snorkel-trips">{t.snorkelTrips}</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="#about">{t.about}</a></li>
              <li><a href="#gallery">{t.gallery}</a></li>
              <li><a href="#contact">{t.contact}</a></li>
            </>
          ) : (
            <>
              <li><Link to="/">{t.home}</Link></li>
              <li className="dropdown" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <Link to="/#courses">{t.services}</Link>
                <ul className={`dropdown-menu ${servicesOpen ? 'show' : ''}`}>
                  <li className="dropdown-submenu">
                    <span className="submenu-title">{t.diveCourses}</span>
                    <ul className="submenu-items">
                      <li><Link to="/course/discovery">{t.dsd}</Link></li>
                      <li><Link to="/course/open-water">{t.openWater}</Link></li>
                      <li><Link to="/course/advanced">{t.advancedCourse}</Link></li>
                      <li><Link to="/course/rescue">{t.rescue}</Link></li>
                      <li><Link to="/course/refresher">{t.refresherCourse}</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <span className="submenu-title">{t.recreationalDiving}</span>
                    <ul className="submenu-items">
                      <li><Link to="/course/fun-dive">{t.funDive}</Link></li>
                      <li><Link to="/course/dive-packages">{t.divePackages}</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <span className="submenu-title">{t.snorkeling}</span>
                    <ul className="submenu-items">
                      <li><Link to="/course/snorkel-trips">{t.snorkelTrips}</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
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
