import '../css/Footer.css'; // Ensure to create and adjust the CSS file path as needed

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-bottom">
        <p>&copy; 2024 OSDEM DFEC Science Project. All Rights Reserved.</p>
        <p>
          Designed and developed by{' '}
          <a href="https://www.ahzem.design" target="_blank" rel="noopener noreferrer">
            Ahzem
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
