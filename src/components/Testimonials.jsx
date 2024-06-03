import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Testimonials.css';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    city: '',
    stream: '',
    examYear: '',
    review: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
        try {
            const response = await fetch('https://your-backend-url.onrender.com/reviews');
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
        const response = await fetch('https://your-backend-url.onrender.com/reviews', {
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
        } else {
            setMessage('There was an error sending the message');
        }
    } catch (error) {
        console.error('Error:', error);
        setMessage('There was an error sending the message');
    }
};

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="testimonials" className="testimonials-section section">
      <h2 className="section-title">Student Reviews</h2>
      <div className="testimonials-container">
        {reviews.slice(0, 3).map((review, index) => (
          <div key={index} className="testimonial">
            <h3>{review.studentName}</h3>
            <p><strong>City:</strong> {review.city}</p>
            <p><strong>Stream:</strong> {review.stream}</p>
            <p><strong>Exam Year:</strong> {review.examYear}</p>
            <p>{review.review}</p>
          </div>
        ))}
        <div className="slider-container">
          <div className="slider">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`slide ${index === currentIndex ? 'active' : ''}`}
              >
                <h3>{review.studentName}</h3>
                <p><strong>City:</strong> {review.city}</p>
                <p><strong>Stream:</strong> {review.stream}</p>
                <p><strong>Exam Year:</strong> {review.examYear}</p>
                <p>{review.review}</p>
              </div>
            ))}
          </div>
          <div className="controls">
            <button onClick={() => setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length)}>&lt;</button>
            <button onClick={() => setCurrentIndex((currentIndex + 1) % reviews.length)}>&gt;</button>
          </div>
        </div>
        <button className="add-review-btn" onClick={() => setShowForm(!showForm)}>+</button>
        {showForm && (
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <input type="text" name="studentName" placeholder="Your Name" required onChange={handleChange} />
              <input type="text" name="city" placeholder="City" required onChange={handleChange} />
              <input type="text" name="stream" placeholder="Stream" required onChange={handleChange} />
              <input type="number" name="examYear" placeholder="Exam Year" required onChange={handleChange} />
              <textarea name="review" placeholder="Write your review" required onChange={handleChange}></textarea>
              <button type="submit">Submit Review</button>
            </form>
            {message && <div className="alert">{message}</div>}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
