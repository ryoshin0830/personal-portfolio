import React, { useState, useEffect } from 'react';
import './ZennFeed.css';

// 記事を取得するカスタムフック
const useZennArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
        
        setArticles(parsedArticles);
        setLoading(false);
      } catch (err) {
        console.error('RSSフィード取得エラー:', err);
        setError('記事の読み込みに失敗しました。後でもう一度お試しください。');
        setLoading(false);
      }
    };
    
    fetchRssFeed();
  }, []);

  return { articles, loading, error };
};

// 共通ユーティリティ関数
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}年${month}月${day}日`;
};

const stripHtml = (html) => {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || '';
};

const formatDescription = (description, maxLength = 100) => {
  const plainText = stripHtml(description);
  if (plainText.length <= maxLength) return plainText;
  return plainText.substring(0, maxLength) + '...';
};

// ハイライト記事コンポーネント
export const ZennHighlight = () => {
  const { articles, loading, error } = useZennArticles();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // アニメーション開始の少し遅延
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  if (loading || error || articles.length === 0) return null;

  // 最新記事だけを表示
  const latestArticle = articles[0];

  return (
    <section className={`zenn-highlight fade-in ${isVisible ? 'slide-in' : ''}`} id="zenn-highlight">
      <div className="container">
        <div className="zenn-highlight-content">
          <div className="zenn-highlight-badge">
            <span>NEW</span>
          </div>
          <a 
            href={latestArticle.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="zenn-highlight-card"
          >
            <h3 className="zenn-highlight-title">
              <span className="zenn-highlight-label">最新のZenn記事</span>
              {latestArticle.title}
            </h3>
            <p className="zenn-highlight-date">{formatDate(latestArticle.pubDate)}</p>
          </a>
        </div>
      </div>
    </section>
  );
};

// メインのZennフィードコンポーネント
const ZennFeed = () => {
  const { articles, loading, error } = useZennArticles();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // ウィンドウサイズの変更を監視
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const displayArticles = articles.slice(0, getArticleCount());

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
              {displayArticles.map((article) => (
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