import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// Google Analytics 初期化コード
const initializeGA = () => {
  // Google Analytics タグを動的に追加
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'; // あなたのGoogle Analytics IDに置き換えてください
  document.head.appendChild(script1);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX'); // あなたのGoogle Analytics IDに置き換えてください
};

// クライアントサイドのみでGoogle Analyticsを初期化
if (typeof window !== 'undefined') {
  initializeGA();
}

const rootElement = document.getElementById('root');
const AppWithRouter = (
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// React 19 での新しいレンダリング方法
const root = ReactDOM.createRoot(rootElement);
root.render(AppWithRouter);

// Web Vitals をGoogle Analyticsに送信する関数
const sendToAnalytics = ({ name, delta, id }) => {
  // Google Analytics イベントとして送信
  if (window.gtag) {
    window.gtag('event', name, {
      event_category: 'Web Vitals',
      event_value: Math.round(name === 'CLS' ? delta * 1000 : delta),
      event_label: id,
      non_interaction: true,
    });
  }
};

// Web Vitals をGoogle Analyticsに送信
reportWebVitals(sendToAnalytics);