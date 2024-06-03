import { Fragment, useEffect, useState } from 'react';
import '../css/Testimonials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://osdem-dfec.onrender.com/reviews');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://osdem-dfec.onrender.com/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          studentName: event.target.name.value || 'Anonymous',
          city: event.target.city.value,
          indexNo: event.target.indexNo.value,
          stream: event.target.stream.value,
          examYear: event.target.examYear.value,
          review: event.target.review.value
        })
      });

      if (response.ok) {
        setMessage('The message was sent successfully');
        event.target.reset();
        setShowForm(false);
        const updatedReviews = await response.json();
        setReviews([...reviews, updatedReviews]);
      } else {
        setMessage('There was an error sending the message');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('There was an error sending the message');
    }
  };

  const getClassName = (index) => {
    const relativeIndex = (index - currentIndex + reviews.length) % reviews.length;
    if (relativeIndex === 0) {
      return 'testimonial previous';
    } else if (relativeIndex === 1) {
      return 'testimonial active';
    } else if (relativeIndex === 2) {
      return 'testimonial next';
    } else {
      return 'testimonial';
    }
  };

  return (
    <Fragment>
      <section id="testimonials" className="section1" data-aos="fade-up">
        <h2 className="section-title">Student Reviews</h2>
        <div className="testimonials-container">
          {reviews.slice(currentIndex, currentIndex + 3).map((review, index) => (
            <div
              key={index}
              className={getClassName(index)}
            >
              <h4>{review.studentName}</h4>
              <small>{review.city}</small>
              <small>{review.stream} ({review.examYear} Batch)</small>
              <p>&quot;{review.review}&quot;</p>
            </div>
          ))}
        </div>
        <div className="testimonial-navigation">
          <button onClick={handlePrev}><FontAwesomeIcon icon={faChevronLeft} /></button>
          <button className="review-btn" onClick={() => setShowForm(true)}>+ Add Review</button>
          <button onClick={handleNext}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </section>
      {showForm && (
        <div className="feedback-div">
          <div className="feedback-form">
            <span className="close-stdnt" onClick={() => setShowForm(false)}>&times;</span>
            <form onSubmit={handleSubmit}>
              <h2>Leave a Review</h2>
              <p>This form is for students who have studied in our project. Your reviews are the proof of our efforts and success.</p>
              <input type="text" name="name" placeholder="Your Name" required />
              <small>If you prefer to remain anonymous, you can leave this field blank.</small>
              <input className="input-small" type="text" name="city" placeholder="Hometown" required />
              <input className="input-small" type="number" name="indexNo" placeholder="A/L Index No" required />
              <select name="stream" required>
                <option value="">Select Stream</option>
                <option value="Biological Science">Biological Science</option>
                <option value="Physical Science">Physical Science</option>
              </select>
              <select name="examYear" className="exam-year" required>
                <option value="">Select Exam Year</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
              <textarea name="review" placeholder="Your Review" required></textarea>
              <button type="submit">Submit Review</button>
            </form>
            {message && <div className="alert">{message}</div>}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Testimonials;
