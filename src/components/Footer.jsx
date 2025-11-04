import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { GiSparkles } from 'react-icons/gi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <GiSparkles className="footer-logo-icon" />
              <span className="footer-logo-text">Sparkly Cleaning</span>
            </div>
            <p className="footer-tagline">
              Your trusted partner for a cleaner, healthier space.
            </p>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <FaEnvelope className="footer-icon" />
                <span>contact@sparklycleaning.com</span>
              </div>
              <div className="footer-contact-item">
                <FaPhone className="footer-icon" />
                <span>(123) 456-7890</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Residential Cleaning</Link></li>
              <li><Link to="/services">Commercial Cleaning</Link></li>
              <li><Link to="/services">Deep Cleaning</Link></li>
              <li><Link to="/services">Move-In/Out Cleaning</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <FaMapMarkerAlt className="footer-icon" />
                <span>123 Clean St, Sparks City</span>
              </div>
              <p className="footer-hours">
                <strong>Business Hours:</strong><br />
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Sparkly Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

