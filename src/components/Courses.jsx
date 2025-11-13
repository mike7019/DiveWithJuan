import React, { useState } from 'react';
import { useLanguage } from '../context/useLanguage';
import { translations } from '../translations/translations';
import './Courses.css';

const Courses = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const { language } = useLanguage();
  const t = translations[language].courses;
  const whatsappT = translations[language].whatsapp;
  const baseUrl = import.meta.env.BASE_URL;

  const courses = [
    // First row - Certification Courses
    {
      id: 1,
      title: t.openWater.title,
      image: `${baseUrl}images-courses/open water diver.jpg`,
      description: t.openWater.description
    },
    {
      id: 2,
      title: t.advancedOpenWater.title,
      image: `${baseUrl}images-courses/advanced open water.jpg`,
      description: t.advancedOpenWater.description
    },
    {
      id: 3,
      title: t.rescueDiver.title,
      image: `${baseUrl}images-courses/rescue diver.jpg`,
      description: t.rescueDiver.description
    },
    // Second row - Beginner & Recreational Dives
    {
      id: 4,
      title: t.snorkeling.title,
      image: `${baseUrl}images-courses/snorkeling.jpg`,
      description: t.snorkeling.description
    },
    {
      id: 5,
      title: t.discovery.title,
      image: `${baseUrl}images-courses/fun dive.jpg`,
      description: t.discovery.description
    },
    {
      id: 6,
      title: t.funDive.title,
      image: `${baseUrl}images-courses/fun diver.jpg`,
      description: t.funDive.description
    },
    // Third row - Specialty Dives
    {
      id: 7,
      title: t.driftDive.title,
      image: `${baseUrl}images-courses/drift diver.jpg`,
      description: t.driftDive.description
    },
    {
      id: 8,
      title: t.nightDiving.title,
      image: `${baseUrl}images-courses/night diving.jpg`,
      description: t.nightDiving.description
    },
    {
      id: 9,
      title: t.reefCave.title,
      image: `${baseUrl}images-courses/reef cave diver.jpg`,
      description: t.reefCave.description
    }
  ];

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleBookNow = (e, courseTitle) => {
    e.stopPropagation(); // Evita que se voltee la tarjeta al hacer click en el botón
    const phoneNumber = '5219842772929';
    const message = whatsappT.booking.replace('{course}', courseTitle);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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
                    <p className="course-hint">{t.clickToLearn}</p>
                  </div>
                </div>

                {/* Back of card */}
                <div className="course-card-back">
                  <div className="course-back-content">
                    <h3 className="course-title">{course.title}</h3>
                    <p className="course-description">{course.description}</p>
                    <button 
                      className="course-btn"
                      onClick={(e) => handleBookNow(e, course.title)}
                    >
                      {t.bookNow}
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
