import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Reviews.css';

export const Reviews = () => {
  const [googleReviews, setGoogleReviews] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchGoogleReviews();
  }, []);

  const slideLeft = () => {
    if (index > 0) {
      setIndex(index - 3);
    }
  };

  const slideRight = () => {
    if (index < googleReviews.length - 3) {
      setIndex(index + 3);
    }
  };

  const fetchGoogleReviews = async () => {
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJbV3HCcc34ToRP0QS5s_EOTI&fields=reviews&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`);
      console.log('Google Reviews Response:', response.data);
      if (response.data.result && response.data.result.reviews) {
        setGoogleReviews(response.data.result.reviews);
      } else {
        setErrorMessage('No reviews found');
      }
    } catch (error) {
      console.error('Error fetching Google reviews:', error);
      setErrorMessage('Error fetching reviews');
    }
  };  

  return (
    <Fragment>
      <section id="reviews" className="section1" data-aos="fade-up">
        <div className='reviews-title'>
          <div className="horizontal-line"></div>
          <h2 className="section-title1">REVIEWS</h2>
          <div className="horizontal-line"></div>
        </div>
        <div className="reviews-container">
          {googleReviews.length > 0 ? (
            googleReviews.slice(index, index + 3).map((review, reviewIndex) => (
              <div key={reviewIndex} className="review">
                <h3>{review.author_name}</h3>
                <small>Rating: {review.rating}</small>
                <p>{review.text}</p>
              </div>
            ))
          ) : (
            <p>{errorMessage}</p>
          )}
        </div>
        <div className="add-review-container">
          <button className='slide-left-btn' onClick={slideLeft}>{'<'}</button>
          <a href="https://maps.google.com/?cid=3619140172766135359" target="_blank" rel="noopener noreferrer">
            <button className="add-review-btn">+ Add Review</button>
          </a>
          <button className='slide-right-btn' onClick={slideRight}>{'>'}</button>
        </div>
      </section>
    </Fragment>
  );
};