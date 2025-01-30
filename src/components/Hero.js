import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <h2>Bem-vindo ao BNA HAIRCUTS</h2>
      <p>O corte perfeito para todos os estilos.</p>
      <p>Para agendar o teu corte basta pressionar o botão abaixo.</p>
      <a href="#agenda" className="hero-button">
        <button>📅 Agendar</button>
      </a>
    </section>
  );
}

export default Hero;
