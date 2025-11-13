import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>CONTACT ME</h3>
            <p>Sign up to our newsletter to receive exclusive offers.</p>
            <form className="footer-form">
              <input type="email" placeholder="Email" required />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>

          <div className="footer-column">
            <h3>MENU</h3>
            <ul>
              <li><a href="#search">Search</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#reviews">Reviews</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>POLICIES</h3>
            <ul>
              <li><a href="#privacy">Privacy Policies</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#cancellation">Cancellation Policy</a></li>
              <li><a href="#contact-info">Contact Information</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>

        <div className="footer-bottom">
          <p>© 2025 - JUAN DIVING</p>
          <p>
            Developed By:{' '}
            <a 
              href="https://wa.me/573043261092?text=Hola%2C%20estoy%20interesado%20en%20obtener%20informaci%C3%B3n%20acerca%20de%20los%20desarrollos%20web.%20%C2%BFPodr%C3%ADas%20proporcionarme%20m%C3%A1s%20detalles%3F" 
              target="_blank" 
              rel="noopener noreferrer"
              className="developer-link"
            >
              Michael Garzon +57 304 326 1092
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
