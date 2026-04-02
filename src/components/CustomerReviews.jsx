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
      name: 'Kevin Galarcio',
      country: 'Colombia',
      rating: 5,
      date: '2025-11-16',
      text: 'Very professional, with the best energy and attitude throughout. An excellent experience!',
      textEs: '¡Muy profesional, la mejor energía y actitud en todo. Excelente experiencia!'
    },
    {
      id: 2,
      name: 'Julian Oti',
      country: 'Argentina',
      rating: 5,
      date: '2025-12-13',
      text: 'Juan is awesome. I was super nervous because it was my first time diving, but he was so patient and made me feel safe the whole time. If youre thinking about diving in Cozumel, go with him.',
      textEs: 'Juan es increíble. La verdad iba súper nervioso porque era mi primera vez buceando, pero fue tan paciente y me hizo sentir seguro en todo momento. Increíble ver todo lo que hay debajo. Si estás pensando en bucear en Cozumel, ve con él.'
    },
    {
      id: 3,
      name: 'Emma Laurent',
      country: 'USA',
      rating: 5,
      date: '2025-10-21',
      text: 'I had an unforgettable experience. Juan taught us a lot, was attentive the whole time, and showed us all kinds of fish, even nudibranchs. Highly recommended.!',
      textEs: '¡Tuve una experiencia inolvidable. Juan nos enseñó muchísimo, estuvo atento todo el tiempo y nos mostró todo tipo de peces, incluso nudibranquios. Súper recomendable!'
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
