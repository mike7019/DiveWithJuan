import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './Gallery.css';

const Gallery = () => {
  const { language } = useLanguage();
  const t = translations[language].gallery;
  const [currentPage, setCurrentPage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesPerPage = 8;

  const images = [
    '/images-gallery/pexels-2157297739-34651171.jpg',
    '/images-gallery/pexels-chris-spain-1559126760-27758100.jpg',
    '/images-gallery/pexels-chris-spain-1559126760-27758117.jpg',
    '/images-gallery/pexels-christian-vergara-19046939-11634173.jpg',
    '/images-gallery/pexels-domingo-dias-260502921-12640290.jpg',
    '/images-gallery/pexels-domingo-dias-260502921-12678039.jpg',
    '/images-gallery/pexels-harvey-clements-13141095-15288622.jpg',
    '/images-gallery/pexels-harvey-clements-13141095-15288627.jpg',
    '/images-gallery/pexels-harvey-clements-13141095-15463396.jpg',
    '/images-gallery/pexels-james-lee-932763-4606063.jpg',
    '/images-gallery/pexels-james-lee-932763-4606064.jpg',
    '/images-gallery/pexels-mati-11481752.jpg',
    '/images-gallery/pexels-mati-11481753.jpg',
    '/images-gallery/pexels-mati-11481772.jpg',
    '/images-gallery/pexels-oscar-garcia-medina-241846767-12302978.jpg',
    '/images-gallery/pexels-oscar-garcia-medina-241846767-12302979.jpg'
  ];

  const totalPages = Math.ceil(images.length / imagesPerPage);
  const startIndex = currentPage * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = images.slice(startIndex, endIndex);

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const openLightbox = (index) => {
    setCurrentImageIndex(startIndex + index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleKeyDown = (e) => {
    if (!lightboxOpen) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPreviousImage();
    if (e.key === 'ArrowRight') goToNextImage();
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentImageIndex]);

  return (
    <section className="gallery section" id="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <div className="gallery-header">
          <h2 className="section-title" id="gallery-title">{t.title}</h2>
          <p className="gallery-subtitle">{t.subtitle}</p>
        </div>

        <div className="gallery-grid">
          {currentImages.map((image, index) => (
            <div 
              key={startIndex + index} 
              className="gallery-item"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && openLightbox(index)}
              aria-label={`View scuba diving photo ${startIndex + index + 1} from Cozumel`}
            >
              <img src={image} alt={`Scuba diving in Cozumel - underwater photography by Juan Diving ${startIndex + index + 1}`} loading="lazy" />
              <div className="gallery-overlay">
                <span>Click me</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="gallery-navigation">
          <button 
            className="gallery-nav-btn" 
            onClick={goToPrevious}
            aria-label="Previous images"
          >
            <FaChevronLeft />
          </button>
          <span className="gallery-page-info">
            {currentPage + 1} / {totalPages}
          </span>
          <button 
            className="gallery-nav-btn" 
            onClick={goToNext}
            aria-label="Next images"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <FaTimes />
          </button>
          
          <button 
            className="lightbox-nav lightbox-prev" 
            onClick={(e) => {
              e.stopPropagation();
              goToPreviousImage();
            }}
          >
            <FaChevronLeft />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={images[currentImageIndex]} 
              alt={`Gallery ${currentImageIndex + 1}`} 
            />
            <div className="lightbox-counter">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>

          <button 
            className="lightbox-nav lightbox-next" 
            onClick={(e) => {
              e.stopPropagation();
              goToNextImage();
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
