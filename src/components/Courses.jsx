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
      title: t.discovery.title,
      image: `${baseUrl}images-courses/FOTO PARA DSD.jpeg`,
      shortDescription: t.discovery.shortDescription,
      description: t.discovery.description,
      detailedDescription: t.discovery.detailedDescription,
      flipButtonText: t.discovery.flipButtonText,
      slug: 'discovery'
    },
    {
      id: 2,
      title: t.openWater.title,
      image: `${baseUrl}images-courses/FOTO PARA OPEN WATER.jpg`,
      shortDescription: t.openWater.shortDescription,
      description: t.openWater.description,
      detailedDescription: t.openWater.detailedDescription,
      flipButtonText: t.openWater.flipButtonText,
      slug: 'open-water'
    },
    {
      id: 3,
      title: t.advancedOpenWater.title,
      image: `${baseUrl}images-courses/FOTO PARA AVANZADO.jpg`,
      shortDescription: t.advancedOpenWater.shortDescription,
      description: t.advancedOpenWater.description,
      detailedDescription: t.advancedOpenWater.detailedDescription,
      flipButtonText: t.advancedOpenWater.flipButtonText,
      slug: 'advanced'
    },
    {
      id: 4,
      title: t.funDive.title,
      image: `${baseUrl}images-courses/FOTO PARA FUNDIVE.jpg`,
      shortDescription: t.funDive.shortDescription,
      description: t.funDive.description,
      detailedDescription: t.funDive.detailedDescription,
      flipButtonText: t.funDive.flipButtonText,
      slug: 'fun-dive'
    },
    {
      id: 5,
      title: t.rescueDiver.title,
      image: `${baseUrl}images-courses/rescue diver.jpg`,
      shortDescription: t.rescueDiver.shortDescription,
      description: t.rescueDiver.description,
      detailedDescription: t.rescueDiver.detailedDescription,
      flipButtonText: t.rescueDiver.flipButtonText,
      slug: 'rescue'
    },
    {
      id: 6,
      title: t.refresherCourse.title,
      image: `${baseUrl}images-courses/reef cave diver.jpg`,
      shortDescription: t.refresherCourse.shortDescription,
      description: t.refresherCourse.description,
      detailedDescription: t.refresherCourse.detailedDescription,
      flipButtonText: t.refresherCourse.flipButtonText,
      slug: 'refresher'
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
                      {course.flipButtonText}
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
