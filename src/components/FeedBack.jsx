import { Fragment, useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/FeedBack.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const FeedBack = () => {
  const [message, setMessage] = useState('');
  const [isFormVisible, setFormVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;

    emailjs.sendForm(
      'service_zk9f84a',      // EmailJS service ID
      'template_bartgrb',    //  EmailJS template ID
      event.target,
      'ggSehWtA50vGVDqoG'    //EmailJS Public Key (User ID)
    ).then(
      (result) => {
        setMessage(`Thank you for your feedback, ${name}!`);
        console.log('EmailJS Result:', result.text);
        event.target.reset();
      },
      (error) => {
        setMessage('There was an error sending the message');
        console.error('EmailJS Error:', error);
      }
    );
  };

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <Fragment>
      <div className='social-media'>
        <div className='vertical-line top'></div>
          <a href='https://www.facebook.com/DFEC.DIKWELLA/' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faFacebook} />
            <span>Follow us on Facebook</span>
          </a>
          <a href='https://www.linkedin.com/company/osdem-dfec-science-project/' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} />
            <span>Follow us on LinkedIn</span>
          </a>
          <a href='https://www.youtube.com/@dfec.scienceproject' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faYoutube} />
            <span>Follow us on YouTube</span>
          </a>
        <div className='vertical-line bottom'></div>
      </div>
      <button className='feedback-btn' onClick={toggleForm}>Feedback
      <span className='feedback-text'>Your feedback is important to us</span></button>
      {isFormVisible && (
        <div className="feedback-div">
          <div className="feedback-form">
            <span className="close" onClick={toggleForm}>&times;</span>
            <form onSubmit={handleSubmit}>
                <h2>Feedback Form</h2>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" required></textarea>
              <button type="submit">Submit Feedback</button>
            </form>
            {message && <div className="alert">{message}</div>}
          </div>
        </div>
      )}
    </Fragment>
  );
};