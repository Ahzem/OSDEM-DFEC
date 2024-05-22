import { Fragment } from 'react';
import '../css/Footer.css'; // Ensure to create and adjust the CSS file path as needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo/dfec-logo-new.png'
import DownloadLink from './Download.jsx';

const Footer = () => {
  return (
    <Fragment>
    <footer id='contact'>
        <div className="footer-container">
            <div className="footer-section quick-links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#latest-news">Latest News</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#vision-mission">Vision & Mission</a></li>
                    <li><a href="#services">Our Services</a></li>
                    <li><a href="#team">Our Team</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#contribute">Contribute Now</a></li>
                    <DownloadLink />
                    <li><a href="https://www.minhathschool.com" target="_blank">Minhath National School</a></li>
                </ul>
            </div>
            <div className="footer-section contact-us">
                <h3>Contact Us</h3>
                <table>
                    <tr>
                        <td>Mr. M.R Ruzaik:</td>
                        <td><a href="tel:+94 77 515 4754"> <FontAwesomeIcon icon={faPhone} /> +94 77 515 4754 </a></td>
                    </tr>
                    <tr>
                        <td>Mr. M.A.M Mashahir:</td>
                        <td><a href="tel:+94 77 010 1477"> <FontAwesomeIcon icon={faPhone} /> +94 77 010 1477 </a></td>
                    </tr>
                    <tr>
                        <td>Al-Haj Nasar:</td>
                        <td><a href="tel:+94 77 748 4515"> <FontAwesomeIcon icon={faPhone} /> +94 77 748 4515 </a></td>
                    </tr>
                    <tr>
                        <td>Al-Haj Sijawudeen:</td>
                        <td><a href="tel:+94 71 604 0807"> <FontAwesomeIcon icon={faPhone} /> +94 71 604 0807 </a></td>
                    </tr>
                    <tr>
                        <td>Al-Haj Athhar:</td>
                        <td><a href="tel:+94 77 761 5899"> <FontAwesomeIcon icon={faPhone} /> +94 77 761 5899 </a></td>
                    </tr>
                </table>
            </div>
            <div className="footer-section">
                <img src={logo} alt="DFEC Logo" className="footer-logo" />
                <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:dfec.dikwella@gmail.com">dfec.dikwella@gmail.com</a></p>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <a href="https://maps.app.goo.gl/YKum1UCVDA33W2ch9">Yonakapura, Beliatta R'd, Dikwella</a></p>
                <div className="social-links">
                    <h3>Follow Us</h3>
                    <a href="https://www.facebook.com/yourpage" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://www.linkedin.com/yourpage" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://www.youtube.com/yourpage" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
            </div>
        </div>
    </footer>
    </Fragment>
  );
};


export default Footer;
