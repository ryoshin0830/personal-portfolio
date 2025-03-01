import React, { useState, useEffect, useContext } from 'react';
import './Skills.css';
import { LanguageContext } from '../../contexts/LanguageContext';
import { FaPython, FaJava, FaReact, FaNode, FaSwift, FaLinux, FaDocker, FaAws, FaGoogle, FaGit, FaServer, FaApple, FaCloud, FaCode, FaLaptopCode, FaDatabase, FaMobile, FaServer as FaServerIcon } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiNextdotjs, SiDjango, SiMongodb, SiMariadb, SiNginx, SiApache, SiTensorflow, SiPytorch, SiC, SiVercel, SiR, SiCaddy, SiLatex } from 'react-icons/si';
import { BiCloud } from 'react-icons/bi';
import { VscTools } from 'react-icons/vsc';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { t, language } = useContext(LanguageContext);
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
          description: 'フロントエンド・バックエンド開発の主力言語として使用。非同期処理やクロージャなどの高度な概念を理解し、モダンJavaScriptの機能を活用した効率的な開発を実践。React, Node.jsベースのアプリケーション構築に活用。プロトタイプの迅速な開発からパフォーマンス最適化まで幅広く対応。',
          main: true
        },
        {
          name: 'TypeScript',
          icon: <SiTypescript className="skill-icon" />,
          color: '#3178C6',
          description: '大規模プロジェクトでのコード品質と保守性向上のために導入。型安全性を活かした堅牢なコード設計により、バグを事前に検出し開発効率を向上。Next.jsと組み合わせたフルスタック開発で、型の一貫性を保持したAPIインターフェースを構築。ジェネリクスや高度な型システムを活用した再利用可能なコンポーネント設計も実践。',
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
          name: 'Objective-C',
          icon: <FaApple className="skill-icon" />,
          color: '#438EFF',
          description: 'レガシーiOSアプリの保守と機能拡張で使用。既存のObjective-Cコードベースを理解し、最新のSwiftコードと連携させる混合開発手法を実践。古いアプリを現代的な設計に段階的に移行する際に活用。'
        },
        {
          name: 'C',
          icon: <SiC className="skill-icon" />,
          color: '#A8B9CC',
          description: '大学の基礎プログラミング科目で学習し、低レベルメモリ管理やアルゴリズム実装に使用。パフォーマンスが重要な計算処理部分の最適化や、組み込みシステム向けのコンポーネント開発に活用。'
        },
        {
          name: 'Java',
          icon: <FaJava className="skill-icon" />,
          color: '#007396',
          description: 'Androidアプリ開発とバックエンドシステム構築に使用。オブジェクト指向設計の原則を活用し、堅牢で拡張性の高いシステムを開発。大学のプロジェクトでは分散システムの実装にも活用。'
        },
        {
          name: 'R',
          icon: <SiR className="skill-icon" />,
          color: '#276DC3',
          description: '統計解析と学術研究データの可視化に使用。言語データの統計モデリングや、教育効果の実証研究において複雑なデータ分析を実施。ggplot2などのライブラリを活用した効果的なデータ可視化を実践。'
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
          description: 'Vercelを活用した高パフォーマンスなウェブアプリケーション開発に使用。SSRとSSGを効果的に組み合わせ、SEO最適化とユーザー体験の向上を実現。APIルートを活用したサーバーレスバックエンド構築により、フロントエンドとバックエンドの統合開発を効率化。App RouterやServer Componentsなど最新機能も積極的に取り入れたモダンな開発手法を実践。',
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
          description: 'APIルートを活用したサーバーレスバックエンド構築により、フロントエンドとバックエンドの統合開発を効率化。TypeScriptと組み合わせて型安全なAPIの構築を実現。Route HandlersやServer Actionsなど、最新のサーバーサイド機能を活用した効率的なAPI設計と認証フローの実装も経験。',
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
          name: 'Linux',
          icon: <FaLinux className="skill-icon" />,
          color: '#FCC624',
          description: 'サーバー環境構築と運用管理に使用。Debian系(UbuntuなどのDebian派生ディストリビューション)での実務経験が豊富で、シェルスクリプトを活用した自動化、パッケージ管理、セキュリティ設定など、幅広い管理業務を担当。',
          main: true
        },
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
        },
        {
          name: 'Apache',
          icon: <SiApache className="skill-icon" />,
          color: '#D22128',
          description: '従来のウェブホスティング環境で使用。.htaccessによるURL書き換えやアクセス制御の設定、モジュール拡張機能を活用した機能拡張など、多機能なウェブサーバーとしての運用経験あり。'
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
          name: 'Google Cloud Platform',
          icon: <FaGoogle className="skill-icon" />,
          color: '#4285F4',
          description: 'LLMファインチューニングプロジェクトでのGPUリソース管理や、App Engineを使用したウェブアプリケーションのデプロイに活用。BigQueryでの大規模データ分析や、Cloud Storageを使用したデータセット管理も経験。'
        },
        {
          name: 'Vercel',
          icon: <SiVercel className="skill-icon" />,
          color: '#000000',
          description: 'Next.jsアプリケーションのデプロイと継続的インテグレーションに活用。ゼロコンフィグデプロイメントの利点を活かし、フロントエンド開発のワークフローを効率化。プレビュー環境の自動生成によるレビュープロセスの改善も実現。',
          main: true
        },
        {
          name: 'Alibaba Cloud',
          icon: <BiCloud className="skill-icon" />,
          color: '#FF6A00',
          description: '中国市場向けアプリケーションのホスティングと配信に使用。Function Computeでのサーバーレス機能実装や、Object Storage Serviceでのファイル管理、CDNによるコンテンツ配信の最適化を実施。'
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
          description: 'チーム開発で、開発環境と本番環境をコンテナ化して一致させることで、デプロイの効率化を実現。環境差異の問題を最小化し、開発プロセスをスムーズに。複数のマイクロサービスを連携させるDocker Composeの設定も経験。',
          main: true
        },
        {
          name: 'Git & Git LFS',
          icon: <FaGit className="skill-icon" />,
          color: '#F05032',
          description: 'コードのバージョン管理を徹底し、チームメンバー間の共同作業を容易に。ブランチ戦略を明確化し、複数開発者が同時に作業してもコンフリクトを最小化。大規模な機械学習プロジェクトでは、Git LFSを活用して大容量モデルファイルを効率的に管理。',
          main: true
        },
        {
          name: 'PyTorch',
          icon: <SiPytorch className="skill-icon" />,
          color: '#EE4C2C',
          description: '自然言語処理モデルの研究開発に使用。動的計算グラフの柔軟性を活かし、カスタムレイヤーや損失関数を実装。学習効率を高めるためのデータローダーの最適化や、モデルの推論速度向上のための量子化手法も実践。',
          main: true
        },
        {
          name: 'Axolotl',
          icon: <FaPython className="skill-icon" />,
          color: '#36B3A1',
          description: '大規模言語モデル(LLM)のファインチューニングフレームワークとして活用。教育特化型LLMの開発において、少ないデータと計算リソースで効率的にモデルを調整。QLoRAなどの最適化手法を用いたモデル調整プロセスを効率化。'
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
    },
    {
      library: 'Axolotl',
      icon: <FaPython className="skill-icon" />,
      color: '#36B3A1',
      purpose: 'LLMファインチューニングの効率化',
      description: '計算リソース制約下での効率的なモデル調整に活用。QLoRA、LoRAなどの技術を用いて、GPU要件を最小化しながら教育特化型LLMを開発。正規言語学習者の特性を考慮した独自データセットによるファインチューニングを実施。'
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

  // プロジェクトごとの技術スタック定義
  const projectsTechStack = [
    {
      id: 'japanese-learning',
      name: '日本語学習アプリ',
      description: '効率的な日本語単語学習とリスニング練習を提供するモバイルアプリ',
      icon: <FaMobile />,
      color: '#FF5757',
      technologies: [
        { name: 'React Native', icon: <FaReact />, category: 'フロントエンド', color: '#61DAFB' },
        { name: 'Swift', icon: <FaSwift />, category: 'ネイティブ開発', color: '#FF7F50' },
        { name: 'Node.js', icon: <FaNode />, category: 'バックエンド', color: '#339933' },
        { name: 'MongoDB', icon: <SiMongodb />, category: 'データベース', color: '#47A248' },
        { name: 'AliCloud Function Compute', icon: <FaCloud />, category: 'サーバーレス', color: '#FF6A00' }
      ],
      connections: [
        { from: 'React Native', to: 'Node.js', label: 'API通信' },
        { from: 'Swift', to: 'Node.js', label: 'API通信' },
        { from: 'Node.js', to: 'MongoDB', label: 'データ永続化' },
        { from: 'Node.js', to: 'AliCloud Function Compute', label: '処理実行' }
      ]
    },
    {
      id: 'vocabulary-profiler',
      name: '語彙プロファイラー',
      description: 'テキスト解析で単語の難易度を判定し、語彙レベルを可視化するウェブツール',
      icon: <FaCode />,
      color: '#4361EE',
      technologies: [
        { name: 'Next.js (フロントエンド)', icon: <SiNextdotjs />, category: 'フロントエンド', color: '#000000' },
        { name: 'Next.js (バックエンド)', icon: <SiNextdotjs />, category: 'API Routes', color: '#000000' },
        { name: 'AWS Lambda', icon: <FaAws />, category: 'MeCab形態素解析', color: '#FF9900' },
        { name: 'Node.js', icon: <FaNode />, category: 'ランタイム', color: '#339933' },
        { name: 'Vercel Postgres', icon: <FaDatabase />, category: 'データベース', color: '#000000' },
        { name: 'TypeScript', icon: <SiTypescript />, category: '言語', color: '#3178C6' }
      ],
      connections: [
        { from: 'Next.js (フロントエンド)', to: 'Next.js (バックエンド)', label: '内部API通信' },
        { from: 'Next.js (バックエンド)', to: 'AWS Lambda', label: 'MeCab形態素解析実行' },
        { from: 'Next.js (バックエンド)', to: 'Vercel Postgres', label: 'データ永続化' },
        { from: 'TypeScript', to: 'Next.js (フロントエンド)', label: 'フロントエンド型安全化' },
        { from: 'TypeScript', to: 'Next.js (バックエンド)', label: 'バックエンド型安全化' }
      ]
    },
    {
      id: 'lands-english',
      name: 'LandS英語学習アプリ',
      description: 'リスニングとスピーキングに特化した英語学習アプリケーション',
      icon: <FaLaptopCode />,
      color: '#10B981',
      technologies: [
        { name: 'Google Cloud Platform', icon: <FaGoogle />, category: 'クラウド', color: '#4285F4' },
        { name: 'Swift', icon: <FaSwift />, category: 'フロントエンド', color: '#FF7F50' },
        { name: 'Nginx', icon: <SiNginx />, category: 'Webサーバー', color: '#009639' },
        { name: 'MariaDB', icon: <SiMariadb />, category: 'データベース', color: '#003545' }
      ],
      connections: [
        { from: 'Swift', to: 'Nginx', label: 'API通信' },
        { from: 'Nginx', to: 'MariaDB', label: 'データアクセス' },
        { from: 'Google Cloud Platform', to: 'Nginx', label: 'ホスティング' },
        { from: 'Google Cloud Platform', to: 'MariaDB', label: 'ホスティング' }
      ]
    },
    {
      id: 'llm-analysis',
      name: 'LLM分析・ファインチューニング',
      description: '外国語教育に特化したLLMの分析・カスタマイズ研究プロジェクト',
      icon: <FaLaptopCode />,
      color: '#8B5CF6',
      technologies: [
        { name: 'Python', icon: <FaPython />, category: '言語', color: '#3776AB' },
        { name: 'TensorFlow', icon: <SiTensorflow />, category: 'フレームワーク', color: '#FF6F00' },
        { name: 'Transformers', icon: <FaPython />, category: 'ライブラリ', color: '#FFD21E' }
      ],
      connections: [
        { from: 'Python', to: 'TensorFlow', label: 'モデル構築' },
        { from: 'Python', to: 'Transformers', label: 'モデル操作' },
        { from: 'TensorFlow', to: 'Transformers', label: '連携' }
      ]
    }
  ];

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

  // アクティブなプロジェクト
  const [activeProject, setActiveProject] = useState('japanese-learning');

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
          <h2 className="with-decoration">{t.skills.title}</h2>
          <p className="section-description">
            {language === 'ja' && '普段使用している技術スタックをご紹介します'}
            {language === 'en' && 'Introducing the tech stack that I regularly use'}
            {language === 'zh' && '介绍我日常使用的技术栈'}
          </p>
        </motion.div>
        
        {/* プロジェクト別技術スタックセクション */}
        <motion.div 
          className="primary-skills-section projects-section"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h3 
            className="primary-skills-title"
            variants={fadeInUp}
          >
            {language === 'ja' && 'プロジェクト別技術スタック'}
            {language === 'en' && 'Tech Stack by Project'}
            {language === 'zh' && '按项目分类的技术栈'}
          </motion.h3>
          
          {/* プロジェクトセレクター */}
          <motion.div 
            className="project-selector"
            variants={fadeInUp}
          >
            {projectsTechStack.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-selector-item ${activeProject === project.id ? 'active' : ''}`}
                onClick={() => setActiveProject(project.id)}
                style={{
                  borderBottom: activeProject === project.id ? `3px solid ${project.color}` : 'none'
                }}
                whileHover={{ 
                  y: -3, 
                  backgroundColor: `${project.color}10`,
                  transition: { duration: 0.2 }
                }}
                variants={fadeInUp}
                custom={index}
              >
                <motion.div 
                  className="project-selector-icon"
                  style={{ color: project.color }}
                  whileHover={{ 
                    rotate: 10, 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  {project.icon}
                </motion.div>
                <h4>{project.name}</h4>
              </motion.div>
            ))}
          </motion.div>
          
          {/* 選択したプロジェクトの詳細 */}
          {projectsTechStack.map((project) => (
            <motion.div
              key={project.id}
              className="project-details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: activeProject === project.id ? 1 : 0,
                y: activeProject === project.id ? 0 : 20,
                display: activeProject === project.id ? 'block' : 'none'
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.div className="project-header">
                <motion.div 
                  className="project-icon" 
                  style={{ backgroundColor: project.color }}
                  initial={{ scale: 0.9 }}
                  animate={{ 
                    scale: [0.9, 1.05, 0.9],
                    rotateZ: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {project.icon}
                </motion.div>
                <div className="project-info">
                  <h3 style={{ color: project.color }}>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </motion.div>
              
              {/* 技術スタックの視覚化 */}
              <motion.div 
                className="tech-stack-visualization"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                {/* 上部のテクノロジーアイコン */}
                <div className="tech-icons-row">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      className="tech-icon-wrapper"
                      variants={fadeInUp}
                      custom={techIndex}
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div 
                        className="tech-icon" 
                        style={{ color: tech.color, borderColor: tech.color }}
                        animate={{ 
                          y: [0, -3, 0],
                          scale: [1, 1.03, 1]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          delay: techIndex * 0.2
                        }}
                      >
                        {tech.icon}
                      </motion.div>
                      <div className="tech-label" style={{ color: tech.color }}>
                        <span className="tech-name">{tech.name}</span>
                        <span className="tech-category">{tech.category}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* 接続線のアニメーション */}
                <div className="connections-container">
                  {project.connections.map((connection, connIndex) => {
                    // 接続元と接続先のインデックスを取得
                    const fromIndex = project.technologies.findIndex(tech => tech.name === connection.from);
                    const toIndex = project.technologies.findIndex(tech => tech.name === connection.to);
                    
                    // 両方の技術が見つからない場合はスキップ
                    if (fromIndex === -1 || toIndex === -1) return null;
                    
                    // 接続元と接続先の位置（簡易計算）
                    const fromPos = { x: (100 / (project.technologies.length - 1)) * fromIndex };
                    const toPos = { x: (100 / (project.technologies.length - 1)) * toIndex };
                    
                    const fromColor = project.technologies[fromIndex].color;
                    const toColor = project.technologies[toIndex].color;
                    
                    return (
                      <div key={`connection-${connIndex}`} className="connection-wrapper">
                        {/* カラーラベル付きの接続線 */}
                        <motion.div
                          className="connection-line"
                          style={{
                            position: 'absolute',
                            top: '60px',
                            left: `${Math.min(fromPos.x, toPos.x)}%`,
                            width: `${Math.abs(toPos.x - fromPos.x)}%`,
                            height: '4px',
                            background: `linear-gradient(to right, ${fromColor}, ${toColor})`,
                            zIndex: 1,
                            borderRadius: '4px'
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.abs(toPos.x - fromPos.x)}%` }}
                          transition={{
                            duration: 0.8,
                            delay: connIndex * 0.2 + 0.3
                          }}
                        >
                          {/* 流れるパーティクル */}
                          <motion.div
                            className="connection-particle"
                            style={{ background: `linear-gradient(to right, ${fromColor}, ${toColor})` }}
                            animate={{ left: ['0%', '100%'] }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: connIndex * 0.5
                            }}
                          />
                        </motion.div>
                        
                        {/* 明確に表示するラベル */}
                        <motion.div
                          className="connection-badge"
                          style={{
                            position: 'absolute',
                            top: `${20 + (connIndex % 2) * 30}px`, // 奇数と偶数で高さをずらす
                            left: `${Math.min(fromPos.x, toPos.x) + Math.abs(toPos.x - fromPos.x) / 2}%`,
                            transform: 'translateX(-50%)',
                            background: 'white',
                            color: '#333',
                            fontWeight: 'bold',
                            padding: '6px 12px',
                            borderRadius: '20px',
                            boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                            border: '1px solid rgba(0,0,0,0.05)',
                            zIndex: 10
                          }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: connIndex * 0.2 + 0.8
                          }}
                        >
                          {connection.label}
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
                
                {/* プロジェクト概要と使用技術の特徴 */}
                <motion.div 
                  className="tech-details-list"
                  variants={fadeInUp}
                >
                  <motion.div 
                    className="project-summary-card"
                    variants={fadeInUp}
                    custom={0}
                  >
                    <h3>プロジェクト概要</h3>
                    <p>{project.description}</p>
                    <div className="tech-stack-summary">
                      <h4>主な特徴:</h4>
                      <ul>
                        {project.id === 'japanese-learning' && (
                          <>
                            <li>React NativeとSwiftでクロスプラットフォーム対応</li>
                            <li>MongoDBによる柔軟なデータモデリング</li>
                            <li>AliCloudでのサーバーレス処理</li>
                          </>
                        )}
                        {project.id === 'vocabulary-profiler' && (
                          <>
                            <li>Next.jsによるフルスタック開発</li>
                            <li>AWS Lambda上でのMeCab形態素解析</li>
                            <li>TypeScriptによる堅牢なコード設計</li>
                          </>
                        )}
                        {project.id === 'lands-english' && (
                          <>
                            <li>Google Cloudベースの堅牢なインフラ</li>
                            <li>Swiftによるネイティブ体験の実現</li>
                            <li>Nginxによる高速レスポンス</li>
                          </>
                        )}
                        {project.id === 'llm-analysis' && (
                          <>
                            <li>TensorFlowによる大規模言語モデルの分析</li>
                            <li>外国語教育向けLLMカスタマイズ</li>
                            <li>Transformersライブラリ活用</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
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
          {language === 'ja' && '機械学習関連'}
          {language === 'en' && 'Machine Learning'}
          {language === 'zh' && '机器学习相关'}
        </motion.h2>
        <motion.h3 
          className="ml-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {language === 'ja' && '使用ライブラリと主なアルゴリズム'}
          {language === 'en' && 'Libraries and Main Algorithms'}
          {language === 'zh' && '使用的库和主要算法'}
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
          {language === 'ja' && '言語スキル'}
          {language === 'en' && 'Language Skills'}
          {language === 'zh' && '语言能力'}
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
            {language === 'ja' && 'アピールポイント・今後のビジョン'}
            {language === 'en' && 'Strengths & Future Vision'}
            {language === 'zh' && '优势特点与未来愿景'}
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