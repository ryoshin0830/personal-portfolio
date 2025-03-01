import React from 'react';
import './Education.css';
import { ReactComponent as PlaneIcon } from '../../assets/icons/plane.svg';
import { ReactComponent as GraduationIcon } from '../../assets/icons/graduation.svg';
import { ReactComponent as BirthIcon } from '../../assets/icons/birth.svg';
import { ReactComponent as SchoolIcon } from '../../assets/icons/school.svg';
import { ReactComponent as UniversityIcon } from '../../assets/icons/university.svg';
import { ReactComponent as ResearchIcon } from '../../assets/icons/research.svg';
import { ReactComponent as StartupIcon } from '../../assets/icons/startup.svg';
import { ReactComponent as PermanentResidentIcon } from '../../assets/icons/permanent-resident.svg';
import { ReactComponent as VerticalFlightPath } from '../../assets/icons/vertical-flight-path.svg';

const TimeLine = () => {
  // Restructure timeline data to group items with same timestamp
  const timelineData = [
    { 
      year: '1997', 
      age: '', 
      items: ['北京出身'],
      title: '出生',
      icon: 'birth',
      highlight: false,
      location: 'china'
    },
    { 
      year: '1999', 
      age: '', 
      items: ['家族と共に来日（横浜）。日本で幼稚園・小学校を過ごす'],
      title: '日本へ移住',
      icon: 'plane',
      direction: 'china-to-japan',
      highlight: true,
      location: 'japan',
      transition: {
        from: 'china',
        to: 'japan',
        type: 'international'
      }
    },
    { 
      year: '2009', 
      age: '', 
      items: ['北京に帰国し、中学校に入学'],
      title: '中国へ帰国',
      icon: 'plane',
      direction: 'japan-to-china',
      highlight: true,
      location: 'china',
      transition: {
        from: 'japan',
        to: 'china',
        type: 'international'
      }
    },
    { 
      year: '2010', 
      age: '', 
      items: ['日本の永住許可を取得'],
      title: '永住許可取得',
      icon: 'permanent-resident',
      highlight: true,
      location: 'china',
    },
    { 
      year: '2013', 
      age: '', 
      items: ['北京市月壇中学高等部に入学'],
      title: '高校入学',
      icon: 'school',
      highlight: false,
      location: 'china',
      transition: {
        from: 'education',
        to: 'education',
        type: 'educational'
      }
    },
    { 
      year: '2016', 
      age: '', 
      items: ['首都経済貿易大学情報システム学部に入学'],
      title: '大学入学',
      icon: 'university',
      highlight: false,
      location: 'china',
      transition: {
        from: 'education',
        to: 'education',
        type: 'educational'
      }
    },
    { 
      year: '2020', 
      age: '', 
      items: ['首都経済貿易大学情報システム学部を卒業'],
      title: '大学卒業',
      icon: 'graduation',
      highlight: false,
      location: 'china',
      transition: {
        from: 'education',
        to: 'education',
        type: 'educational'
      }
    },
    { 
      year: '2021', 
      age: '', 
      items: ['再来日、京都へ移住'],
      title: '再来日',
      icon: 'plane',
      direction: 'china-to-japan',
      highlight: true,
      location: 'japan',
      transition: {
        from: 'china',
        to: 'japan',
        type: 'international',
        direction: 'vertical'
      }
    },
    { 
      year: '2021', 
      age: '', 
      items: [
        '京都大学人間環境学研究科 共生人間学修士課程に入学',
        '外国語教育学、第二言語習得論、応用言語学を専攻',
        '機械学習を使った語彙習得、言語評価、教育文法、学術目的の英語を研究',
        '修士論文: 「機械学習を用いた日本語語彙テスト自動生成プログラムの開発と検証（Word2Vec）」'
      ],
      title: '京都大学修士課程入学',
      icon: 'university',
      highlight: true,
      location: 'japan',
      universityLogo: 'kyoto',
      transition: {
        from: 'education',
        to: 'education',
        type: 'educational'
      }
    },
    { 
      year: '2023', 
      age: '', 
      items: ['教育テック分野での起業、AI言語教育ツールの開発に着手'],
      title: '起業',
      icon: 'startup',
      highlight: true,
      location: 'japan',
      transition: {
        from: 'education',
        to: 'business',
        type: 'career'
      }
    },
    { 
      year: '2023', 
      age: '', 
      items: ['修士課程を修了'],
      title: '修士課程修了',
      icon: 'graduation',
      highlight: false,
      location: 'japan',
      transition: {
        from: 'education',
        to: 'education',
        type: 'educational'
      }
    },
    { 
      year: '2023', 
      age: '', 
      items: [
        '京都大学博士課程に入学（人間環境学研究科 共生人間学専攻）',
        '外国語教育学、第二言語習得論、応用言語学を研究',
        '機械学習を使った語彙習得、言語評価、教育文法、学術目的の英語を中心に取り組む',
        '博士論文テーマ: 「外国語教育におけるLLMの応用」'
      ],
      title: '京都大学博士課程入学',
      icon: 'research',
      highlight: true,
      location: 'japan',
      universityLogo: 'kyoto',
      transition: {
        from: 'education',
        to: 'education',
        type: 'educational'
      }
    }
  ];

  // アイコンを取得する関数
  const getIcon = (iconType, direction) => {
    switch(iconType) {
      case 'plane':
        return <PlaneIcon className={`timeline-icon plane ${direction}`} />;
      case 'graduation':
        return <GraduationIcon className="timeline-icon graduation" />;
      case 'school':
        return <SchoolIcon className="timeline-icon school" />;
      case 'university':
        return <UniversityIcon className="timeline-icon university" />;
      case 'research':
        return <ResearchIcon className="timeline-icon research" />;
      case 'startup':
        return <StartupIcon className="timeline-icon startup" />;
      case 'birth':
        return <BirthIcon className="timeline-icon birth" />;
      case 'permanent-resident':
        return <PermanentResidentIcon className="timeline-icon permanent-resident" />;
      default:
        return null;
    }
  };

  return (
    <section id="timeline" className="education-section">
      <div className="container">
        <div className="section-intro fade-in">
          <div className="section-subtitle">Career Journey</div>
          <h2 className="heading-medium with-decoration">経歴</h2>
          <p className="section-description">
            北京と日本の教育環境で培った多様な視点と、
            最先端の言語学習技術研究を融合させた学術的・職業的バックグラウンド
          </p>
        </div>
        
        <div className="timeline">
          {timelineData.map((period, index) => (
            <React.Fragment key={index}>
              {/* トランジションパス (前のアイテムと現在のアイテムの間に表示) */}
              {index > 0 && period.transition?.type === 'international' && (
                <div className={`timeline-transition ${period.transition.from}-to-${period.transition.to}`}>
                  <div className="timeline-flight-path">
                    <VerticalFlightPath className={`flight-path-icon ${period.transition.from}-to-${period.transition.to}`} />
                    <div className="moving-plane-container">
                      <PlaneIcon className={`moving-plane ${period.direction || 'vertical'}`} />
                    </div>
                  </div>
                </div>
              )}
              
              {/* タイムラインアイテム */}
              <div 
                className={`timeline-item ${period.highlight ? 'highlight' : ''} ${period.location}`}
                data-kyoto-university={period.universityLogo === 'kyoto' ? 'true' : 'false'}
              >
                <div className="timeline-year">{period.year}</div>
                <div className={`timeline-content ${period.items.length > 1 ? 'has-group' : ''}`}>
                  <div className="timeline-icon-container">
                    {getIcon(period.icon, period.direction)}
                  </div>
                  
                  {/* タイトルを追加 */}
                  <h3 className="timeline-title">{period.title}</h3>
                  
                  {period.items.length === 1 ? (
                    <p>{period.items[0]}</p>
                  ) : (
                    <div className="timeline-content-group">
                      {period.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="timeline-content-item">
                          <span className="timeline-bullet"></span>
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* 国旗やロケーションマーカー */}
                  {period.location && (
                    <div className={`location-marker ${period.location}`}></div>
                  )}
                  
                  {/* 大学ロゴの表示 */}
                  {period.universityLogo === 'kyoto' && (
                    <div className="university-logo-wrapper">
                      <img src="/kyoto-u.png" alt="京都大学" className="university-logo" />
                    </div>
                  )}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimeLine;