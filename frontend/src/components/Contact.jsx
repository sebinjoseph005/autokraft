import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get form values
    const name = e.target.elements[0].value;
    const email = e.target.elements[1].value;
    const message = e.target.elements[2].value;
    
    // Create WhatsApp message
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/918075875280?text=${whatsappMessage}`, '_blank');
    
    // Reset the form
    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><i className="fas fa-envelope"></i> info@autokraft.com</p>
          <p><i className="fas fa-phone"></i> +91 9876543210</p>
          <p><i className="fas fa-map-marker-alt"></i> 123 Auto Street, Mumbai, India - 400001</p>
          
          <div className="social-links">
            <a href="https://www.instagram.com/aa_autokraft?igsh=Z2pnNzJtcXJ0eHV1" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> @aa_autokraft
            </a>
          </div>
        </div>
        
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
