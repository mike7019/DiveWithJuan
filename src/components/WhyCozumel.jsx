import React from 'react';
import { useLanguage } from '../context/useLanguage';
import { translations } from '../translations/translations';
import './WhyCozumel.css';

const WhyCozumel = () => {
  const { language } = useLanguage();
  const t = translations[language].whyCozumel;

  return (
    <section className="why-cozumel">
      <div className="why-cozumel-container">
        <h2 className="why-cozumel-title">{t.title}</h2>
        <p className="why-cozumel-text">
          {t.description}
        </p>
      </div>
    </section>
  );
};

export default WhyCozumel;
