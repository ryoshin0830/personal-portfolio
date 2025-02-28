import React, { useState, useEffect } from 'react';
import './Hero.css';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { SiZenn } from 'react-icons/si';

const Hero = () => {
  const [nameVariant, setNameVariant] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  
  const nameVariants = [
    { text: 'りょう しん', className: 'name-reading' },
    { text: 'RYO SHIN', className: 'name-romaji' },
    { text: 'LIANG ZHEN', className: 'name-english' }
  ];
  
  useEffect(() => {
    // 最初の表示を遅延させる
    const initTimer = setTimeout(() => {
      setIsInitialized(true);
    }, 800);
    
    // 名前のバリエーションを一定間隔で切り替える
    const interval = setInterval(() => {
      setNameVariant((prev) => (prev + 1) % nameVariants.length);
    }, 3500); // 少し長めの間隔に変更
    
    return () => {
      clearInterval(interval);
      clearTimeout(initTimer);
    };
  }, [nameVariants.length]);
  
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-sphere hero-sphere-1"></div>
        <div className="hero-sphere hero-sphere-2"></div>
        <div className="hero-sphere hero-sphere-3"></div>
        <div className="hero-grid"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-tag">京都大学博士課程 / 株式会社EastLinker代表</div>
          <div className="name-container">
            <h1 className="hero-title">
              <span className="text-gradient-blue main-name">梁 震</span>
            </h1>
            <div className="name-variants-container">
              {isInitialized && nameVariants.map((variant, index) => (
                <span 
                  key={index}
                  className={`name-variant ${variant.className} ${index === nameVariant ? 'active' : ''}`}
                >
                  {variant.text}
                </span>
              ))}
            </div>
          </div>
          <h2 className="hero-subtitle">外国語教育 × 機械学習</h2>
          <p className="hero-description">
            言語の壁を越える<span className="text-gradient-blue">革新的な</span>
            学習支援システムを開発しています
          </p>
          
          <div className="hero-social">
            <a href="https://github.com/ryoshin0830" target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <FaGithub />
            </a>
            <a href="https://zenn.dev/ryoushin" target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <SiZenn />
            </a>
            <a href="https://x.com/ryoshin0830" target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <FaTwitter />
            </a>
          </div>
          
          <div className="hero-buttons">
            <a href="#skills" className="btn btn-primary">
              <span>スキルを見る</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#research" className="btn btn-glass">
              <span>研究内容</span>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;