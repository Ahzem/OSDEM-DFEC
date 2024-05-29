import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/BackToTopButton.css';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';
// import { faVideo, faSun, faMoon, faArrowUp} from '@fortawesome/free-solid-svg-icons';


// //when the user clicks on the video button, the video will be displayed or hidden.
// // when the user clicks on the light-dark mode button, the background color of the body will be changed to black or white.
// // after the user clicks light-dark mode button, the video will be hidden and then again the user clicks on the video button, the video will be displayed.
// const vdo = () => {
//   const video = document.getElementById('bg-video');
//   const overlay = document.querySelector('.video-overlay');
//   const body = document.body;
//   if (video.style.display === 'block') {
//     video.style.display = 'none';
//     overlay.style.display = 'none';
//     body.style.overflow = 'auto';
//   } else {
//     video.style.display = 'block';
//     overlay.style.display = 'block';
//     body.style.overflow = 'hidden';
//   }
// }

// //when the user clicks on the light-dark mode button, the background color of the body will be changed to black or white.
// // when the user clicks on the light-dark mode button, the sun icon will be displayed or hidden.
// // when the user clicks on the light-dark mode button, the moon icon will be displayed or hidden.
// // when the user clicks on the light-dark mode button, the video will be hidden.

// const lightMode_darkmode = () => {
//   const sun = document.getElementById('sun');
//   const moon = document.getElementById('moon');
//   const overlay = document.querySelector('.video-overlay');
//   const cursor = document.querySelector('.custom-cursor');
//   const body = document.body;
//   if (body.classList.contains('dark-mode')) {
//     body.classList.remove('dark-mode');
//     body.style.transition = 'background-color 0.5s ease';
//     body.style.backgroundColor = 'white';
//     body.style.color = 'black';
//     sun.style.display = 'none';
//     moon.style.display = 'block';
//     overlay.style.display = 'none';
//     cursor.style.backgroundColor = 'black';
//   } else {
//     body.classList.add('dark-mode');
//     body.style.transition = 'background-color 0.5s ease';
//     body.style.backgroundColor = 'black';
//     body.style.color = 'white';
//     moon.style.display = 'none';
//     sun.style.display = 'block';
//     overlay.style.display = 'none';
//   }
// }


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
    <div>
      <button id="back-to-top" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      {/* <div className='prefference'>
        <button id='vdo' onClick={vdo}>
          <FontAwesomeIcon icon={faVideo} />
        </button>
        <button id='light-dark-mode' onClick={lightMode_darkmode}>
          <FontAwesomeIcon id='sun' icon={faSun} />
          <FontAwesomeIcon id='moon' icon={faMoon} />
        </button>
      </div> */}
    </div>
  );
};

export default BackToTopButton;
