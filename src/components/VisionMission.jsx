import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faBullseye } from '@fortawesome/free-solid-svg-icons'
import '../css/VisionMission.css'

export const VisionMission = () => {
  return (
    <section id="vision-mission" className="section1">
        <div className="vision-mission-grid">
            <div className="vision" data-aos="fade-right">
                <div className="title">
                    <h2 className="section-title">Our Vision</h2>
                    <FontAwesomeIcon icon={faEye} className="icon" />
                </div>
                <p>Our vision is to create a world where all students have access to quality education, regardless of their background. We believe that education is a powerful tool for social change and empowerment.</p>
            </div>
            <div className="mission" data-aos="fade-left">
                <div className="title">
                    <h2 className="section-title">Our Mission</h2>
                    <FontAwesomeIcon icon={faBullseye} className="icon" />
                </div>
                <p>Our mission is to provide underprivileged students with the resources and support they need to succeed academically and personally. We are committed to fostering a culture of learning, growth, and inclusivity.</p>
            </div>
        </div>
    </section>
  )
}
