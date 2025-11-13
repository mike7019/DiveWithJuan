import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="video-background" aria-hidden="true">
        <video autoPlay loop muted playsInline aria-label="Background video of diving in Cozumel">
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="App">
        <header>
          <Navigation />
        </header>
        <main>
          <Hero />
          <Courses />
          <About />       
          <Gallery />
          <Reviews />
        </main>
        <footer>
          <Footer />
        </footer>
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default App;
