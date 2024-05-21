import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faHome, faChalkboardTeacher, faLaptop, faUsers, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import '../css/Services.css'

export const Services = () => {
  return (
    <section id="services" className="section1">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
            <div className="service-item">
                <FontAwesomeIcon icon={faBook} className="icon" />
                <h3>Comprehensive Science Education</h3>
                <p>Providing a thorough and in-depth education in science.</p>
            </div>
            <div className="service-item">
                <FontAwesomeIcon icon={faHome} className="icon" />
                <h3>Free & Safe Accommodation</h3>
                <p>Ensuring safe and secure living arrangements for students.</p>
            </div>
            <div className="service-item">
                <FontAwesomeIcon icon={faChalkboardTeacher} className="icon" />
                <h3>Expert Guidance</h3>
                <p>Guidance from experienced and knowledgeable educators.</p>
            </div>
            <div className="service-item">
                <FontAwesomeIcon icon={faLaptop} className="icon" />
                <h3>Free Self-Learning Facilities</h3>
                <p>Access to resources and spaces for independent learning.</p>
            </div>
            <div className="service-item">
                <FontAwesomeIcon icon={faUsers} className="icon" />
                <h3>Seminars and Workshops</h3>
                <p>Interactive seminars and workshops conducted by experts.</p>
            </div>
            <div className="service-item">
                <FontAwesomeIcon icon={faGraduationCap} className="icon" />
                <h3>Personalized Support</h3>
                <p>Individualized support and mentorship for students.</p>
            </div>
        </div>
    </section>
  )
}
