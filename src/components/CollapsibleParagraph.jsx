import { useState } from 'react';
import PropTypes from 'prop-types';

const CollapsibleParagraph = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const shortText = (
    <div>
      {text.props.children.slice(0, maxLength)}
      <span>...</span>
    </div>
  );

  const showButton = text.props.children.length > maxLength;

  return (
    <div>
      {isExpanded ? text : shortText}
      {showButton && (
        <button
            className="learn-more"
            onClick={toggleExpansion}>
          {isExpanded ? 'Show Less' : 'Learn More'}
        </button>
      )}
    </div>
  );
};

export default CollapsibleParagraph;


CollapsibleParagraph.propTypes = {
    text: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
};