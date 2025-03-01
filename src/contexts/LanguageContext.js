import React, { createContext, useState, useEffect } from 'react';
import enTranslations from '../translations/en.json';
import jaTranslations from '../translations/ja.json';
import zhTranslations from '../translations/zh.json';

export const LanguageContext = createContext();

const translations = {
  en: enTranslations,
  ja: jaTranslations,
  zh: zhTranslations
};

export const LanguageProvider = ({ children }) => {
  // ブラウザの言語設定に基づいて初期言語を設定
  const getBrowserLanguage = () => {
    const browserLang = navigator.language.split('-')[0];
    return translations[browserLang] ? browserLang : 'ja'; // デフォルトは日本語
  };

  // ローカルストレージから言語設定を取得するか、ブラウザの言語を使用
  const getInitialLanguage = () => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || getBrowserLanguage();
  };

  const [language, setLanguage] = useState(getInitialLanguage());
  const [t, setT] = useState(translations[getInitialLanguage()]);

  // 言語変更時に翻訳を更新し、ローカルストレージに保存
  useEffect(() => {
    setT(translations[language]);
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  // 言語切り替え関数
  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};