import { useEffect, useState } from 'react';
import '../css/Testimonials.css';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false);

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
    <section id="testimonials" className="section" data-aos="fade-up">
      <h2 className="section-title">Student Reviews</h2>
      <div className="testimonials-container">
        {reviews.slice(0, 3).map((review, index) => (
          <div key={index} className="testimonial">
            <p>{review.review}</p>
            <h4>{review.studentName}</h4>
            <small>{review.city}, {review.stream} ({review.examYear})</small>
          </div>
        ))}
        {reviews.length > 3 && (
          <div className="testimonial-slider">
            {reviews.slice(3).map((review, index) => (
              <div key={index} className="testimonial">
                <p>{review.review}</p>
                <h4>{review.studentName}</h4>
                <small>{review.city}, {review.stream} ({review.examYear})</small>
              </div>
            ))}
          </div>
        )}
      </div>
      <button className="feedback-new-btn" onClick={() => setShowForm(true)}>+ Add Review</button>
      {showForm && (
        <div className="feedback-new-div">
          <div className="feedback-new-form">
            <span className="close" onClick={() => setShowForm(false)}>&times;</span>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="text" name="city" placeholder="City" required />
              <input type="text" name="stream" placeholder="Stream" required />
              <input type="number" name="examYear" placeholder="Exam Year" required />
              <textarea name="review" placeholder="Your Review" required></textarea>
              <button type="submit">Submit Feedback</button>
            </form>
            {message && <div className="alert">{message}</div>}
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
