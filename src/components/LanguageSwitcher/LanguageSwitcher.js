import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div className="language-switcher">
      <button 
        className={`language-btn ${language === 'ja' ? 'active' : ''}`}
        onClick={() => changeLanguage('ja')}
      >
        JP
      </button>
      <button 
        className={`language-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button 
        className={`language-btn ${language === 'zh' ? 'active' : ''}`}
        onClick={() => changeLanguage('zh')}
      >
        CN
      </button>
    </div>
  );
};

export default LanguageSwitcher;