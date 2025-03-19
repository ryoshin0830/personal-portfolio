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
    "jobTitle": "機械学習・自然言語処理研究者 / Webエンジニア",
    "worksFor": {
      "@type": "Organization",
      "name": "株式会社EastLinker"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "京都大学"
    },
    "knowsAbout": ["機械学習", "自然言語処理", "Web開発", "React", "教育工学", "データ分析"],
    "sameAs": [
      "https://zenn.dev/liang",
      "https://github.com/yourusername"
    ],
    "description": "機械学習・自然言語処理を専門とする研究者兼Webエンジニア。教育工学分野にも造詣が深く、AI技術を教育現場に応用する研究を行っています。実用的なWebアプリケーション開発も得意としています。",
    "telephone": "+81-XX-XXXX-XXXX",
    "email": "mail@example.com",
    "hasOccupation": {
      "@type": "Occupation",
      "name": "研究者・エンジニア",
      "skills": ["機械学習", "自然言語処理", "教育工学", "React", "Web開発"]
    }
  };

  return (
    <>
      <Helmet>
        <title>梁震 | 機械学習・自然言語処理研究者 | Web開発エンジニアポートフォリオ</title>
        <meta name="description" content="梁震の専門ポートフォリオサイト - 機械学習・自然言語処理専門の研究者兼エンジニア。京都大学出身、教育工学およびWeb技術の専門家。研究実績、開発プロジェクト、スキル一覧など。" />
        <meta name="keywords" content="梁震, ポートフォリオ, 機械学習, 自然言語処理, Web開発, React, 研究者, エンジニア, 教育工学, プログラミング" />
        <link rel="canonical" href="https://about.if.gy" />
        <meta property="og:title" content="梁震 | 機械学習・Web開発の専門家 | 研究者・エンジニアポートフォリオ" />
        <meta property="og:description" content="梁震の専門ポートフォリオサイト - 機械学習・自然言語処理専門の研究者兼エンジニア。京都大学出身、教育工学およびWeb技術の専門家。研究実績、開発プロジェクト、スキル一覧など。" />
        <meta property="og:url" content="https://about.if.gy" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://about.if.gy/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="梁震 | 機械学習・Web開発の専門家 | 研究者・エンジニアポートフォリオ" />
        <meta name="twitter:description" content="梁震の専門ポートフォリオサイト - 機械学習・自然言語処理専門の研究者兼エンジニア。京都大学出身、教育工学およびWeb技術の専門家。研究実績、開発プロジェクト、スキル一覧など。" />
        <meta name="twitter:image" content="https://about.if.gy/logo.png" />
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
const ProfilePage = () => {
  const profileStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "梁 震",
      "url": "https://about.if.gy/profile",
      "jobTitle": "機械学習・自然言語処理研究者 / Webエンジニア",
      "description": "京都大学出身の研究者兼エンジニア。機械学習・自然言語処理を専門とし、教育工学分野での応用研究も行っています。Webアプリケーション開発、データ分析など幅広いスキルセットを持っています。",
      "knowsAbout": ["機械学習", "自然言語処理", "Web開発", "React", "教育工学", "データ分析"]
    }
  };

  return (
    <>
      <Helmet>
        <title>梁震のプロフィール | 機械学習研究者・Webエンジニア | 経歴と専門分野</title>
        <meta name="description" content="梁震の詳細プロフィール - 京都大学出身の機械学習・自然言語処理研究者。教育工学分野の専門家でもあり、Webアプリケーション開発にも精通。経歴、専門分野、プロジェクト実績の詳細。" />
        <meta name="keywords" content="梁震, プロフィール, 経歴, 専門分野, 機械学習, 自然言語処理, Web開発, 教育工学, ポートフォリオ" />
        <link rel="canonical" href="https://about.if.gy/profile" />
        <meta property="og:title" content="梁震のプロフィール | 機械学習研究者・Webエンジニア | 経歴と専門分野" />
        <meta property="og:description" content="梁震の詳細プロフィール - 京都大学出身の機械学習・自然言語処理研究者。教育工学分野の専門家でもあり、Webアプリケーション開発にも精通。経歴、専門分野、プロジェクト実績の詳細。" />
        <meta property="og:url" content="https://about.if.gy/profile" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://about.if.gy/logo.png" />
        <script type="application/ld+json">
          {JSON.stringify(profileStructuredData)}
        </script>
      </Helmet>
      <Profile />
    </>
  );
};

const ResearchPage = () => {
  const researchStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "headline": "梁震の研究活動と学術成果",
    "description": "機械学習・自然言語処理・教育工学分野における梁震の研究活動と学術成果。AIの教育応用、言語モデルの開発、データ分析手法の革新などの取り組み。",
    "mainEntity": {
      "@type": "Person",
      "name": "梁 震",
      "knowsAbout": ["機械学習", "自然言語処理", "教育工学", "深層学習", "データマイニング"],
      "description": "機械学習と自然言語処理を専門とする研究者。教育工学分野での先進的なAI応用研究に従事。複数の学術論文を発表し、実用的なシステム開発も行っています。"
    }
  };

  return (
    <>
      <Helmet>
        <title>梁震の研究活動 | 機械学習・自然言語処理・教育工学の専門研究</title>
        <meta name="description" content="梁震の研究活動と学術成果 - 機械学習・自然言語処理・教育工学分野における革新的な研究プロジェクト。AIの教育応用、言語処理技術の開発、データ分析手法の研究など。" />
        <meta name="keywords" content="梁震, 研究, 機械学習, 自然言語処理, 教育工学, 学術成果, AI, 深層学習, データ分析" />
        <link rel="canonical" href="https://about.if.gy/research" />
        <meta property="og:title" content="梁震の研究活動 | 機械学習・自然言語処理・教育工学の専門研究" />
        <meta property="og:description" content="梁震の研究活動と学術成果 - 機械学習・自然言語処理・教育工学分野における革新的な研究プロジェクト。AIの教育応用、言語処理技術の開発、データ分析手法の研究など。" />
        <meta property="og:url" content="https://about.if.gy/research" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://about.if.gy/logo.png" />
        <script type="application/ld+json">
          {JSON.stringify(researchStructuredData)}
        </script>
      </Helmet>
      <Research />
    </>
  );
};

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