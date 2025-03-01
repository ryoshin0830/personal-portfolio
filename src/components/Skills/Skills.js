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
  const getTechCategories = () => {
    return [
      {
        id: 'languages',
        name: t.skills.programming.title,
        icon: <FaCode />,
        color: '#6366F1',
        animation: 'typing',
        description: t.skills.programming.description,
      },
      {
        id: 'frontend',
        name: t.skills.frontend.title,
        icon: <FaLaptopCode />,
        color: '#06B6D4',
        animation: 'rotate',
        description: t.skills.frontend.description,
      },
      {
        id: 'backend',
        name: t.skills.backend.title,
        icon: <FaServerIcon />,
        color: '#10B981',
        animation: 'pulse',
        description: t.skills.backend.description,
      },
      {
        id: 'database',
        name: t.skills.database.title,
        icon: <FaDatabase />,
        color: '#8B5CF6',
        animation: 'scale',
        description: t.skills.database.description,
      },
      {
        id: 'mobile',
        name: t.skills.mobile.title,
        icon: <FaMobile />,
        color: '#EC4899',
        animation: 'shake',
        description: t.skills.mobile.description,
      },
      {
        id: 'infra',
        name: t.skills.infrastructure.title,
        icon: <FaServer />,
        color: '#F59E0B',
        animation: 'float',
        description: t.skills.infrastructure.description,
      },
      {
        id: 'cloud',
        name: t.skills.cloud.title,
        icon: <BiCloud />,
        color: '#3B82F6',
        animation: 'float',
        description: t.skills.cloud.description,
      },
      {
        id: 'tools',
        name: t.skills.tools.title,
        icon: <VscTools />,
        color: '#EF4444',
        animation: 'bounce',
        description: t.skills.tools.description,
      }
    ];
  };

  // Get the categories with translated names
  const techCategories = getTechCategories();

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
      purpose: t.skills.ml?.tensorflow?.purpose || (language === 'ja' ? '博士論文「外国語教育におけるLLMの応用」' : 
               language === 'en' ? 'Doctoral thesis "Application of LLMs in Foreign Language Education"' : 
               '博士论文"大型语言模型在外语教育中的应用"'),
      description: t.skills.ml?.tensorflow?.description || (language === 'ja' ? '大規模言語モデル（LLM）のファインチューニング・構築に取り組む。外国語教育への応用を念頭におき、パラメータ調整やトレーニングプロセスの最適化を実施。TensorFlowのエコシステムを活用した本番環境デプロイメントも経験。' : 
                  language === 'en' ? 'Working on fine-tuning and building large language models (LLMs). With applications in foreign language education in mind, I implement parameter adjustment and optimization of training processes. I also have experience with production environment deployment using the TensorFlow ecosystem.' : 
                  '从事大型语言模型（LLM）的微调和构建工作。以外语教育应用为目标，实施参数调整和训练过程优化。也有使用TensorFlow生态系统进行生产环境部署的经验。'),
      main: true
    },
    {
      library: 'PyTorch',
      icon: <SiPytorch className="skill-icon" />,
      color: '#EE4C2C',
      purpose: t.skills.ml?.pytorch?.purpose || (language === 'ja' ? '自然言語処理モデルの研究開発' : 
               language === 'en' ? 'Research and development of natural language processing models' : 
               '自然语言处理模型的研究开发'),
      description: t.skills.ml?.pytorch?.description || (language === 'ja' ? '最新の言語モデルアーキテクチャの実装と実験に使用。動的計算グラフの柔軟性を活かし、カスタムレイヤーや損失関数を実装。分散学習を活用した大規模モデルのトレーニングや、量子化技術によるモデル最適化も実施。' : 
                  language === 'en' ? 'Used for implementation and experimentation with the latest language model architectures. Leveraging the flexibility of dynamic computation graphs to implement custom layers and loss functions. Also conducting training of large-scale models using distributed learning and model optimization using quantization techniques.' : 
                  '用于实现和试验最新的语言模型架构。利用动态计算图的灵活性实现自定义层和损失函数。还使用分布式学习进行大规模模型训练，以及使用量化技术进行模型优化。')
    },
    {
      library: 'Transformers (Hugging Face)',
      icon: <FaPython className="skill-icon" />,
      color: '#FFD21E',
      purpose: t.skills.ml?.transformers?.purpose || (language === 'ja' ? '最先端NLPモデルの研究と応用' : 
               language === 'en' ? 'Research and application of cutting-edge NLP models' : 
               '前沿NLP模型的研究和应用'),
      description: t.skills.ml?.transformers?.description || (language === 'ja' ? '事前学習済み言語モデルを活用した様々なNLPタスクの実装。テキスト生成、分類、要約などの機能を統合した教育支援システムの開発に貢献。モデルのカスタマイズとファインチューニングにより、教育コンテンツの自動生成の精度向上を実現。' : 
                  language === 'en' ? 'Implementation of various NLP tasks using pre-trained language models. Contributing to the development of educational support systems that integrate functions such as text generation, classification, and summarization. Improving the accuracy of automatic generation of educational content through model customization and fine-tuning.' : 
                  '使用预训练语言模型实现各种NLP任务。为整合文本生成、分类、摘要等功能的教育支持系统开发做出贡献。通过模型定制和微调提高教育内容自动生成的准确性。')
    },
    {
      library: 'Axolotl',
      icon: <FaPython className="skill-icon" />,
      color: '#36B3A1',
      purpose: t.skills.ml?.axolotl?.purpose || (language === 'ja' ? 'LLMファインチューニングの効率化' : 
               language === 'en' ? 'Efficient LLM fine-tuning' : 
               'LLM微调的效率化'),
      description: t.skills.ml?.axolotl?.description || (language === 'ja' ? '計算リソース制約下での効率的なモデル調整に活用。QLoRA、LoRAなどの技術を用いて、GPU要件を最小化しながら教育特化型LLMを開発。正規言語学習者の特性を考慮した独自データセットによるファインチューニングを実施。' : 
                  language === 'en' ? 'Utilized for efficient model adjustment under computational resource constraints. Developing education-specialized LLMs while minimizing GPU requirements using techniques such as QLoRA and LoRA. Conducting fine-tuning with original datasets that consider the characteristics of formal language learners.' : 
                  '用于在计算资源限制下高效调整模型。使用QLoRA、LoRA等技术，在最小化GPU需求的同时开发教育专用LLM。使用考虑正规语言学习者特点的原创数据集进行微调。')
    }
  ];

  const languageSkills = [
    {
      language: t.skills.languages?.japanese?.name || (language === 'ja' ? '日本語' : language === 'en' ? 'Japanese' : '日语'),
      icon: '🇯🇵',
      color: '#BC002D',
      level: t.skills.languages?.japanese?.level || (language === 'ja' ? '日本で生活経験15年' : 
             language === 'en' ? '15 years of living experience in Japan' :
             '在日本生活15年的经验'),
      details: t.skills.languages?.japanese?.details || (language === 'ja' ? 'JLPT N1 180点（満点）。新東方日本語教師として7年、5,000時間以上の教育経験あり。' : 
              language === 'en' ? 'JLPT N1 180 points (perfect score). 7 years and over 5,000 hours of experience as a Japanese teacher at New Oriental.' :
              'JLPT N1 180分（满分）。作为新东方日语教师，有7年、5,000多小时的教学经验。')
    },
    {
      language: t.skills.languages?.chinese?.name || (language === 'ja' ? '中国語' : language === 'en' ? 'Chinese' : '中文'),
      icon: '🇨🇳',
      color: '#DE2910',
      level: t.skills.languages?.chinese?.level || (language === 'ja' ? 'ネイティブレベル' : 
             language === 'en' ? 'Native level' :
             '母语水平'),
      details: t.skills.languages?.chinese?.details || (language === 'ja' ? '北京出身で母国語。' : 
              language === 'en' ? 'Native language as I am from Beijing.' :
              '北京出身，母语。')
    },
    {
      language: t.skills.languages?.english?.name || (language === 'ja' ? '英語' : language === 'en' ? 'English' : '英语'),
      icon: '🇬🇧',
      color: '#012169',
      level: t.skills.languages?.english?.level || (language === 'ja' ? 'TOEIC 625点' : 
             language === 'en' ? 'TOEIC 625 points' :
             'TOEIC 625分'),
      details: t.skills.languages?.english?.details || (language === 'ja' ? '研究論文の執筆や読解で使用。' : 
              language === 'en' ? 'Used for writing and reading research papers.' :
              '用于研究论文的写作和阅读。')
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
  const getProjectsTechStack = () => {
    return [
      {
        id: 'japanese-learning',
        name: t.skills.projects?.japaneseApp?.name || (language === 'ja' ? '日本語学習アプリ' : language === 'en' ? 'Japanese Learning App' : '日语学习应用'),
        description: t.skills.projects?.japaneseApp?.description || (language === 'ja' ? '効率的な日本語単語学習とリスニング練習を提供するモバイルアプリ' : language === 'en' ? 'Mobile app that provides efficient Japanese vocabulary learning and listening practice' : '提供高效日语单词学习和听力练习的移动应用'),
        icon: <FaMobile />,
        color: '#FF5757',
        technologies: [
          { 
            name: 'Swift', 
            icon: <FaSwift />, 
            category: t.skills.projects?.categories?.language || (language === 'ja' ? '言語' : language === 'en' ? 'Language' : '语言'), 
            color: '#FF7F50' 
          },
          { 
            name: 'Nginx', 
            icon: <SiNginx />, 
            category: t.skills.projects?.categories?.server || (language === 'ja' ? 'サーバー' : language === 'en' ? 'Server' : '服务器'), 
            color: '#009639' 
          },
          { 
            name: 'MariaDB', 
            icon: <SiMariadb />, 
            category: t.skills.projects?.categories?.database || (language === 'ja' ? 'データベース' : language === 'en' ? 'Database' : '数据库'), 
            color: '#003545' 
          },
          { 
            name: 'Google Cloud Platform', 
            icon: <FaGoogle />, 
            category: t.skills.projects?.categories?.infrastructure || (language === 'ja' ? 'インフラ' : language === 'en' ? 'Infrastructure' : '基础设施'), 
            color: '#4285F4' 
          }
        ],
        connections: [
          { 
            from: 'Swift', 
            to: 'Nginx', 
            label: t.skills.projects?.connections?.apiComm || (language === 'ja' ? 'API通信' : language === 'en' ? 'API Communication' : 'API通信') 
          },
          { 
            from: 'Nginx', 
            to: 'MariaDB', 
            label: t.skills.projects?.connections?.dataAccess || (language === 'ja' ? 'データアクセス' : language === 'en' ? 'Data Access' : '数据访问') 
          },
          { 
            from: 'Google Cloud Platform', 
            to: 'Nginx', 
            label: t.skills.projects?.connections?.hosting || (language === 'ja' ? 'ホスティング' : language === 'en' ? 'Hosting' : '托管') 
          },
          { 
            from: 'Google Cloud Platform', 
            to: 'MariaDB', 
            label: t.skills.projects?.connections?.hosting || (language === 'ja' ? 'ホスティング' : language === 'en' ? 'Hosting' : '托管') 
          }
        ]
      },
      {
        id: 'llm-analysis',
        name: t.skills.projects?.llmAnalysis?.name || (language === 'ja' ? 'LLM分析・ファインチューニング' : language === 'en' ? 'LLM Analysis & Fine-tuning' : 'LLM分析与微调'),
        description: t.skills.projects?.llmAnalysis?.description || (language === 'ja' ? '外国語教育に特化したLLMの分析・カスタマイズ研究プロジェクト' : language === 'en' ? 'Research project analyzing and customizing LLMs specialized for foreign language education' : '面向外语教育的LLM分析和定制研究项目'),
        icon: <FaLaptopCode />,
        color: '#8B5CF6',
        technologies: [
          { 
            name: 'Python', 
            icon: <FaPython />, 
            category: t.skills.projects?.categories?.language || (language === 'ja' ? '言語' : language === 'en' ? 'Language' : '语言'), 
            color: '#3776AB' 
          },
          { 
            name: 'TensorFlow', 
            icon: <SiTensorflow />, 
            category: t.skills.projects?.categories?.framework || (language === 'ja' ? 'フレームワーク' : language === 'en' ? 'Framework' : '框架'), 
            color: '#FF6F00' 
          },
          { 
            name: 'Transformers', 
            icon: <FaPython />, 
            category: t.skills.projects?.categories?.library || (language === 'ja' ? 'ライブラリ' : language === 'en' ? 'Library' : '库'), 
            color: '#FFD21E' 
          },
          { 
            name: 'PyTorch', 
            icon: <SiPytorch />, 
            category: t.skills.projects?.categories?.framework || (language === 'ja' ? 'フレームワーク' : language === 'en' ? 'Framework' : '框架'), 
            color: '#EE4C2C' 
          }
        ],
        connections: [
          { 
            from: 'Python', 
            to: 'TensorFlow', 
            label: t.skills.projects?.connections?.modelTraining || (language === 'ja' ? 'モデル訓練' : language === 'en' ? 'Model Training' : '模型训练') 
          },
          { 
            from: 'Python', 
            to: 'PyTorch', 
            label: t.skills.projects?.connections?.modelTraining || (language === 'ja' ? 'モデル訓練' : language === 'en' ? 'Model Training' : '模型训练') 
          },
          { 
            from: 'TensorFlow', 
            to: 'Transformers', 
            label: t.skills.projects?.connections?.integration || (language === 'ja' ? '連携' : language === 'en' ? 'Integration' : '集成') 
          },
          { 
            from: 'PyTorch', 
            to: 'Transformers', 
            label: t.skills.projects?.connections?.integration || (language === 'ja' ? '連携' : language === 'en' ? 'Integration' : '集成') 
          }
        ]
      },
    ];
  };
  
  const projectsTechStack = getProjectsTechStack();

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
            {t.skills.intro}
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
            {t.skills.projectsTitle}
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
                            <li>Google Cloud Platformによる堅牢なインフラ</li>
                          </>
                        )}
                        {project.id === 'llm-analysis' && (
                          <>
                            <li>Pythonによる大規模言語モデルの分析</li>
                            <li>TensorFlowとPyTorchによるモデル訓練</li>
                            <li>Transformersライブラリの活用</li>
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
          {t.skills.mlTitle}
        </motion.h2>
        <motion.h3 
          className="ml-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t.skills.mlSubtitle}
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
          {t.skills.languageTitle}
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
            {t.skills.highlightTitle}
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
            <h4>{t.skills.highlight1Title}</h4>
            <p>
              {t.skills.highlight1Description}
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
            <h4>{t.skills.highlight2Title}</h4>
            <p>
              {t.skills.highlight2Description}
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
            <h4>{t.skills.highlight3Title}</h4>
            <p>
              {t.skills.highlight3Description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;