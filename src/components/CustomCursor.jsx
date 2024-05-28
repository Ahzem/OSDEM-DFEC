import { useEffect } from 'react';
import '../css/CustomCursor.css';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');

    const handleMouseMove = (e) => {
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';
    };

    const handleMouseOver = () => {
      cursor.classList.add('custom-cursor-hover');
    };

    const handleMouseOut = () => {
      cursor.classList.remove('custom-cursor-hover');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('.section, h1, a').forEach(link => {
      link.addEventListener('mouseover', handleMouseOver);
      link.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('.section, h1, a').forEach(link => {
        link.removeEventListener('mouseover', handleMouseOver);
        link.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return <div className="custom-cursor"></div>;
};

export default CustomCursor;
