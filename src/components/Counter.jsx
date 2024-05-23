import { useEffect } from 'react';
import '../css/Counter.css'; // Import CSS
import AOS from 'aos'; // Import AOS for scroll animations
import 'aos/dist/aos.css'; // Import AOS styles

function Counter() {
  
    useEffect(() => {
      AOS.init({
        duration: 1200, // Animation duration
        once: true, // Whether animation should happen only once
      });
  
    }, []);
  
    return (
      <section className="counter section1">
        <div className="counter__item" data-aos="fade-up">
          <h2 className="counter_num">4</h2>
          <p>Future Engineers & Doctors in training</p>
        </div>
        <div className="counter__item" data-aos="fade-up">
          <h2 className="counter_num">220</h2>
          <p>Students impacted by our project</p>
        </div>
        <div className="counter__item" data-aos="fade-up">
          <h2 className="counter_num">100</h2>
          <p>Current scholar students</p>
        </div>
        <div className="counter__item" data-aos="fade-up">
          <h2 className="counter_num">110</h2>
          <p>Talent available for universities</p>
        </div>
      </section>
    );
  }
  
  export default Counter;
