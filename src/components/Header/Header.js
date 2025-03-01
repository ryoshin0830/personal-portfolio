import React, { useState, useEffect, useContext } from 'react';
import './Header.css';
import { LanguageContext } from '../../contexts/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <h1 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>梁 震</h1>
        </div>
        <button 
          className={`nav-button ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="nav-button-icon">
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </div>
        </button>
        <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#profile" onClick={closeMenu}>{t.header.profile}</a></li>
            <li><a href="#timeline" onClick={closeMenu}>{t.header.timeline}</a></li>
            <li><a href="#research" onClick={closeMenu}>{t.header.research}</a></li>
            <li><a href="#publications" onClick={closeMenu}>{t.header.publications}</a></li>
            <li><a href="#skills" onClick={closeMenu}>{t.header.skills}</a></li>
            <li><a href="#about" onClick={closeMenu}>{t.header.about}</a></li>
          </ul>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;