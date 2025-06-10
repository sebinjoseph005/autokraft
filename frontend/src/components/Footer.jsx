import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/assets/images/autokraft.jpg" alt="AutoKraft Logo" />
          <h3>AutoKraft</h3>
        </div>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://www.instagram.com/aa_autokraft?igsh=Z2pnNzJtcXJ0eHV1" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
      <p className="copyright">&copy; 2023 AutoKraft. All rights reserved.</p>
    </footer>
  );
};

export default Footer;