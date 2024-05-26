import { Fragment, useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/Contribute.css';

export const Contribute = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      'service_zk9f84a',      // Replace with your EmailJS service ID
      'template_ql2ehng',    // Replace with your EmailJS template ID
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

  return (
    <Fragment>
      <section id="contribute" className="section" data-aos="fade-up">
        <h2 className="section-title">Contribute Now</h2>
        <div className="contribute-div">
          <div className="contribute-info">
            <p>Join us in our mission to provide quality education to underprivileged students. Your contributions can make a significant difference. Contact us for more information on how you can help.</p>
            <p>Just fill out the form below and we will get back to you with more details on how you can contribute to the OSDEM-DFEC Science Project.</p>
          </div>
          <div className="contribute-form">
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <input type="tel" name="phone" placeholder="Your Mobile Number" required />
              <button type="submit">Contribute</button>
            </form>
            {message && <div className="alert">{message}</div>}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
