import React, { useState, useEffect, useContext } from 'react';
import './Hero.css';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { SiZenn } from 'react-icons/si';
import { LanguageContext } from '../../contexts/LanguageContext';

const Hero = () => {
  const [nameVariant, setNameVariant] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const { t, language } = useContext(LanguageContext);
  
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
          <div className="hero-tag">{t.hero.subtitle}</div>
          <div className="name-container">
            <h1 className="hero-title">
              <span className="text-gradient-blue main-name">{t.hero.title}</span>
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
          <h2 className="hero-subtitle">
            {language === 'ja' && '外国語教育 × 機械学習'}
            {language === 'en' && 'Foreign Language Education × Machine Learning'}
            {language === 'zh' && '外语教育 × 机器学习'}
          </h2>
          <p className="hero-description">
            {language === 'ja' && <>言語の壁を越える<span className="text-gradient-blue">革新的な</span>学習支援システムを開発しています</>}
            {language === 'en' && <>Developing <span className="text-gradient-blue">innovative</span> learning support systems that break language barriers</>}
            {language === 'zh' && <>开发<span className="text-gradient-blue">创新的</span>学习支持系统，打破语言障碍</>}
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
              <span>
                {language === 'ja' && 'スキルを見る'}
                {language === 'en' && 'View Skills'}
                {language === 'zh' && '查看技能'}
              </span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#research" className="btn btn-glass">
              <span>
                {language === 'ja' && '研究内容'}
                {language === 'en' && 'Research'}
                {language === 'zh' && '研究内容'}
              </span>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;