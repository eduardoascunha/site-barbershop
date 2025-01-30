import React, { useState, useEffect } from 'react';
import './AboutUs.css';

function AboutUs() {
  const images = ['/lol.jpg', '/barbearia.jpg', '/barbeiro.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [currentIndex]); // Atualiza sempre que currentIndex mudar

  return (
    <section id="aboutus" className="aboutus">
      <div className="aboutus-content">
        <div className="aboutus-text">
          <h2>Acerca de Nós</h2>
          <ul>
            <li>Aqui no BNA HAIRCUTS, vais sair com um corte fabuloso, nem que seja à chapada ou que demore umas boas 5 horas a tratar da tua juba. Sou um loiro encantador de 19 anos, jogo à bola para manter as aparências, mas o meu verdadeiro amor é o LOL.</li>
            <li>Por isso, evita marcar cortes de manhã, que provavelmente fiquei a noite toda a dar cabo de noobs e a minha prioridade matinal é abraçar a almofada. Ah, e só te vou passar Shaver se pedires muito (porque, sejamos sinceros, sou preguiçoso).</li>
            <li>No final, o que importa é que vais sair daqui com um visual que só visto... ou quase!</li>
          </ul>
        </div>
        <div 
          className="aboutus-images" 
          onMouseEnter={() => setShowButtons(true)} 
          onMouseLeave={() => setShowButtons(false)}
        >
          {showButtons && <button onClick={prevImage}>❮</button>}
          <img src={images[currentIndex]} alt={`Imagem ${currentIndex + 1}`} className="aboutus-img"/>
          {showButtons && <button onClick={nextImage}>❯</button>}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

