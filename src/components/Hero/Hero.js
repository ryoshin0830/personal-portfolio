import React from 'react';
import './Hero.css';

const Hero = () => {
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
          <h1 className="hero-title">
            <span className="text-gradient-blue">梁 震</span>
          </h1>
          <h2 className="hero-subtitle">外国語教育 × 機械学習</h2>
          <p className="hero-description">
            言語の壁を越える<span className="text-gradient-blue">革新的な</span>
            学習支援システムを開発しています
          </p>
          
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