import AOS from 'aos';
import 'aos/dist/aos.css';

const initAOS = () => {
  AOS.init({
    duration: 1600, // Animation duration in milliseconds
    once: false, // Whether animation should happen only once - while scrolling down
    mirror: true, // Whether elements should animate out while scrolling past them
  });
};

export default initAOS;
