import React from 'react';
import './Services.css';

function Services() {
  return (
    <section id="services" className="services">
      <h2>Nossos Serviços</h2>
      <ul>
        <li className="service-item">
          <span className="service-name">Corte de cabelo</span>
          <span className="service-price">10€</span>
        </li>
        <li className="service-item">
          <span className="service-name">Barba</span>
          <span className="service-price">8€</span>
        </li>
        <li className="service-item">
          <span className="service-name">Corte e Barba</span>
          <span className="service-price">15€</span>
        </li>
      </ul>
    </section>
  );
}

export default Services;
