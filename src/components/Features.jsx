import React from 'react';
import { useLanguage } from '../context/useLanguage';
import { translations } from '../translations/translations';
import { Icon } from '@iconify/react';
import './Features.css';

const Features = () => {
  const { language } = useLanguage();
  const t = translations[language].features;

  const features = [
    {
      id: 1,
      icon: <Icon icon="map:scuba-diving" />,
      title: t.feature1.title,
      description: t.feature1.description
    },
    {
      id: 2,
      icon: <Icon icon="mdi:heart" />,
      title: t.feature2.title,
      description: t.feature2.description
    },
    {
      id: 3,
      icon: <Icon icon="mdi:fish" />,
      title: t.feature3.title,
      description: t.feature3.description
    },
    {
      id: 4,
      icon: <Icon icon="mdi:eye" />,
      title: t.feature4.title,
      description: t.feature4.description
    }
  ];

  return (
    <section className="features section">
      <div className="container">
        <h2 className="features-main-title">{t.mainTitle}</h2>
        
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-item">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
