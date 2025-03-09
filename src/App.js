import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Profile from './components/Profile/Profile';
import TimeLine from './components/Education/Education';
import Research from './components/Research/Research';
import Publications from './components/Publications/Publications';
import Skills from './components/Skills/Skills';
import Teaching from './components/Teaching/Teaching';
import Certifications from './components/Certifications/Certifications';
import Photos from './components/Photos/Photos';
import ZennFeed, { ZennHighlight } from './components/ZennFeed/ZennFeed';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

// ホームページのコンポーネント
const HomePage = () => {
  // スクロールアニメーション効果
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      const staggerItems = document.querySelectorAll('.stagger-item');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
      
      staggerItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        const itemVisible = 150;
        
        if (itemTop < window.innerHeight - itemVisible) {
          setTimeout(() => {
            item.classList.add('visible');
          }, index * 100);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger on initial load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 構造化データ（JSON-LD）
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "梁 震",
    "url": "https://about.if.gy",
    "image": "https://about.if.gy/logo.png",
    "jobTitle": "研究者・エンジニア",
    "worksFor": {
      "@type": "Organization",
      "name": "株式会社EastLinker"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "京都大学"
    },
    "knowsAbout": ["機械学習", "自然言語処理", "Web開発", "React", "教育工学"],
    "sameAs": [
      "https://zenn.dev/liang",
      "https://github.com/yourusername"
    ]
  };

  return (
    <>
      <Helmet>
        <title>梁震のポートフォリオ | ホーム</title>
        <meta name="description" content="梁震のポートフォリオサイト - Web開発、プログラミング、プロジェクト実績の紹介" />
        <meta name="keywords" content="ポートフォリオ, Web開発, プログラミング, React, 梁震" />
        <link rel="canonical" href="https://about.if.gy" />
        <meta property="og:title" content="梁震のポートフォリオ" />
        <meta property="og:description" content="梁震のポートフォリオサイト - Web開発、プログラミング、プロジェクト実績の紹介" />
        <meta property="og:url" content="https://about.if.gy" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="梁震のポートフォリオ" />
        <meta name="twitter:description" content="梁震のポートフォリオサイト - Web開発、プログラミング、プロジェクト実績の紹介" />
        <meta name="twitter:image" content="/logo.png" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Hero />
      <ZennHighlight />
      <Profile />
      <TimeLine />
      <Research />
      <Publications />
      <Skills />
      <Teaching />
      <Certifications />
      <Photos />
      <ZennFeed />
      <About />
    </>
  );
};

// 個別ページのコンポーネント
const ProfilePage = () => (
  <>
    <Helmet>
      <title>梁震のプロフィール詳細 | ポートフォリオ</title>
      <meta name="description" content="梁震のプロフィール詳細ページ - 経歴、専門分野、取り組んできたプロジェクトについての詳細情報" />
      <link rel="canonical" href="https://about.if.gy/profile" />
    </Helmet>
    <Profile />
  </>
);

const ResearchPage = () => (
  <>
    <Helmet>
      <title>梁震の研究活動 | ポートフォリオ</title>
      <meta name="description" content="梁震の研究活動と学術成果 - 機械学習、自然言語処理、教育工学分野における研究内容と成果" />
      <link rel="canonical" href="https://about.if.gy/research" />
    </Helmet>
    <Research />
  </>
);

function App() {
  const location = useLocation();
  
  // ページが変わるたびに一番上にスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/research" element={<ResearchPage />} />
        {/* 他のルートも必要に応じて追加 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;