import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { NavBar } from './components/NavBar.jsx';
import { Header } from './components/Header.jsx';
import { Collobarate } from './components/Collobarate.jsx';
import { News } from './components/News.jsx';
import { OurTeam } from './components/OurTeam.jsx';
import { About } from './components/About.jsx';
import BackToTopButton from './components/BackToTopButton.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import { Contribute } from './components/Contribute.jsx';
import { Services } from './components/Services.jsx';
import { VisionMission } from './components/VisionMission.jsx';
import MouseScroll from './components/MouseScroll.jsx';
import Footer from './components/Footer.jsx';
import { Location } from './components/Location.jsx';
import GrowthChart from './components/GrowthChart.jsx';
import initAOS from './components/aos-init.js'; // Import the AOS initialization
import Counter from './components/Counter.jsx';
import Gallery from './components/Gallery.jsx';

const Main = () => {
  useEffect(() => {
    initAOS(); // Initialize AOS
  }, []);

  return (
    <React.StrictMode>
      <NavBar />
      <Header />
      <MouseScroll />
      <Collobarate />
      <News />
      <About />
      <Counter />
      <GrowthChart />
      <VisionMission />
      <Services />
      <Gallery />
      <OurTeam />
      <Contribute />
      <BackToTopButton />
      <CustomCursor />
      <Location />
      <Footer />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
