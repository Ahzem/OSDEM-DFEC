import { Fragment } from 'react'
import '../css/OurTeam.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import PropTypes from 'prop-types';
import TeamData from '../assets/TeamData'

function TeamCard(props) {
    return (
        <Fragment>
            <div className="team-member" data-aos="fade-up">
                <img src={props.image} alt={props.name} />
                <div className="team-info">
                    <h3>{props.name}</h3>
                    <p>{props.subject}</p>
                    <ul className="team-education">
                        {props.education.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="social-icons">
                    <a href={props.facebook}><FontAwesomeIcon icon={faFacebook} className="fab fa-facebook" /></a>
                    <a href={props.twitter}><FontAwesomeIcon icon={faTwitter} className="fab fa-twitter" /></a>
                    <a href={props.linkedin}><FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin" /></a>
                </div>
            </div>
        </Fragment>
    );
}

export const OurTeam = () => {
    return (
        <section id="team" className="section">
            <h2 className="section-title">Our Team</h2>
            <div className="team-grid">
                {TeamData.map((member, index) => (
                    <TeamCard
                        key={index}
                        name={member.name}
                        subject={member.subject}
                        education={member.education}
                        image={member.image}
                        facebook={member.facebook}
                        twitter={member.twitter}
                        linkedin={member.linkedin}
                    />
                ))}
            </div>
        </section>
    );
};

export default OurTeam;


TeamCard.propTypes = {
    name: PropTypes.string,
    subject: PropTypes.string,
    education: PropTypes.array,
    image: PropTypes.string,
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    linkedin: PropTypes.string
};
