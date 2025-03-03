import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const jlptCertification = {
    date: '2019年8月',
    title: '日本語能力試験 N1',
    level: '満点取得',
    details: '日本語の最高レベルの言語運用能力の証明',
    highlight: true,
    icon: '🏆',
    type: 'jlpt'
  };
  
  const otherCertifications = [
    {
      date: '2010年3月',
      title: 'ICTプロフィシエンシー検定試験',
      level: '準2級',
      details: '情報技術に関する高度な知識と実践的スキル認定資格',
      icon: '💻'
    },
    {
      date: '2020年11月',
      title: '普通自動車第一種運転免許',
      level: 'AT限定',
      details: '日本国内での自動車運転資格',
      icon: '🚗'
    },
    {
      date: '2023年9月',
      title: '中国機動車駕駛証',
      level: 'C2級',
      details: '中国本土での自動車運転資格',
      icon: '🌏'
    },
    {
      date: '2018年6月',
      title: 'College English Test (CET)',
      level: 'Level 4',
      details: '中国全国大学英語試験 - 学術英語能力の公的認定',
      icon: '🎓'
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <div className="section-intro fade-in">
          <div className="section-subtitle">Certifications & Licenses</div>
          <h2 className="heading-medium with-decoration">資格・免許</h2>
          <p className="section-description">
            国際的な言語能力と専門技術を証明する認定資格コレクション
          </p>
        </div>
        
        <div className="certifications-vertical fade-in">
          <div className="jlpt-row">
            <div className="certification-card highlight featured jlpt-card">
              {jlptCertification.icon && <div className="certification-icon">{jlptCertification.icon}</div>}
              <div className="certification-header">
                <h3 className="certification-title">{jlptCertification.title}</h3>
                {jlptCertification.level && <span className="certification-level">{jlptCertification.level}</span>}
              </div>
              <div className="certification-info">
                {jlptCertification.date && <div className="certification-date">{jlptCertification.date}</div>}
                <div className="certification-details">{jlptCertification.details}</div>
              </div>
              <div className="highlight-badge">最高評価</div>
            </div>
          </div>
          
          <div className="other-certifications-row">
            {otherCertifications.map((cert, index) => (
              <div 
                key={index}
                className="certification-card stagger-item"
              >
                {cert.icon && <div className="certification-icon">{cert.icon}</div>}
                <div className="certification-header">
                  <h3 className="certification-title">{cert.title}</h3>
                  {cert.level && <span className="certification-level">{cert.level}</span>}
                </div>
                <div className="certification-info">
                  {cert.date && <div className="certification-date">{cert.date}</div>}
                  <div className="certification-details">{cert.details}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="cert-summary fade-in">
          <div className="cert-summary-content">
            <h3>マルチリンガルスキルと国際的な資格</h3>
            <p>
              複数の言語（日本語・英語・中国語）にわたる言語能力の公的認定と、情報技術および国際的に通用する運転免許を保有。
              特に日本語能力試験N1の満点取得は、ネイティブレベルの高度な日本語運用能力を証明しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;