import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// パフォーマンスメトリクスをコンソールに出力
reportWebVitals(console.log);

// Google Analyticsにパフォーマンスメトリクスを送信する例
// function sendToAnalytics({ name, delta, id }) {
//   // Google Analytics イベントとして送信
//   ga('send', 'event', {
//     eventCategory: 'Web Vitals',
//     eventAction: name,
//     eventValue: Math.round(name === 'CLS' ? delta * 1000 : delta),
//     eventLabel: id,
//     nonInteraction: true,
//   });
// }
// reportWebVitals(sendToAnalytics);