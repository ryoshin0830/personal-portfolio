import React from 'react';
import './Teaching.css';
import { IoSchoolOutline, IoLanguageOutline, IoBookOutline, IoPersonOutline, IoStarOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

const Teaching = () => {
  // アニメーション設定
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // 講座情報
  const courses = [
    {
      id: 'basic',
      title: '日本語基礎コース',
      icon: <IoLanguageOutline />,
      color: '#4361EE',
      description: '五十音図から初級文法・日常会話まで、ゼロからしっかり学ぶ基礎講座',
      features: [
        '日本語特有の発音・アクセント指導',
        '体系的な文法解説と練習問題',
        '日常生活で即使える会話表現',
        '定期的な小テストで習熟度確認'
      ]
    },
    {
      id: 'jlpt',
      title: 'JLPT対策講座',
      icon: <IoSchoolOutline />,
      color: '#F72585',
      description: 'N5~N1各レベルに対応した試験対策と模擬試験演習',
      features: [
        '各レベルの出題傾向と対策',
        '文法・語彙・読解・聴解の総合対策',
        '時間配分や解答テクニック指導',
        '過去問分析に基づく弱点克服'
      ]
    },
    {
      id: 'business',
      title: 'ビジネス日本語',
      icon: <IoBookOutline />,
      color: '#4CC9F0',
      description: '職場でのコミュニケーションから商談・プレゼンまで実践的なビジネススキル習得',
      features: [
        'ビジネスメール・文書作成指導',
        '会議・商談での敬語表現',
        'プレゼンテーション技法',
        '日本企業の文化・習慣理解'
      ]
    }
  ];

  // 指導方針
  const teachingPhilosophy = [
    {
      title: '個別最適化学習',
      icon: <IoPersonOutline />,
      color: '#10B981',
      description: '学習者の目標やレベルに合わせて、最適なカリキュラムと学習方法を提案。効率的な上達を実現します。'
    },
    {
      title: '日本文化の融合',
      icon: <IoStarOutline />,
      color: '#8B5CF6',
      description: '言語だけでなく、日本の文化・習慣・価値観も同時に学ぶことで、より深い日本語理解と運用能力を養成します。'
    }
  ];

  return (
    <section id="teaching" className="teaching-section">
      <div className="container">
        <motion.div 
          className="section-intro"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="section-subtitle">JAPANESE LANGUAGE TEACHING</div>
          <h2 className="with-decoration">日本語教師</h2>
          <p className="section-description">
            2歳で渡日、日本で15年以上の生活経験を持つ日本語教師として、日本語と日本文化の指導を行っています
          </p>
        </motion.div>

        {/* 教師プロフィール */}
        <motion.div 
          className="teaching-profile"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div 
            className="teaching-profile-content"
            variants={fadeInUp}
          >
            <h3>教師プロフィール</h3>
            <ul className="teaching-highlights">
              <li>
                <span className="highlight-dot" style={{ backgroundColor: '#4361EE' }}></span>
                <span className="highlight-text">日本語能力試験N1満点（180点）取得、高度な日本語運用能力</span>
              </li>
              <li>
                <span className="highlight-dot" style={{ backgroundColor: '#F72585' }}></span>
                <span className="highlight-text">京都大学言語教育学専攻（QS世界ランキングTOP50）</span>
              </li>
              <li>
                <span className="highlight-dot" style={{ backgroundColor: '#4CC9F0' }}></span>
                <span className="highlight-text">新東方日本語教師として7年、5,000時間以上の指導経験</span>
              </li>
              <li>
                <span className="highlight-dot" style={{ backgroundColor: '#10B981' }}></span>
                <span className="highlight-text">日本永住権保持、日本文化・社会への深い理解</span>
              </li>
            </ul>
          </motion.div>
          <motion.div 
            className="teaching-profile-skills"
            variants={fadeInUp}
          >
            <h3>専門スキル</h3>
            <div className="teaching-skills-container">
              <div className="teaching-skill">
                <h4>言語能力</h4>
                <p>日本語（母語レベル）、中国語（母語）</p>
              </div>
              <div className="teaching-skill">
                <h4>翻訳実績</h4>
                <p>学術論文・専門文献翻訳10万字以上、日中専門用語に精通</p>
              </div>
              <div className="teaching-skill">
                <h4>教授法</h4>
                <p>中日バイリンガル教授法、体系的文法指導、会話中心アプローチ</p>
              </div>
              <div className="teaching-skill">
                <h4>試験対策</h4>
                <p>JLPT全レベル対応、高い合格率、効率的な受験テクニック指導</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* コース紹介 */}
        <motion.div 
          className="teaching-courses"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer}
        >
          <motion.h3 
            variants={fadeInUp}
            className="courses-title"
          >
            提供コース
          </motion.h3>
          <div className="course-cards">
            {courses.map((course, index) => (
              <motion.div 
                key={course.id}
                className="course-card"
                variants={fadeInUp}
                custom={index}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.12)',
                  transition: { duration: 0.3 }
                }}
                style={{
                  borderTop: `3px solid ${course.color}`
                }}
              >
                <div className="course-icon" style={{ color: course.color }}>
                  {course.icon}
                </div>
                <h4>{course.title}</h4>
                <p className="course-description">{course.description}</p>
                <ul className="course-features">
                  {course.features.map((feature, i) => (
                    <li key={i}>
                      <span className="feature-bullet" style={{ backgroundColor: course.color }}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 指導方針 */}
        <motion.div 
          className="teaching-philosophy"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer}
        >
          <motion.h3 
            variants={fadeInUp}
            className="philosophy-title"
          >
            指導方針
          </motion.h3>
          <div className="philosophy-content">
            {teachingPhilosophy.map((philosophy, index) => (
              <motion.div 
                key={index}
                className="philosophy-item"
                variants={fadeInUp}
                custom={index}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="philosophy-icon" style={{ color: philosophy.color }}>
                  {philosophy.icon}
                </div>
                <div className="philosophy-text">
                  <h4>{philosophy.title}</h4>
                  <p>{philosophy.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 教育成果 */}
        <motion.div 
          className="teaching-results"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer}
        >
          <motion.h3 
            variants={fadeInUp}
            className="results-title"
          >
            教育成果
          </motion.h3>
          <motion.div 
            className="results-stats"
            variants={fadeInUp}
          >
            <div className="stat-item">
              <span className="stat-number">300+</span>
              <span className="stat-label">指導した学生数</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">JLPT合格率</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5000+</span>
              <span className="stat-label">総指導時間</span>
            </div>
          </motion.div>
          <motion.div 
            className="teaching-cta"
            variants={fadeInUp}
          >
            <p>
              日本語学習や日本文化について質問がありましたら、お気軽にご連絡ください。
              個別カリキュラムのご相談も承ります。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Teaching;