import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Information</h2>
          <div className="title-underline"></div>
        </div>

        <div className="contact-content">
          <div className="contact-intro">
            <h3 className="contact-heading">Let's collaborate on data-driven research!</h3>
            <p className="contact-description">
              I'm always interested in discussing research opportunities, collaborations, and innovative projects in data analytics and machine learning.
            </p>
          </div>

          <div className="contact-info-grid">
            <a href="mailto:shweta.sarkar.academic@gmail.com" className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h4 className="contact-label">Email</h4>
              <p className="contact-value">shweta.sarkar.academic@gmail.com</p>
            </a>

            <a href="tel:+447312129874" className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h4 className="contact-label">Phone</h4>
              <p className="contact-value">+44 7312129874</p>
            </a>

            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h4 className="contact-label">Location</h4>
              <p className="contact-value">Liverpool, Merseyside, United Kingdom</p>
            </div>

            <a 
              href="https://linkedin.com/in/shwetapooja" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-card"
            >
              <div className="contact-icon">
                <i className="fab fa-linkedin"></i>
              </div>
              <h4 className="contact-label">LinkedIn</h4>
              <p className="contact-value">linkedin.com/in/shwetapooja</p>
            </a>
          </div>

          <div className="social-links">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://linkedin.com/in/shwetapooja" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

