import React, { useState } from 'react';
import { useLanguage } from '../context/useLanguage';
import { translations } from '../translations/translations';
import './CustomerReviews.css';

const CustomerReviews = () => {
  const { language } = useLanguage();
  const t = translations[language].customerReviews;
  
  const [reviews] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      country: 'USA',
      rating: 5,
      date: '2024-11-15',
      text: 'Amazing experience with Juan! He made us feel safe and showed us the most beautiful parts of the reef. Highly recommended!',
      textEs: '¡Experiencia increíble con Juan! Nos hizo sentir seguros y nos mostró las partes más hermosas del arrecife. ¡Muy recomendado!'
    },
    {
      id: 2,
      name: 'Michael Schmidt',
      country: 'Germany',
      rating: 5,
      date: '2024-11-10',
      text: 'Professional instructor, amazing dive sites. Juan knows every corner of Cozumel\'s reefs. Best diving experience ever!',
      textEs: 'Instructor profesional, sitios de buceo increíbles. Juan conoce cada rincón de los arrecifes de Cozumel. ¡La mejor experiencia de buceo!'
    },
    {
      id: 3,
      name: 'Emma Laurent',
      country: 'France',
      rating: 5,
      date: '2024-11-05',
      text: 'Juan is an excellent guide! Very patient with beginners and knowledgeable about marine life. Can\'t wait to come back!',
      textEs: '¡Juan es un guía excelente! Muy paciente con principiantes y conocedor de la vida marina. ¡No puedo esperar para volver!'
    }
  ]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={index < rating ? 'star filled' : 'star'}>
        ★
      </span>
    ));
  };

  return (
    <section className="customer-reviews section" id="reviews">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
        
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="review-author">
                  <div className="author-avatar">
                    {review.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <h3 className="author-name">{review.name}</h3>
                    <p className="author-country">{review.country}</p>
                  </div>
                </div>
                <div className="review-rating">
                  {renderStars(review.rating)}
                </div>
              </div>
              <p className="review-text">
                {language === 'en' ? review.text : review.textEs}
              </p>
              <p className="review-date">
                {new Date(review.date).toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          ))}
        </div>

        <div className="leave-review-cta">
          <h3>{t.ctaTitle}</h3>
          <p>{t.ctaText}</p>
          <a href="#contact" className="review-btn">
            {t.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
