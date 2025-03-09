import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
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

  // メイン画面でのスムーズスクロール用
  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    
    if (window.location.pathname !== '/') {
      // ホームページ以外の場合は、ホームにリダイレクトしてからスクロール
      return; // URL変更はLinkコンポーネントで行う
    }

    // ホームページ内でのスムーズスクロール
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    
    closeMenu();
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <h1 style={{ cursor: 'pointer' }}>梁 震</h1>
          </Link>
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
            <li>
              {window.location.pathname === '/' ? (
                <a href="#profile" onClick={(e) => handleSmoothScroll(e, 'profile')}>プロフィール</a>
              ) : (
                <Link to="/profile" onClick={closeMenu}>プロフィール</Link>
              )}
            </li>
            <li>
              {window.location.pathname === '/' ? (
                <a href="#timeline" onClick={(e) => handleSmoothScroll(e, 'timeline')}>経歴</a>
              ) : (
                <Link to="/#timeline" onClick={closeMenu}>経歴</Link>
              )}
            </li>
            <li>
              {window.location.pathname === '/' ? (
                <a href="#research" onClick={(e) => handleSmoothScroll(e, 'research')}>研究</a>
              ) : (
                <Link to="/research" onClick={closeMenu}>研究</Link>
              )}
            </li>
            <li>
              {window.location.pathname === '/' ? (
                <a href="#publications" onClick={(e) => handleSmoothScroll(e, 'publications')}>論文</a>
              ) : (
                <Link to="/#publications" onClick={closeMenu}>論文</Link>
              )}
            </li>
            <li>
              {window.location.pathname === '/' ? (
                <a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')}>スキル</a>
              ) : (
                <Link to="/#skills" onClick={closeMenu}>スキル</Link>
              )}
            </li>
            <li>
              {window.location.pathname === '/' ? (
                <a href="#teaching" onClick={(e) => handleSmoothScroll(e, 'teaching')}>日本語教師</a>
              ) : (
                <Link to="/#teaching" onClick={closeMenu}>日本語教師</Link>
              )}
            </li>
            <li>
              {window.location.pathname === '/' ? (
                <a href="#certifications" onClick={(e) => handleSmoothScroll(e, 'certifications')}>資格・免許</a>
              ) : (
                <Link to="/#certifications" onClick={closeMenu}>資格・免許</Link>
              )}
            </li>
            <li>
              {window.location.pathname === '/' ? (
                <a href="#photos" onClick={(e) => handleSmoothScroll(e, 'photos')}>フォト</a>
              ) : (
                <Link to="/#photos" onClick={closeMenu}>フォト</Link>
              )}
            </li>
            <li>
              {window.location.pathname === '/' ? (
                <a href="#zenn-feed" onClick={(e) => handleSmoothScroll(e, 'zenn-feed')}>Zenn記事</a>
              ) : (
                <Link to="/#zenn-feed" onClick={closeMenu}>Zenn記事</Link>
              )}
            </li>
            <li>
              {window.location.pathname === '/' ? (
                <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>会社情報</a>
              ) : (
                <Link to="/#about" onClick={closeMenu}>会社情報</Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;