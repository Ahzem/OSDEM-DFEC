import { useState } from 'react';
import sections from './ImagesGallery';
import '../css/Gallery.css';

const Gallery = () => {
  const [activeSection, setActiveSection] = useState(null);

  const openImageSection = (index) => {
    setActiveSection(index);
  };

  const closeImageSection = () => {
    setActiveSection(null);
  };

  return (
    <section className="gallery section">
    <h2 className="section-title">Gallery</h2>
        <div className="gallery-grid">
            {sections.map((section, index) => (
                <div key={index} className="gallery-colage">
                    <div className="colage-title">
                        <h2>{section.title}</h2>
                        <p>{`13th March 2021`}</p>
                            <div className="colage-img">
                                {section.images.slice(0, 4).map((image, imgIndex) => (
                                <img key={imgIndex} src={image.src} alt={image.alt} />
                                ))}
                            </div>
                            <div className="see-more-btn">
                                <button onClick={() => openImageSection(index)}>See More</button>
                            </div>
                        {activeSection === index && (
                        <div className="all-images-model image_section" style={{ display: 'block' }}>
                            <span className="close" onClick={closeImageSection}>&times;</span>
                            <h2>{section.title}</h2>
                            <div className="all-images model-content">
                                {section.images.map((image, imgIndex) => (
                                <img key={imgIndex} src={image.src} alt={image.alt} />
                                ))}
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </section>
);
};

export default Gallery;
