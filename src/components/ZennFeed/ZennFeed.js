import React, { useState, useEffect } from 'react';
import './ZennFeed.css';

const ZennFeed = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // ウィンドウサイズの変更を監視
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // 画面幅に応じて表示数を決定
    const getArticleCount = () => {
      if (windowWidth <= 480) {
        return 2; // スマホサイズでは2記事
      } else if (windowWidth <= 992) {
        return 3; // タブレットサイズでは3記事
      } else {
        return 4; // デスクトップでは4記事
      }
    };

    const fetchRssFeed = async () => {
      try {
        setLoading(true);
        
        // CORS問題を回避するためにプロキシサービスを使用
        const proxyUrl = 'https://api.allorigins.win/raw?url=';
        const rssUrl = 'https://zenn.dev/ryoushin/feed';
        const response = await fetch(`${proxyUrl}${encodeURIComponent(rssUrl)}`);
        
        if (!response.ok) {
          throw new Error('RSSフィードの取得に失敗しました');
        }
        
        const xmlText = await response.text();
        
        // XMLをパースする
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        
        // 記事データを抽出
        const items = xmlDoc.querySelectorAll('item');
        const parsedArticles = [];
        
        items.forEach((item, index) => {
          const getElementText = (tagName) => {
            const element = item.querySelector(tagName);
            return element ? element.textContent : '';
          };
          
          parsedArticles.push({
            id: index.toString(),
            title: getElementText('title'),
            description: getElementText('description'),
            link: getElementText('link'),
            pubDate: getElementText('pubDate'),
            creator: getElementText('dc\\:creator') || getElementText('creator')
          });
        });
        
        // 表示数を制限
        setArticles(parsedArticles.slice(0, getArticleCount()));
        setLoading(false);
      } catch (err) {
        console.error('RSSフィード取得エラー:', err);
        setError('記事の読み込みに失敗しました。後でもう一度お試しください。');
        setLoading(false);
      }
    };
    
    fetchRssFeed();
  }, [windowWidth]);

  // 日付フォーマット関数
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}年${month}月${day}日`;
  };
  
  // HTML文字列からプレーンテキストを抽出する関数
  const stripHtml = (html) => {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || '';
  };

  // 説明文を短く整形する関数
  const formatDescription = (description, maxLength = 100) => {
    const plainText = stripHtml(description);
    if (plainText.length <= maxLength) return plainText;
    return plainText.substring(0, maxLength) + '...';
  };

  return (
    <section className="zenn-feed fade-in" id="zenn-feed">
      <div className="container">
        <div className="section-header">
          <h2>最新のZenn記事</h2>
          <p>技術ブログでの発信内容をご覧いただけます</p>
        </div>
        
        {loading ? (
          <div className="zenn-loading">
            <div className="spinner"></div>
            <p>記事を読み込み中...</p>
          </div>
        ) : error ? (
          <div className="zenn-error">
            <p>{error}</p>
            <a 
              href="https://zenn.dev/ryoushin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Zennで直接見る
            </a>
          </div>
        ) : (
          <>
            <div className="zenn-articles">
              {articles.map((article) => (
                <a 
                  key={article.id} 
                  href={article.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="zenn-article-card stagger-item"
                >
                  <div className="zenn-article-content">
                    <h3 className="zenn-article-title">{article.title}</h3>
                    <p className="zenn-article-excerpt">{formatDescription(article.description)}</p>
                    <div className="zenn-article-meta">
                      <span className="zenn-article-date">{formatDate(article.pubDate)}</span>
                      <span className="zenn-article-author">{article.creator}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="zenn-more">
              <a 
                href="https://zenn.dev/ryoushin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-glass"
              >
                もっと見る
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ZennFeed;