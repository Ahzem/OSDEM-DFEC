import { Fragment } from 'react';
import '../css/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {
  return (
    <Fragment>
      <nav className='nav' data-aos="fade-down">
        <div className="menu-icon">
          <div className='menu-bar' onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className='fa-bars' />
          </div>
          <div className='menu-img'>
            <img src="https://i.imghippo.com/files/vGNyR1716860602.png" alt="logo" />
          </div>
        </div>
          <div className="menu" >
            <a href="#about">about us</a>
            <a href="#vision-mission">vision & mission</a>
            <a href="#services">our services</a>
            <a href="#gallery">gallery</a>
            <a href="#team">our team</a>
            <a href="#contact">contact us</a>
          </div>
    </nav> 
  </Fragment>
  )
}

function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('open');
}
