import React, { useState, useEffect } from 'react';
import './Skills.css';
import { FaPython, FaJava, FaReact, FaNode, FaSwift, FaLinux, FaDocker, FaAws, FaGoogle, FaGit, FaServer, FaApple, FaCloud, FaCode, FaLaptopCode, FaDatabase, FaMobile, FaServer as FaServerIcon } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiNextdotjs, SiDjango, SiMongodb, SiMariadb, SiNginx, SiApache, SiTensorflow, SiPytorch, SiC, SiVercel, SiR, SiCaddy, SiLatex } from 'react-icons/si';
import { BiCloud } from 'react-icons/bi';
import { VscTools } from 'react-icons/vsc';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  // 技術スタックのカテゴリー定義
  const techCategories = [
    {
      id: 'languages',
      name: 'プログラミング言語',
      icon: <FaCode />,
      color: '#6366F1',
      animation: 'typing',
      description: '実務経験を持つプログラミング言語',
    },
    {
      id: 'frontend',
      name: 'フロントエンド開発',
      icon: <FaLaptopCode />,
      color: '#06B6D4',
      animation: 'rotate',
      description: 'モダンなUI開発技術',
    },
    {
      id: 'backend',
      name: 'バックエンド開発',
      icon: <FaServerIcon />,
      color: '#10B981',
      animation: 'pulse',
      description: 'サーバーサイド開発技術',
    },
    {
      id: 'database',
      name: 'データベース',
      icon: <FaDatabase />,
      color: '#8B5CF6',
      animation: 'scale',
      description: 'データ管理・保存技術',
    },
    {
      id: 'mobile',
      name: 'モバイルアプリ開発',
      icon: <FaMobile />,
      color: '#EC4899',
      animation: 'shake',
      description: 'iOS/Androidアプリ開発',
    },
    {
      id: 'infra',
      name: 'インフラ・ミドルウェア',
      icon: <FaServer />,
      color: '#F59E0B',
      animation: 'float',
      description: 'サーバー/デプロイ技術',
    },
    {
      id: 'cloud',
      name: 'クラウド・デプロイメント',
      icon: <BiCloud />,
      color: '#3B82F6',
      animation: 'float',
      description: 'クラウドサービス活用技術',
    },
    {
      id: 'tools',
      name: 'コンテナ・開発ツール',
      icon: <VscTools />,
      color: '#EF4444',
      animation: 'bounce',
      description: '開発効率化ツール',
    }
  ];

  // 各カテゴリーに対応するスキル
  const programmingSkills = [
    {
      category: 'languages',
      skills: [
        {
          name: 'JavaScript',
          icon: <SiJavascript className="skill-icon" />,
          color: '#F7DF1E',
          description: 'フロントエンド・バックエンド開発の主力言語として使用。非同期処理やクロージャなどの高度な概念を理解し、モダンJavaScriptの機能を活用した効率的な開発を実践。React, Node.jsベースのアプリケーション構築に活用。',
          main: true
        },
        {
          name: 'TypeScript',
          icon: <SiTypescript className="skill-icon" />,
          color: '#3178C6',
          description: '大規模プロジェクトでのコード品質と保守性向上のために導入。型安全性を活かした堅牢なコード設計により、バグを事前に検出し開発効率を向上。Next.jsと組み合わせたフルスタック開発で、型の一貫性を保持したAPIインターフェースを構築。',
          main: true
        },
        {
          name: 'Python',
          icon: <FaPython className="skill-icon" />,
          color: '#3776AB',
          description: '機械学習プロジェクトやWebバックエンド開発で主に使用。データ分析、自然言語処理、APIサーバー構築など多岐にわたる用途で活用。Jupyter NotebookやGoogle Colabを用いた研究実験の実施や、大規模言語データの前処理にも利用。',
          main: true
        },
        {
          name: 'Swift',
          icon: <FaSwift className="skill-icon" />,
          color: '#FF7F50',
          description: '学部の卒業論文では、Swiftを用いて「LANDS」という英語学習アプリを開発。ユーザーが効率的に英語を学べる直感的UIを設計。Appleの開発ドキュメントやコミュニティのサポートを参考に、iOSの機能実装に挑戦。'
        },
        {
          name: 'C',
          icon: <SiC className="skill-icon" />,
          color: '#A8B9CC',
          description: '大学の基礎プログラミング科目で学習し、低レベルメモリ管理やアルゴリズム実装に使用。パフォーマンスが重要な計算処理部分の最適化や、組み込みシステム向けのコンポーネント開発に活用。'
        }
      ]
    },
    {
      category: 'frontend',
      skills: [
        {
          name: 'React',
          icon: <FaReact className="skill-icon" />,
          color: '#61DAFB',
          description: 'コンポーネントベースのUI開発に使用。Hooksを活用した効率的な状態管理や、カスタムフックの作成によるロジックの再利用を実践。国立国語研究所のプロジェクトではインタラクティブなダッシュボードを構築し、リアルタイムデータ処理を実現。',
          main: true
        },
        {
          name: 'Next.js',
          icon: <SiNextdotjs className="skill-icon" />,
          color: '#000000',
          description: 'Vercelを活用した高パフォーマンスなウェブアプリケーション開発に使用。SSRとSSGを効果的に組み合わせ、SEO最適化とユーザー体験の向上を実現。APIルートを活用したサーバーレスバックエンド構築により、フロントエンドとバックエンドの統合開発を効率化。',
          main: true
        }
      ]
    },
    {
      category: 'backend',
      skills: [
        {
          name: 'Next.js',
          icon: <SiNextdotjs className="skill-icon" />,
          color: '#000000',
          description: 'APIルートを活用したサーバーレスバックエンド構築により、フロントエンドとバックエンドの統合開発を効率化。TypeScriptと組み合わせて型安全なAPIの構築を実現。',
          main: true
        },
        {
          name: 'Node.js',
          icon: <FaNode className="skill-icon" />,
          color: '#339933',
          description: 'WebSocketを用いたリアルタイム通信機能の実装やRESTful APIの構築に活用。Expressフレームワークを用いてスケーラブルなバックエンドシステムを設計し、データ整合性を担保しながらリアルタイム更新を実現。',
          main: true
        },
        {
          name: 'Django',
          icon: <SiDjango className="skill-icon" />,
          color: '#092E20',
          description: 'Swiftで開発した「LANDS」のバックエンドとして導入。DjangoのORMを活用し、効率的なデータベース操作を実現。RESTful APIの設計やユーザー認証・管理機能の実装など、セキュリティと使いやすさを両立。'
        }
      ]
    },
    {
      category: 'database',
      skills: [
        {
          name: 'MongoDB',
          icon: <SiMongodb className="skill-icon" />,
          color: '#47A248',
          description: '日本語学習アプリのデータベースとして採用。柔軟なドキュメント指向のスキーマを活用し、複雑な学習データや進捗情報を効率的に格納。データの高速クエリとアグリゲーション機能を活用して、パーソナライズされた学習体験を提供。',
          main: true
        },
        {
          name: 'MariaDB',
          icon: <SiMariadb className="skill-icon" />,
          color: '#003545',
          description: '語彙分析プロファイラーや学習アプリのバックエンドDBとして活用。大規模データを扱う際に、正規化やインデックス設定を駆使して高速クエリ処理を可能に。'
        }
      ]
    },
    {
      category: 'mobile',
      skills: [
        {
          name: 'React Native',
          icon: <FaReact className="skill-icon" />,
          color: '#61DAFB',
          description: 'クロスプラットフォームモバイルアプリ開発に活用。単一のコードベースからiOSとAndroid両方に対応するアプリを開発し、開発効率を大幅に向上。ネイティブモジュールの統合やパフォーマンス最適化の知識も保有。',
          main: true
        },
        {
          name: 'Swift',
          icon: <FaSwift className="skill-icon" />,
          color: '#FF7F50',
          description: 'iOSネイティブアプリ開発言語として使用。UIKitを用いたインターフェース構築、CoreDataによるデータ永続化など、iOSのフレームワークを活用したアプリ開発を実践。'
        }
      ]
    },
    {
      category: 'infra',
      skills: [
        {
          name: 'Caddy2',
          icon: <SiCaddy className="skill-icon" />,
          color: '#00ADD8',
          description: 'ウェブサーバー・リバースプロキシとして導入。自動HTTPS機能を活かし、安全な通信環境を整備。Djangoとの連携で効率的なリバースプロキシ設定を構築。',
          main: true
        },
        {
          name: 'Nginx',
          icon: <SiNginx className="skill-icon" />,
          color: '#009639',
          description: '高トラフィックWebサイトのロードバランシングとリバースプロキシとして導入。静的コンテンツのキャッシュ設定や、SSL/TLS証明書の管理、HTTP/2対応など、パフォーマンスとセキュリティの最適化を実施。'
        }
      ]
    },
    {
      category: 'cloud',
      skills: [
        {
          name: 'AWS',
          icon: <FaAws className="skill-icon" />,
          color: '#FF9900',
          description: 'サーバーレスアーキテクチャを活用した効率的なバックエンド構築に使用。Lambdaでマイクロサービスを実装し、S3でコスト効率の高いファイルストレージを実現。大規模なデータ処理をクラウドネイティブな方法で効率化。',
          main: true
        },
        {
          name: 'Vercel',
          icon: <SiVercel className="skill-icon" />,
          color: '#000000',
          description: 'Next.jsアプリケーションのデプロイと継続的インテグレーションに活用。ゼロコンフィグデプロイメントの利点を活かし、フロントエンド開発のワークフローを効率化。プレビュー環境の自動生成によるレビュープロセスの改善も実現。',
          main: true
        }
      ]
    },
    {
      category: 'tools',
      skills: [
        {
          name: 'Docker',
          icon: <FaDocker className="skill-icon" />,
          color: '#2496ED',
          description: 'チーム開発で、開発環境と本番環境をコンテナ化して一致させることで、デプロイの効率化を実現。環境差異の問題を最小化し、開発プロセスをスムーズに。',
          main: true
        },
        {
          name: 'Git',
          icon: <FaGit className="skill-icon" />,
          color: '#F05032',
          description: 'コードのバージョン管理を徹底し、チームメンバー間の共同作業を容易に。ブランチ戦略を明確化し、複数開発者が同時に作業してもコンフリクトを最小化。',
          main: true
        }
      ]
    }
  ];

  const mlSkills = [
    {
      library: 'TensorFlow',
      icon: <SiTensorflow className="skill-icon" />,
      color: '#FF6F00',
      purpose: '博士論文「外国語教育におけるLLMの応用」',
      description: '大規模言語モデル（LLM）のファインチューニング・構築に取り組む。外国語教育への応用を念頭におき、パラメータ調整やトレーニングプロセスの最適化を実施。TensorFlowのエコシステムを活用した本番環境デプロイメントも経験。',
      main: true
    },
    {
      library: 'PyTorch',
      icon: <SiPytorch className="skill-icon" />,
      color: '#EE4C2C',
      purpose: '自然言語処理モデルの研究開発',
      description: '最新の言語モデルアーキテクチャの実装と実験に使用。動的計算グラフの柔軟性を活かし、カスタムレイヤーや損失関数を実装。分散学習を活用した大規模モデルのトレーニングや、量子化技術によるモデル最適化も実施。'
    },
    {
      library: 'Transformers (Hugging Face)',
      icon: <FaPython className="skill-icon" />,
      color: '#FFD21E',
      purpose: '最先端NLPモデルの研究と応用',
      description: '事前学習済み言語モデルを活用した様々なNLPタスクの実装。テキスト生成、分類、要約などの機能を統合した教育支援システムの開発に貢献。モデルのカスタマイズとファインチューニングにより、教育コンテンツの自動生成の精度向上を実現。'
    }
  ];

  const languageSkills = [
    {
      language: '日本語',
      icon: '🇯🇵',
      color: '#BC002D',
      level: '日本で生活経験15年',
      details: 'JLPT N1 180点（満点）。新東方日本語教師として7年、5,000時間以上の教育経験あり。'
    },
    {
      language: '中国語',
      icon: '🇨🇳',
      color: '#DE2910',
      level: 'ネイティブレベル',
      details: '北京出身で母国語。'
    },
    {
      language: '英語',
      icon: '🇬🇧',
      color: '#012169',
      level: 'TOEIC 625点',
      details: '研究論文の執筆や読解で使用。'
    }
  ];

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

  // カテゴリーごとのアニメーション設定
  const motionVariants = {
    typing: {
      initial: { scale: 1 },
      animate: { 
        scale: [1, 1.05, 1],
        transition: {
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }
    },
    rotate: {
      initial: { rotate: 0 },
      animate: { 
        rotate: 360,
        transition: {
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }
      }
    },
    pulse: {
      initial: { scale: 1, opacity: 1 },
      animate: { 
        scale: [1, 1.1, 1],
        opacity: [1, 0.8, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    scale: {
      initial: { scale: 1 },
      animate: { 
        scale: [1, 1.2, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    shake: {
      initial: { x: 0 },
      animate: { 
        x: [-2, 2, -2, 2, 0],
        transition: {
          duration: 0.5,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 2
        }
      }
    },
    float: {
      initial: { y: 0 },
      animate: { 
        y: [0, -6, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    bounce: {
      initial: { y: 0 },
      animate: { 
        y: [0, -8, 0],
        transition: {
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeOut"
        }
      }
    }
  };

  // InView Hook
  const [techCategoryRef, techCategoryInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  // アクティブカテゴリーのステート
  const [activeCategory, setActiveCategory] = useState('languages');

  // 主力スキルをフィルタリングする関数
  const getMainSkills = () => {
    return programmingSkills.flatMap(categorySkills => {
      return categorySkills.skills.filter(skill => skill.main).map(skill => ({
        ...skill,
        category: categorySkills.category
      }));
    });
  };

  // 選択されたカテゴリーのスキルを取得
  const getSkillsByCategory = (categoryId) => {
    const categorySkills = programmingSkills.find(cat => cat.category === categoryId);
    return categorySkills ? categorySkills.skills : [];
  };

  // カテゴリーの詳細を取得
  const getCategoryDetails = (categoryId) => {
    return techCategories.find(cat => cat.id === categoryId);
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div 
          className="section-intro"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="section-subtitle">TECH STACK & SKILLS</div>
          <h2 className="with-decoration">プログラミングスキル・使用技術</h2>
          <p className="section-description">普段使用している技術スタックをご紹介します</p>
        </motion.div>
        
        {/* 主力技術スキルセクション */}
        <motion.div 
          className="primary-skills-section"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h3 
            className="primary-skills-title"
            variants={fadeInUp}
          >
            主力技術スタック
          </motion.h3>
          <div className="primary-skills-grid">
            {getMainSkills().map((skill, index) => (
              <motion.div 
                key={`primary-${index}`}
                className="primary-skill-item"
                variants={fadeInUp}
                custom={index}
                style={{ 
                  borderLeftColor: skill.color,
                  '--index': index 
                }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="primary-skill-icon" 
                  style={{color: skill.color}}
                  whileHover={{ 
                    rotate: 10, 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  {skill.icon}
                </motion.div>
                <div className="primary-skill-info">
                  <h4 className="primary-skill-name">{skill.name}</h4>
                  <p className="primary-skill-category">
                    {getCategoryDetails(skill.category)?.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 技術スタックカテゴリーセレクター */}
        <motion.div 
          ref={techCategoryRef}
          className="tech-category-selector"
          initial="hidden"
          animate={techCategoryInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {techCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className={`tech-category-item ${activeCategory === category.id ? 'active' : ''}`}
              variants={fadeInUp}
              custom={index}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="tech-category-icon" 
                style={{ color: category.color }}
                initial="initial"
                animate="animate"
                variants={motionVariants[category.animation]}
              >
                {category.icon}
              </motion.div>
              <h4>{category.name}</h4>
            </motion.div>
          ))}
        </motion.div>

        {/* 選択されたカテゴリーのスキル */}
        <motion.div 
          className="selected-category-skills"
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="selected-category-header">
            <div className="selected-category-icon" style={{ backgroundColor: getCategoryDetails(activeCategory)?.color }}>
              {getCategoryDetails(activeCategory)?.icon}
            </div>
            <div className="selected-category-info">
              <h3>{getCategoryDetails(activeCategory)?.name}</h3>
              <p>{getCategoryDetails(activeCategory)?.description}</p>
            </div>
          </div>
          
          <motion.div 
            className="skills-grid"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {getSkillsByCategory(activeCategory).map((skill, skillIndex) => (
              <motion.div 
                key={skillIndex}
                className={`skill-card ${skill.main ? 'main-skill' : ''}`}
                variants={fadeInUp}
                custom={skillIndex}
                style={{
                  borderTop: `3px solid ${skill.color}`
                }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.12)',
                  transition: { duration: 0.3 }
                }}
              >
                <div className="skill-card-header" style={{color: skill.color}}>
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h4>{skill.name}</h4>
                  {skill.main && <span className="main-badge">主力</span>}
                </div>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="tech-divider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <div className="tech-line"></div>
          <div className="tech-dot"></div>
          <div className="tech-line"></div>
        </motion.div>

        <motion.h2 
          className="ml-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          機械学習関連
        </motion.h2>
        <motion.h3 
          className="ml-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          使用ライブラリと主なアルゴリズム
        </motion.h3>
        <motion.div 
          className="ml-skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer}
        >
          {mlSkills.map((skill, index) => (
            <motion.div 
              key={index}
              className="ml-skill-item"
              variants={fadeInUp}
              custom={index}
              style={{
                borderTop: `3px solid ${skill.color}`,
                '--i': index
              }}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.12)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="ml-skill-header" style={{color: skill.color}}>
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.icon}
                </motion.div>
                <h4>{skill.library}</h4>
              </div>
              <div className="ml-purpose">
                {skill.purpose}
              </div>
              <p>{skill.description}</p>
              {/* ML固有のアニメーション要素 */}
              <motion.div 
                className="ml-animation-element"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: [0.8, 1, 0.8],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ backgroundColor: `${skill.color}20` }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="tech-divider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <div className="tech-line"></div>
          <div className="tech-dot"></div>
          <div className="tech-line"></div>
        </motion.div>

        <motion.h2 
          className="language-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          言語スキル
        </motion.h2>
        <motion.div 
          className="language-skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer}
        >
          {languageSkills.map((lang, index) => (
            <motion.div 
              key={index}
              className="language-item"
              variants={fadeInUp}
              custom={index}
              style={{
                borderTop: `3px solid ${lang.color}`
              }}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.12)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="language-header">
                <motion.span 
                  className="language-flag"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {lang.icon}
                </motion.span>
                <h4>{lang.language}</h4>
              </div>
              <p className="language-level">{lang.level}</p>
              <p>{lang.details}</p>
              {/* 言語固有のアニメーション要素 */}
              <motion.div 
                className="language-wave"
                style={{ backgroundColor: `${lang.color}10` }}
                initial={{ 
                  opacity: 0.5,
                  pathLength: 0 
                }}
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="tech-divider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <div className="tech-line"></div>
          <div className="tech-dot"></div>
          <div className="tech-line"></div>
        </motion.div>

        <motion.div 
          className="skill-highlights"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer}
        >
          <motion.h3 
            variants={fadeInUp}
          >
            アピールポイント・今後のビジョン
          </motion.h3>
          <motion.div 
            className="highlight-item"
            variants={fadeInUp}
            custom={1}
            whileHover={{ 
              y: -5, 
              x: 5,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
              transition: { duration: 0.3 }
            }}
          >
            <h4>多言語・多文化バックグラウンド</h4>
            <p>
              日中バイリンガルとして、異なる文化や言語環境での生活経験を強みとしています。この経験は、国際的なチーム環境での円滑なコミュニケーションや、多様な視点からの問題解決に役立っています。さらに、新東方での日本語教師としての経験（7年、5,000時間以上）は、教育コンテンツ開発や効果的な知識伝達の基盤となっています。
            </p>
          </motion.div>
          <motion.div 
            className="highlight-item"
            variants={fadeInUp}
            custom={2}
            whileHover={{ 
              y: -5, 
              x: 5,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
              transition: { duration: 0.3 }
            }}
          >
            <h4>教育テクノロジーにおけるイノベーション</h4>
            <p>
              研究者としての専門知識とエンジニアとしての技術スキルを組み合わせ、教育と技術の融合に独自の価値を提供できます。語彙問題自動生成アルゴリズムの開発実績や、語彙難易度推定モデルの構築経験は、効率的な学習支援ツールの設計に直結します。国立国語研究所のプロジェクトでは、理論研究を実践的なWebアプリケーションとして具現化した経験があります。
            </p>
          </motion.div>
          <motion.div 
            className="highlight-item"
            variants={fadeInUp}
            custom={3}
            whileHover={{ 
              y: -5, 
              x: 5,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
              transition: { duration: 0.3 }
            }}
          >
            <h4>LLM特化型の言語学習プラットフォーム構築</h4>
            <p>
              今後5年間のビジョンとして、言語学習に特化した独自LLMの開発と、それを活用した包括的な学習プラットフォームの構築を目指しています。言語学の知見を取り入れた独自のトレーニングデータセットによる高精度なモデル構築、パーソナライズされた学習体験の提供、そして学習者の習熟度に合わせた適応型学習システムの実現に取り組みたいと考えています。また、これらの技術を通じて、言語教育のアクセシビリティ向上にも貢献していきたいです。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;