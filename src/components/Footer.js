import React from 'react';
import { FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa'; 
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; BNA HAIRCUTS. Todos os direitos reservados.</p>
      <div className="contact-icons">
        <a href="https://www.youtube.com/watch?v=mmeLCAP74KA&t=1s" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.youtube.com/watch?v=mmeLCAP74KA&t=1s">
          <FaEnvelope className="icon" />
        </a>
        <a href="https://www.youtube.com/watch?v=mmeLCAP74KA&t=1s">
          <FaPhone className="icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

