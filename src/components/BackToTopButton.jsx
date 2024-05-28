import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import '../css/BackToTopButton.css';

const BackToTopButton = () => {
  useEffect(() => {
    const backToTopButton = document.getElementById('back-to-top');

    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button id="back-to-top" onClick={scrollToTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default BackToTopButton;
