import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/useLanguage';
import { translations } from '../translations/translations';
import './Courses.css';

const Courses = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].courses;
  const baseUrl = import.meta.env.BASE_URL;

  const courses = [
    {
      id: 1,
      title: t.openWater.title,
      image: `${baseUrl}images-courses/open water diver.jpg`,
      shortDescription: t.openWater.shortDescription,
      description: t.openWater.description,
      detailedDescription: t.openWater.detailedDescription,
      slug: 'open-water'
    },
    {
      id: 2,
      title: t.advancedOpenWater.title,
      image: `${baseUrl}images-courses/advanced open water.jpg`,
      shortDescription: t.advancedOpenWater.shortDescription,
      description: t.advancedOpenWater.description,
      detailedDescription: t.advancedOpenWater.detailedDescription,
      slug: 'advanced'
    },
    {
      id: 3,
      title: t.discovery.title,
      image: `${baseUrl}images-courses/fun dive.jpg`,
      shortDescription: t.discovery.shortDescription,
      description: t.discovery.description,
      detailedDescription: t.discovery.detailedDescription,
      slug: 'discovery'
    },
    {
      id: 4,
      title: t.funDive.title,
      image: `${baseUrl}images-courses/fun diver.jpg`,
      shortDescription: t.funDive.shortDescription,
      description: t.funDive.description,
      detailedDescription: t.funDive.detailedDescription,
      slug: 'fun-dive'
    }
  ];

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleMoreInfo = (e, slug) => {
    e.stopPropagation();
    navigate(`/course/${slug}`);
  };

  return (
    <section className="courses section" id="courses" aria-labelledby="courses-title">
      <div className="container">
        <div className="courses-header">
          <h2 className="section-title" id="courses-title">
            {t.title}
          </h2>
          <p className="courses-subtitle">{t.subtitle}</p>
        </div>

        <div className="courses-grid">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className={`course-card-container ${flippedCards[course.id] ? 'flipped' : ''}`}
              onClick={() => toggleFlip(course.id)}
            >
              <div className="course-card-inner">
                {/* Front of card */}
                <div className="course-card-front">
                  <div className="course-image">
                    <img src={course.image} alt={course.title} />
                  </div>
                  <div className="course-content">
                    <h3 className="course-title">{course.title}</h3>
                    <p className="course-brief">{course.shortDescription}</p>
                    <button className="flip-hint-btn">
                      {language === 'en' ? 'Click Me' : 'Click Aquí'}
                    </button>
                  </div>
                </div>

                {/* Back of card */}
                <div className="course-card-back">
                  <div className="course-back-content">
                    <h3 className="course-title">{course.title}</h3>
                    <p className="course-brief">{course.description}</p>
                    <button 
                      className="course-info-btn"
                      onClick={(e) => handleMoreInfo(e, course.slug)}
                    >
                      <span>{language === 'en' ? 'More Information' : 'Más Información'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
