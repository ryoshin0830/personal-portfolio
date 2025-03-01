import React, { useState, useEffect, useContext } from 'react';
import './ZennFeed.css';
import { LanguageContext } from '../../contexts/LanguageContext';

const ZennFeed = () => {
  const { t } = useContext(LanguageContext);
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
    // Use translated articles from translation files
    const getArticleCount = () => {
      if (windowWidth <= 480) {
        return 2; // スマホサイズでは2記事
      } else if (windowWidth <= 992) {
        return 3; // タブレットサイズでは3記事
      } else {
        return 4; // デスクトップでは4記事
      }
    };
    
    // 少し遅延を入れてロード感を出す
    setTimeout(() => {
      // Use articles from translation file if available
      if (t.zennFeed.articles && t.zennFeed.articles.length > 0) {
        setArticles(t.zennFeed.articles.slice(0, getArticleCount()));
      } else {
        // Fallback to Japanese articles if translations not available
        const zennArticles = [
          {
            id: '1',
            title: 'コマンドラインでGitログをおしゃれに表示！',
            description: 'Gitログに変更行数も表示！ コミットの内訳をひも解くカラフルな冒険 Gitのコミット履歴を眺めると、まるで無機質なタイムカプセルのよう。でも、あなたの変更がどのくらいの情熱（行数）を伴っていたのか、もっと詳しく見てみたくありませんか？',
            link: 'https://zenn.dev/ryoushin/articles/e62c5e0c0a3d8f',
            pubDate: 'Sun, 16 Feb 2025 02:59:32 GMT',
            creator: 'Shin'
          },
          {
            id: '2',
            title: 'Githubのレポジトリを全てPrivateにする方法',
            description: '「世界から見られている」というと、一見華やかでカッコいいかもしれません。しかし、あなたのGitHubリポジトリが「おっと、うっかり中身を公開していた…」となっていたらどうでしょう。そもそも間違ってAPIキー丸出しのコミットをしていたり、秘伝のソースコードを晒していたり…',
            link: 'https://zenn.dev/ryoushin/articles/6a07f7935f6966',
            pubDate: 'Thu, 30 Jan 2025 12:00:03 GMT',
            creator: 'Shin'
          },
          {
            id: '3',
            title: 'エンジニアよ、さらばPowerPoint！VS CodeでCoolなスライドを作ろう',
            description: 'GitHubリポジトリー:https://github.com/ryoshin0830/markdown_slide こんな人にオススメ！ 「PowerPointを開くとため息が出る」エンジニア 「スライド作成中にコード書きたくなる」プログラマー 「バージョン管理したい！」という潔癖性GitHuber',
            link: 'https://zenn.dev/ryoushin/articles/dac1c7058e08b7',
            pubDate: 'Fri, 10 Jan 2025 02:04:29 GMT',
            creator: 'Shin'
          },
          {
            id: '4',
            title: '日本語で論文を書く際のLaTeXテンプレート',
            description: '日本語で論文（博士論文など）を書く際に、BibLaTeX管理を簡単にしながら日本語と英語の文献をきちんと整理したい人向けのテンプレート紹介記事です。「日本語の論文をLaTeXで書きたい」「参考文献管理が面倒…」「日本語論文引用のスタイルが違いすぎる…」',
            link: 'https://zenn.dev/ryoushin/articles/d3e815a2af8a1e',
            pubDate: 'Fri, 03 Jan 2025 12:27:16 GMT',
            creator: 'Shin'
          }
        ];
        setArticles(zennArticles.slice(0, getArticleCount()));
      }
      setLoading(false);
    }, 800);
  }, [windowWidth, t.zennFeed.articles]);

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
          <h2>
            {t.zennFeed.title}
          </h2>
          <p>
            {t.zennFeed.description}
          </p>
        </div>
        
        {loading ? (
          <div className="zenn-loading">
            <div className="loader"></div>
            <p>{t.zennFeed.loading}</p>
          </div>
        ) : error ? (
          <div className="zenn-error">
            <p>{t.zennFeed.error}</p>
            <a 
              href="https://zenn.dev/ryoushin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-glass"
            >
              {t.zennFeed.viewOnZenn}
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
                {t.zennFeed.viewMore}
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ZennFeed;