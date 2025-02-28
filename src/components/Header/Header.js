import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <h1>梁 震</h1>
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
            <li><a href="#profile" onClick={closeMenu}>プロフィール</a></li>
            <li><a href="#education" onClick={closeMenu}>学歴</a></li>
            <li><a href="#research" onClick={closeMenu}>研究</a></li>
            <li><a href="#publications" onClick={closeMenu}>論文</a></li>
            <li><a href="#skills" onClick={closeMenu}>スキル</a></li>
            <li><a href="#about" onClick={closeMenu}>会社情報</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;