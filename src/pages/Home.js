import React from 'react';
import './Home.css';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import Location from '../components/Location';

function Home() {
  return (
    <div className="Home">
      <Header />
      <Hero />
      <Services />
      <Location />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default Home;