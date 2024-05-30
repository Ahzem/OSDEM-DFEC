import '../css/Preferrence.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Fragment, useState } from 'react';

export const Preferrence = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleVideo = () => {
    const video = document.getElementById('bg-video');
    const overlay = document.querySelector('.video-overlay');
    const body = document.body;

    if (isVideoVisible) {
      video.style.display = 'none';
      overlay.style.display = 'none';
      body.classList.remove('dark-mode');
      body.classList.remove('light-mode');
    } else {
      video.style.display = 'block';
      overlay.style.display = 'block';
      body.classList.remove('dark-mode');
      body.classList.remove('light-mode');
    }

    setIsVideoVisible(!isVideoVisible);
  };

  const toggleLightDarkMode = () => {
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');
    const video = document.getElementById('bg-video');
    const overlay = document.querySelector('.video-overlay');
    const cursor = document.querySelector('.custom-cursor');
    const body = document.body;

    if (isDarkMode) {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      body.style.transition = 'background-color 0.5s ease';
      body.style.backgroundColor = 'white';
      body.style.color = 'black';
      sun.style.display = 'none';
      moon.style.display = 'block';
      overlay.style.display = 'none';
      cursor.style.backgroundColor = 'black';
      video.style.display = 'none';
    } else {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
      body.style.transition = 'background-color 0.5s ease';
      body.style.backgroundColor = 'black';
      body.style.color = 'white';
      moon.style.display = 'none';
      sun.style.display = 'block';
      overlay.style.display = 'none';
      cursor.style.backgroundColor = 'white';
      video.style.display = 'none';
    }

    setIsDarkMode(!isDarkMode);
  };

  return (
    <Fragment>
      <div className='prefference'>
        <button id='vdo' onClick={toggleVideo}>
          <FontAwesomeIcon icon={faVideo} />
        </button>
        <button id='light-dark-mode' onClick={toggleLightDarkMode}>
          <FontAwesomeIcon id='sun' icon={faSun} style={{ display: isDarkMode ? 'block' : 'none' }} />
          <FontAwesomeIcon id='moon' icon={faMoon} style={{ display: isDarkMode ? 'none' : 'block' }} />
        </button>
      </div>
    </Fragment>
  );
};

export default Preferrence;

