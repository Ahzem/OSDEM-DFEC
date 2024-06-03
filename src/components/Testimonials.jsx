import React, { Fragment, useEffect, useState } from 'react';
import '../css/Testimonials.css';

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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 15000);
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
          studentName: event.target.name.value,
          city: event.target.city.value,
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


  return (
    <Fragment>
    <section id="testimonials" className="section1" data-aos="fade-up">
      <h2 className="section-title">Student Reviews</h2>
      <div className="testimonials-container">
        {reviews.slice(currentIndex, currentIndex + 3).map((review, index) => (
          <div key={index} className="testimonial">
            <h4>{review.studentName}</h4>
            <small>{review.city}, {review.stream} ({review.examYear})</small>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
      <div className="testimonial-navigation">
        <button onClick={handlePrev}>Previous</button>
        <button className="review-btn" onClick={() => setShowForm(true)}>+ Add Review</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </section>
      {showForm && (
        <div className="feedback-div">
          <div className="feedback-form">
            <span className="close" onClick={() => setShowForm(false)}>&times;</span>
            <form onSubmit={handleSubmit}>
              <p className="note">Only students who have completed the A/L in our project can leave a review.</p>
              <input type="text" name="name" placeholder="Your Name" required />
              <input className="input-small" type="text" name="city" placeholder="City" required />
              <input className="input-small" type="number" name="indexNo" placeholder="Index No" required />
              {/* dropdown for select the stream 'Biological science' or 'Physical science' */}
                <select name="stream" required>
                    <option value="">Select Stream</option>
                    <option value="Biological Science">Biological Science</option>
                    <option value="Physical Science">Physical Science</option>
                </select>
                {/*select the exam sit year from 2020*/}
                <select className="exam-year" required>
                    <option value="">Select Exam Year</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2021">2022</option>
                    <option value="2021">2023</option>
                    <option value="2021">2024</option>
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
