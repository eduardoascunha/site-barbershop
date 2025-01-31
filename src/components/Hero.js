import React from 'react';
import './Hero.css';

function Hero() {
  const scrollToAgenda = () => {
    const agendaSection = document.getElementById('agenda');
    if (agendaSection) {
      agendaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <h2>Bem-vindo ao BNA HAIRCUTS</h2>
      <p>O corte perfeito para todos os estilos.</p>
      <p>Para agendar o teu corte basta pressionar o botão abaixo.</p>
      <button className="hero-button" onClick={scrollToAgenda}>📅 Agendar</button>
    </section>
  );
}

export default Hero;
