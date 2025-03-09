import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <Helmet>
        <title>ページが見つかりません | 梁震のポートフォリオ</title>
        <meta name="description" content="お探しのページは見つかりませんでした。梁震のポートフォリオサイトのホームページにお戻りください。" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="not-found-content">
        <h1>404</h1>
        <h2>ページが見つかりません</h2>
        <p>お探しのページは存在しないか、移動した可能性があります。</p>
        <Link to="/" className="home-button">ホームに戻る</Link>
      </div>
    </div>
  );
};

export default NotFound; 