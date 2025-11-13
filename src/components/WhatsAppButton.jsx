import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const { language } = useLanguage();
  const phoneNumber = '5219842772929'; // Formato internacional sin espacios ni símbolos
  const message = translations[language].whatsapp.general;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
