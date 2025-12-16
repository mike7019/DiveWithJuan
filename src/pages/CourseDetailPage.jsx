import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/useLanguage';
import { translations } from '../translations/translations';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import './CourseDetailPage.css';

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].courses;
  const whatsappT = translations[language].whatsapp;
  const baseUrl = import.meta.env.BASE_URL;

  // Map course IDs to course data
  const courseMap = {
    'open-water': {
      key: 'openWater',
      image: `${baseUrl}images-courses/FOTO PARA OPEN WATER.jpg`
    },
    'advanced': {
      key: 'advancedOpenWater',
      image: `${baseUrl}images-courses/FOTO PARA AVANZADO.jpg`
    },
    'discovery': {
      key: 'discovery',
      image: `${baseUrl}images-courses/FOTO PARA DSD.jpg`
    },
    'fun-dive': {
      key: 'funDive',
      image: `${baseUrl}images-courses/FOTO PARA FUNDIVE.jpg`
    },
    'rescue': {
      key: 'rescueDiver',
      image: `${baseUrl}images-courses/rescue diver.jpg`
    },
    'refresher': {
      key: 'refresherCourse',
      image: `${baseUrl}images-courses/reef cave diver.jpg`
    },
    'snorkel-trips': {
      key: 'snorkeling',
      image: `${baseUrl}images-courses/FOTO PARA FUNDIVE.jpg`
    }
  };

  const courseData = courseMap[courseId];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!courseData) {
    return (
      <div className="course-detail-error">
        <Navigation />
        <div className="container">
          <h1>Course not found</h1>
          <button onClick={() => navigate('/')}>Return Home</button>
        </div>
        <Footer />
      </div>
    );
  }

  const course = t[courseData.key];

  const handleBookNow = () => {
    const phoneNumber = '5219842772929';
    const message = whatsappT.booking.replace('{course}', course.title);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <div className="course-detail-page">
        <header>
          <Navigation />
        </header>

        <main className="course-detail-main">
          <div className="course-detail-hero">
            <div className="course-detail-hero-image">
              <img src={courseData.image} alt={course.title} />
            </div>
            <div className="course-detail-hero-content">
              <h1 className="course-detail-title">{course.title}</h1>
              <p className="course-detail-description">{course.description}</p>
            </div>
          </div>

          <div className="course-detail-content">
            <div className="container">
              <div className="course-detail-grid">

                {/* Main Content */}
                <div className="course-detail-main-content">
                  {course.detailedDescription && (
                    <section className="detail-section">
                      <h2>{language === 'en' ? 'About This Experience' : 'Acerca de Esta Experiencia'}</h2>
                      <p>{course.detailedDescription}</p>
                    </section>
                  )}

                  {course.highlights && (
                    <section className="detail-section">
                      <h2>{language === 'en' ? 'Highlights' : 'Aspectos Destacados'}</h2>
                      <ul className="detail-list highlights-list">
                        {course.highlights.map((highlight, index) => (
                          <li key={index}>
                            <span className="list-icon">✓</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {course.requirements && (
                    <section className="detail-section">
                      <h2>{language === 'en' ? 'Requirements' : 'Requisitos'}</h2>
                      <ul className="detail-list">
                        {course.requirements.map((req, index) => (
                          <li key={index}>
                            <span className="list-icon">•</span>
                            {req}
                          </li>
                        ))}
                        {course.medicalForm && (
                          <li>
                            <span className="list-icon">•</span>
                            {language === 'en' ? 'Read it to see if you’re fit for dive: ' : 'Lee el formulario para ver si eres apto'}
                            <a
                              href={`${baseUrl}medical%20form.pdf`}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: '#2196F3', textDecoration: 'underline' }}
                            >
                              {language === 'en' ? 'medical form' : 'formulario médico'}
                            </a>
                          </li>
                        )}
                      </ul>
                    </section>
                  )}

                  {course.includes && (
                    <section className="detail-section">
                      <h2>{language === 'en' ? 'What\'s Included' : 'Qué Incluye'}</h2>
                      <ul className="detail-list">
                        {course.includes.map((item, index) => (
                          <li key={index}>
                            <span className="list-icon">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
                </div>

                {/* Sidebar */}
                <aside className="course-detail-sidebar">
                  <div className="booking-card">
                    {course.price && (
                      <div className="booking-price">
                        <h2>{course.price}</h2>
                        <p>{language === 'en' ? 'per person' : 'por persona'}</p>
                      </div>
                    )}

                    {course.duration && (
                      <div className="booking-info">
                        <h3>{language === 'en' ? 'Duration' : 'Duración'}</h3>
                        <p>{course.duration}</p>
                      </div>
                    )}

                    <button className="booking-btn" onClick={handleBookNow}>
                      {t.bookNow}
                    </button>

                    <div className="booking-note">
                      <p>
                        {language === 'en'
                          ? 'Contact us via WhatsApp to confirm availability'
                          : 'Contáctanos por WhatsApp para confirmar disponibilidad'}
                      </p>
                    </div>
                  </div>

                  <div className="info-card">
                    <h3>{language === 'en' ? 'Need Help?' : '¿Necesitas Ayuda?'}</h3>
                    <p>
                      {language === 'en'
                        ? 'Have questions? Contact us and we\'ll be happy to help you plan your diving adventure.'
                        : '¿Tienes preguntas? Contáctanos y estaremos felices de ayudarte a planear tu aventura de buceo.'}
                    </p>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </main>

        <footer>
          <Footer />
        </footer>
        <WhatsAppButton />
      </div>
    </>
  );
};

export default CourseDetailPage;
