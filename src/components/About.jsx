import { Fragment } from 'react';
import '../css/about.css';
import CollapsibleParagraph from './CollapsibleParagraph.jsx';

const longText = (
  <div>
    <p>
      The OSDEM-DFEC Science Project is a transformative educational initiative dedicated
      to providing quality education and support to underprivileged students in Sri Lanka.
      Established in 2018 through a partnership between MR/Minhath National School, Dickwella,
      and OSDEM (Organization for Social Development, Empowerment & Mercy), our mission is to
      empower students by breaking down barriers to education in Physical and Biological Sciences.
    </p>
    <p>
      We offer comprehensive classes, safe accommodation, and personalized guidance to ensure
      students thrive academically and personally. Our program includes seminars and workshops
      by experts, providing students with broader learning experiences and potential career insights.
    </p>
    <p>
      Our dedicated team of educators and staff are committed to fostering a nurturing and inclusive
      environment. By equipping students with education and support, we aim to cultivate future leaders
      and innovators who will drive social progress in their communities.
    </p>
    <p>
      Join us in our mission to create lasting change through education.
      Together, we can empower the next generation and build a more equitable society.
    </p>
  </div>
);

export const About = () => {
  return (
    <Fragment>
      <section id="about" className="section" data-aos="fade-up">
        <h2 className="section-title">About Us</h2>
        <img src="https://i.imghippo.com/files/9ZTME1716716161.png" alt="Logo" className="about-logo" />
        <CollapsibleParagraph text={longText} maxLength={1} />
      </section>
    </Fragment>
  );
};

export default About;
