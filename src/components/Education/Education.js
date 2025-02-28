import React from 'react';
import './Education.css';

const Education = () => {
  // Restructure education data to group items with same timestamp
  const educationData = [
    { 
      year: '1997', 
      age: '', 
      items: ['北京出身']
    },
    { 
      year: '1999', 
      age: '', 
      items: ['家族と共に来日（横浜）。日本で幼稚園・小学校を過ごす']
    },
    { 
      year: '2009', 
      age: '', 
      items: ['北京に帰国し、中学校に入学']
    },
    { 
      year: '2013', 
      age: '', 
      items: ['北京市月壇中学高等部に入学']
    },
    { 
      year: '2016', 
      age: '', 
      items: ['首都経済貿易大学情報システム学部に入学']
    },
    { 
      year: '2020', 
      age: '', 
      items: ['首都経済貿易大学情報システム学部を卒業']
    },
    { 
      year: '2021', 
      age: '', 
      items: [
        '京都大学人間環境学研究科 共生人間学修士課程に入学',
        '外国語教育学、第二言語習得論、応用言語学を専攻',
        '機械学習を使った語彙習得、言語評価、教育文法、学術目的の英語を研究',
        '修士論文: 「機械学習を用いた日本語語彙テスト自動生成プログラムの開発と検証（Word2Vec）」'
      ]
    },
    { 
      year: '2023', 
      age: '', 
      items: ['修士課程を修了']
    },
    { 
      year: '2023', 
      age: '', 
      items: [
        '京都大学博士課程に入学（人間環境学研究科 共生人間学専攻）',
        '外国語教育学、第二言語習得論、応用言語学を研究',
        '機械学習を使った語彙習得、言語評価、教育文法、学術目的の英語を中心に取り組む',
        '博士論文テーマ: 「外国語教育におけるLLMの応用」'
      ]
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-intro fade-in">
          <div className="section-subtitle">Education Background</div>
          <h2 className="heading-medium with-decoration">学歴</h2>
          <p className="section-description">
            北京と日本の教育環境で培った多様な視点と、
            最先端の言語学習技術研究を融合させた学術的バックグラウンド
          </p>
        </div>
        
        <div className="timeline">
          {educationData.map((period, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{period.year}</div>
              <div className={`timeline-content ${period.items.length > 1 ? 'has-group' : ''}`}>
                {period.items.length === 1 ? (
                  <p>{period.items[0]}</p>
                ) : (
                  <>
                    <div className="group-indicator">
                      <span className="group-count">{period.items.length}</span>
                    </div>
                    <div className="timeline-content-group">
                      {period.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="timeline-content-item">
                          <span className="timeline-bullet"></span>
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;