import React, { useState } from 'react';
import { useLanguage } from '../context/useLanguage';
import { translations } from '../translations/translations';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Reviews.css';

const Reviews = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;
  
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const templateParams = {
      name: `${formData.name} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    };

    console.log('Sending email with params:', templateParams);

    emailjs.send(
      'service_hrlpo4l',
      'template_dv3hys9',
      templateParams,
      'JFL2czoF08w-b414Z'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('FAILED...', error);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2 className="section-title">{t.title}</h2>
            
            <div className="info-item">
              <p className="info-text"><strong>Juan De San Benito</strong></p>
            </div>

            <div className="info-item">
              <p className="info-text">Cozumel, Quintana Roo, México</p>
            </div>

            <div className="info-item">
              <p className="info-text">+52 984 277 2929</p>
            </div>

            <div className="info-item">
              <p className="info-text">socialdivingclubcozumel@gmail.com</p>
            </div>

            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder={t.name}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder={t.lastName}
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder={`${t.email} *`}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder={`${t.phone} *`}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder={t.messagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="submit-message success">
                  {language === 'en' ? '✓ Message sent successfully!' : '✓ ¡Mensaje enviado exitosamente!'}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="submit-message error">
                  {language === 'en' ? '✗ Error sending message. Please try again.' : '✗ Error al enviar el mensaje. Por favor intenta de nuevo.'}
                </div>
              )}

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting 
                  ? (language === 'en' ? 'Sending...' : 'Enviando...') 
                  : t.send
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
