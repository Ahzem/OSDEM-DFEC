import { useEffect, useState} from 'react';
import '../css/Counter.css';
import 'aos/dist/aos.css';
import propTypes from 'prop-types';

const Counter = ({ number, title }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animateCount = () => {
      let currentCount = 0;
      const intervalId = setInterval(() => {
        currentCount += 1;
        setCount(currentCount);
        if (currentCount >= number) {
          clearInterval(intervalId);
        }
      }, 40);
      return () => clearInterval(intervalId); 
    };

    animateCount();
  }, [number]); 

  return (
    <div className="counter__item"  data-aos="fade-up">
      <h2 className="counter_num">{count}+</h2>
      <p>{title}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="counter section1">
      <Counter number={4} title="Future Engineers in training" />
      <Counter number={160} title="Students impacted by our project" />
      <Counter number={75} title="Current scholar students" />
      <Counter number={50} title="Talent available for universities" />
    </div>
  );
};

export default App;

Counter.propTypes = {
  number: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
};