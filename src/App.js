import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Profile from './components/Profile/Profile';
import TimeLine from './components/Education/Education';
import Research from './components/Research/Research';
import Publications from './components/Publications/Publications';
import Skills from './components/Skills/Skills';
import Teaching from './components/Teaching/Teaching';
import Certifications from './components/Certifications/Certifications';
import Photos from './components/Photos/Photos';
import ZennFeed, { ZennHighlight } from './components/ZennFeed/ZennFeed';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  // Animation effect for scroll reveal
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      const staggerItems = document.querySelectorAll('.stagger-item');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
      
      staggerItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        const itemVisible = 150;
        
        if (itemTop < window.innerHeight - itemVisible) {
          setTimeout(() => {
            item.classList.add('visible');
          }, index * 100);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger on initial load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="App">
      <Header />
      <Hero />
      <ZennHighlight />
      <Profile />
      <TimeLine />
      <Research />
      <Publications />
      <Skills />
      <Teaching />
      <Certifications />
      <Photos />
      <ZennFeed />
      <About />
      <Footer />
    </div>
  );
}

export default App;