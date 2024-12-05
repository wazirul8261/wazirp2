import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Navigation Links */}
        <div style={styles.navLinks}>
          <a href="/about" style={styles.link}>About Us</a>
          <a href="/services" style={styles.link}>Services</a>
          <a href="/contact" style={styles.link}>Contact</a>
          <a href="/privacy-policy" style={styles.link}>Privacy Policy</a>
        </div>

        {/* Social Media Links */}
        <div style={styles.socialMedia}>
          <a href="https://facebook.com" target="https://www.instagram.com/hutasona/" rel="noopener noreferrer" style={styles.socialLink}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        {/* Copyright */}
        <div style={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'blue',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  navLinks: {
    marginBottom: '15px',
  },
  link: {
    margin: '0 10px',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
  },
  socialMedia: {
    marginBottom: '15px',
  },
  socialLink: {
    margin: '0 10px',
    color: '#fff',
    fontSize: '18px',
    textDecoration: 'none',
  },
  copyright: {
    fontSize: '14px',
  },
};

export default Footer;
