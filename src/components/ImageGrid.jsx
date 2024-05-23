import { useState } from 'react';
import propTypes from 'prop-types';

const ImageGrid = ({ section }) => {
  const [showAllImages, setShowAllImages] = useState(false);
  const imagesToShow = showAllImages ? section.images : section.images.slice(0, 4);

  const handleShowMoreImages = () => {
    setShowAllImages(!showAllImages);
  };

  return (
    <div className="image-grid">
      <div className="image-grid-content">
        {imagesToShow.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
        {!showAllImages && section.images.length > 4 && (
          <div className="more-images">
            <span>+{section.images.length - 4}</span>
          </div>
        )}
      </div>
      {section.images.length > 4 && (
        <button className="show-more-images" onClick={handleShowMoreImages}>
          {showAllImages ? 'Show Less Images' : 'Show More Images'}
        </button>
      )}
    </div>
  );
};

export default ImageGrid;

ImageGrid.propTypes = {
    section: propTypes.shape({
        title: propTypes.string.isRequired,
        images: propTypes.arrayOf(
        propTypes.shape({
            src: propTypes.string.isRequired,
            alt: propTypes.string.isRequired
        })
        ).isRequired
    }).isRequired
    };
