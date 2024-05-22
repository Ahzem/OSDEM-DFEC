import { Fragment } from 'react';
import '../css/NavBar.css';

export const NavBar = () => {
  return (
    <Fragment>
    <nav data-aos="fade-down">
    <div className="menu" >
      <a href="#about">about us</a>
      <a href="#vision-mission">vision & mission</a>
      <a href="#services">our services</a>
      <a href="#team">our team</a>
      <a href="#contact">contact us</a>
    </div>
  </nav> 
  </Fragment>
  )
}
