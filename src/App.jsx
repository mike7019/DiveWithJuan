import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext.jsx';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import WhyCozumel from './components/WhyCozumel';
import Courses from './components/Courses';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CourseDetailPage from './pages/CourseDetailPage';
import FAQPage from './pages/FAQPage';
import './App.css';

function HomePage() {
  return (
    <>
      <div className="App">
        <header>
          <Navigation />
        </header>
        <main>
          <Hero />
          <Features />
          <Courses />
          <About />
          <WhyCozumel />
          <Gallery />
          <Reviews />
        </main>
        <footer>
          <Footer />
        </footer>
        <WhatsAppButton />
      </div>
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course/:courseId" element={<CourseDetailPage />} />
          <Route path="/faqs" element={<FAQPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
