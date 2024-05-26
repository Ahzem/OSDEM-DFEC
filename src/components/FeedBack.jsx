import { Fragment, useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/FeedBack.css';

export const FeedBack = () => {
  const [message, setMessage] = useState('');
  const [isFormVisible, setFormVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      'service_zk9f84a',      // Replace with your EmailJS service ID
      'template_bartgrb',    // Replace with your EmailJS template ID
      event.target,
      'ggSehWtA50vGVDqoG'    // Replace with your EmailJS Public Key (User ID)
    ).then(
      (result) => {
        setMessage('The message was sent successfully');
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
      <button className='feedback-btn' onClick={toggleForm}>Feedback</button>
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