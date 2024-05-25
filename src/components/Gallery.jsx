import { useState, useEffect, useRef } from 'react';
import sections from './ImagesGallery';
import '../css/Gallery.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const Gallery = () => {
  const [activeSection, setActiveSection] = useState(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        closeImageSection();
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    if (activeSection !== null && galleryRef.current) {
      galleryRef.current.fullScreen();
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [activeSection]);

  const openImageSection = (index) => {
    setActiveSection(index);
  };

  const closeImageSection = () => {
    setActiveSection(null);
  };

  return (
    <section id='gallery' className="section1" data-aos="fade-up">
      <h2 className="section-title">Gallery</h2>
      <div className="gallery-grid">
        {sections.map((section, index) => (
          <div key={index} className="gallery-colage" data-aos="fade-up">
            <div className="colage-title">
              <h2>{section.title}</h2>
              <p>{section.date}</p>
              <div className="colage-img">
                {section.images.slice(0, 3).map((image, imgIndex) => (
                  <img key={imgIndex} src={image.src} alt={image.alt} />
                ))}
                {section.images.length > 4 && (
                    <div className="more-images" onClick={() => openImageSection(index)}>
                        <p>+{section.images.length - 4}</p>
                        <img src={section.images[3].src} alt={section.images[3].alt} />
                    </div>
                )}
              </div>
              <div className="see-more-btn">
                <button onClick={() => openImageSection(index)}>See More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {activeSection !== null && (
        <div className="image-gallery-container">
          <div className="gallery-overlay" onClick={closeImageSection}></div>
          <ImageGallery 
            ref={galleryRef}
            items={sections[activeSection].images.map(img => ({ original: img.src, thumbnail: img.src }))}
            showFullscreenButton={true}
            showPlayButton={false}
            additionalClass="custom-gallery"
          />
          <button className="close-gallery" onClick={closeImageSection}>&times; Close</button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
