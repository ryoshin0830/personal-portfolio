import React, { useState, useEffect } from 'react';
import './Photos.css';

const Photos = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    const photosSection = document.querySelector('.photos-section');
    if (photosSection) observer.observe(photosSection);
    
    return () => {
      if (photosSection) observer.unobserve(photosSection);
    };
  }, []);

  const photos = [
    { id: 1, src: '/lab.jpeg', alt: '研究室での活動', description: '研究活動' },
    { id: 2, src: '/business.jpeg', alt: 'ビジネスミーティング', description: '仕事の様子' },
    { id: 3, src: '/daily.jpeg', alt: '日常生活', description: '日々の瞬間' },
    { id: 4, src: '/ski.jpeg', alt: 'スキー', description: 'アウトドア活動' }
  ];

  return (
    <section className={`photos-section ${isVisible ? 'visible' : ''}`} id="photos">
      <h2>フォトギャラリー</h2>
      <div className="photos-grid">
        {photos.map((photo, index) => (
          <div 
            className="photo-card" 
            key={photo.id}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={`photo-container ${photo.id === 2 ? 'business' : ''}`}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="photo-overlay">
                <p>{photo.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Photos;