import React, { useState, useCallback, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../context/useLanguage';
import { translations } from '../translations/translations';
import './Gallery.css';

const Gallery = () => {
  const { language } = useLanguage();
  const t = translations[language].gallery;
  const [currentPage, setCurrentPage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesPerPage = 8;

  // Cargar dinámicamente todas las imágenes de la carpeta assets/images-gallery
  const imageModules = import.meta.glob('../assets/images-gallery/*.{jpg,jpeg,png,gif,webp}', { eager: true });
  const images = Object.keys(imageModules)
    .map(path => imageModules[path].default)
    .sort(); // Ordenar alfabéticamente

  const totalPages = Math.ceil(images.length / imagesPerPage);
  const startIndex = currentPage * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = images.slice(startIndex, endIndex);

  // Preload next page images
  useEffect(() => {
    const nextPageStartIndex = ((currentPage + 1) % totalPages) * imagesPerPage;
    const nextPageEndIndex = nextPageStartIndex + imagesPerPage;
    const nextPageImages = images.slice(nextPageStartIndex, nextPageEndIndex);
    
    nextPageImages.forEach(imageSrc => {
      const img = new Image();
      img.src = imageSrc;
    });
  }, [currentPage, totalPages, images, imagesPerPage]);

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

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const goToPreviousImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const goToNextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  // Preload adjacent images for faster transitions
  useEffect(() => {
    if (lightboxOpen) {
      const preloadImage = (index) => {
        if (index >= 0 && index < images.length) {
          const img = new Image();
          img.src = images[index];
        }
      };
      
      // Preload previous and next images
      const prevIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
      const nextIndex = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
      
      preloadImage(prevIndex);
      preloadImage(nextIndex);
    }
  }, [lightboxOpen, currentImageIndex, images]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPreviousImage();
      if (e.key === 'ArrowRight') goToNextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, goToPreviousImage, goToNextImage]);

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
              style={{ 
                maxWidth: '90vw', 
                maxHeight: '90vh', 
                objectFit: 'contain',
                display: 'block'
              }}
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
