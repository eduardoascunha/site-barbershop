import React from 'react';
import './Location.css';

function Location() {
  return (
    <section className="location">
      <div className="location-content">
        <div className="location-image">
            <img src="/braga.png" alt="braga" />
          </div>
        <div className="location-text">
          <h2>Localização</h2>
          <ul>
            <li>BNA HAIRCUTS está localizado em Braga, na Rua das Mulheres Bonitas.</li>
            <li>O mapa ao lado apesar de engraçadinho, não diz absolutamente nada sobre a nossa localização, portanto não te guies por ele!</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Location;
