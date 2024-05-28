import { Fragment } from 'react';
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import DownloadLink from './Download';

const Footer = () => {
  return (
    <Fragment>
    <footer id='contact'>
        <div className="footer-container">
            <div className="footer-section quick-links">
                <h3>Quick Links</h3>
                <div className="footer-links">
                    <ul className='left'>
                        <li><a href="#latest-news">Latest News</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#vision-mission">Vision & Mission</a></li>
                        <li><a href="#services">Our Services</a></li>
                        <li><a href="#team">Our Team</a></li>
                    </ul>
                    <ul className='right'>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#contribute">Contribute Now</a></li>
                        <DownloadLink />
                        <li><a href="https://web.facebook.com/minhath.nationalschool" target="_blank">Minhath National School</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-section contact-us">
                <h3>Contact Us</h3>
                <div className='contact-info'>
                    <ul className='left'>
                        <li>Mr. M.R Ruzaik:</li>
                        <li>Mr. M.A.M Mashahir:</li>
                        <li>Al-Haj Nasar:</li>
                        <li>Al-Haj Sijaudeen:</li>
                        <li>Al-Haj Athhar:</li>
                    </ul>
                    <ul className='right'>
                        <li><a href="tel:+94 77 515 4754"> <FontAwesomeIcon icon={faPhone} /> +94 77 515 4754 </a></li>
                        <li><a href="tel:+94 77 010 1477"> <FontAwesomeIcon icon={faPhone} /> +94 77 010 1477 </a></li>
                        <li><a href="tel:+94 77 748 4515"> <FontAwesomeIcon icon={faPhone} /> +94 77 748 4515 </a></li>
                        <li><a href="tel:+94 71 604 0807"> <FontAwesomeIcon icon={faPhone} /> +94 71 604 0807 </a></li>
                        <li><a href="tel:+94 77 761 5899"> <FontAwesomeIcon icon={faPhone} /> +94 77 761 5899 </a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-section logo">
                <img src="https://i.imghippo.com/files/9ZTME1716716161.png" alt="DFEC Logo" className="footer-logo" />
                <p><b>OSDEM-DFEC Science Project</b></p>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <a href="https://maps.app.goo.gl/YKum1UCVDA33W2ch9">Yonakapura, Beliatta R'd, Dikwella</a></p>
                <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:dfec.dikwella@gmail.com">dfec.dikwella@gmail.com</a></p>
                <div className="social-links">
                    <a href="https://www.facebook.com/DFEC.DIKWELLA" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://www.linkedin.com/company/osdem-dfec-science-project/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://www.youtube.com/@dfec.scienceproject" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
            </div>
        </div>
        <div className='auth'>
            <div className='horizontal-line'></div>
            <p>2024 © All Rights Reserved by OSDEM-DFEC Science Project</p>
            <p>Design & Developed by <a href="https://ahzem.design" target="_blank">Ahzem</a></p>
        </div>
    </footer>
    </Fragment>
  );
};


export default Footer;
