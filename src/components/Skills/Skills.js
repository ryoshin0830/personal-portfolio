import React from 'react';
import './Skills.css';

const Skills = () => {
  const programmingSkills = [
    {
      category: 'モバイルアプリ開発',
      skills: [
        {
          name: 'Swift',
          description: '学部の卒業論文では、Swiftを用いて「LANDS」という英語学習アプリを開発。ユーザーが効率的に英語を学べる直感的UIを設計。Appleの開発ドキュメントやコミュニティのサポートを参考に、iOSの機能実装に挑戦。'
        },
        {
          name: 'React Native',
          description: '現在、日本語学習アプリの開発に使用。クロスプラットフォーム対応アプリを迅速に開発できる利点を活かし、iOS/Android両対応のUI/UXを最適化。'
        }
      ]
    },
    {
      category: 'ウェブ開発',
      skills: [
        {
          name: 'JavaScript (React / Node.js)',
          description: '国立国語研究所の外部委託プロジェクトで語彙分析プロファイラーのWebサイトを作成。インタラクティブなダッシュボードをReact + Node.jsで構築し、リアルタイムデータ処理にWebSocketを導入。ExpressフレームワークでAPIを開発し、データ整合性を担保しながらリアルタイム更新を実現。'
        },
        {
          name: 'Django (Python)',
          description: 'Swiftで開発した「LANDS」のバックエンドとして導入。DjangoのORMを活用し、効率的なデータベース操作を実現。RESTful APIの設計やユーザー認証・管理機能の実装など、セキュリティと使いやすさを両立。'
        }
      ]
    },
    {
      category: 'サーバー・ミドルウェア',
      skills: [
        {
          name: 'Apache',
          description: 'Djangoベースのウェブアプリケーションのホスティングに日常的に使用。SSL/TLSやモジュールの有効化、リバースプロキシなどの設定でセキュリティやパフォーマンスを向上。'
        },
        {
          name: 'MariaDB',
          description: '語彙分析プロファイラーや学習アプリのバックエンドDBとして活用。大規模データを扱う際に、正規化やインデックス設定を駆使して高速クエリ処理を可能に。'
        },
        {
          name: 'Caddy2',
          description: 'ウェブサーバー・リバースプロキシとして導入。自動HTTPS機能を活かし、安全な通信環境を整備。Djangoとの連携で効率的なリバースプロキシ設定を構築。'
        }
      ]
    },
    {
      category: 'コンテナ・バージョン管理',
      skills: [
        {
          name: 'Docker',
          description: 'チーム開発で、開発環境と本番環境をコンテナ化して一致させることで、デプロイの効率化を実現。環境差異の問題を最小化し、開発プロセスをスムーズに。'
        },
        {
          name: 'Git',
          description: 'コードのバージョン管理を徹底し、チームメンバー間の共同作業を容易に。ブランチ戦略を明確化し、複数開発者が同時に作業してもコンフリクトを最小化。'
        }
      ]
    }
  ];

  const mlSkills = [
    {
      library: 'gensim (Skip-gram)',
      purpose: '修士論文「日本語語彙テスト自動生成プログラムの開発」',
      description: '大量の日本語テキストデータを前処理し、ノイズ除去してWord2Vecモデルを構築。語彙の類似度分析により、自動生成する語彙問題の品質向上を図った。'
    },
    {
      library: 'TensorFlow, Transformers (トランスフォーマーモデル)',
      purpose: '博士論文「外国語教育におけるLLMの応用」',
      description: '大規模言語モデル（LLM）のファインチューニング・構築に取り組む。外国語教育への応用を念頭におき、パラメータ調整やトレーニングプロセスの最適化を実施。'
    },
    {
      library: 'Scikit-learn (ニューラルネットワーク, ランダムフォレスト)',
      purpose: '語彙難易度予測モデルの開発',
      description: 'ニューラルネットワークとランダムフォレストを組み合わせたハイブリッドモデルを実装し、高精度な語彙難易度予測を目指す。'
    }
  ];

  const languageSkills = [
    {
      language: '日本語',
      level: '日本で生活経験15年。JLPT N1 180点（満点）。',
      details: '新東方日本語教師として7年、5,000時間以上の教育経験あり。'
    },
    {
      language: '中国語',
      level: 'ネイティブレベル',
      details: '北京出身で母国語。'
    },
    {
      language: '英語',
      level: 'TOEIC 625点',
      details: '研究論文の執筆や読解で使用。'
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-intro fade-in">
          <div className="section-subtitle">PROGRAMMING SKILLS</div>
          <h2 className="with-decoration">プログラミングスキル・使用技術</h2>
          <p className="section-description">エンジニアとして培った各種技術スタックとプロジェクト経験をご紹介します</p>
        </div>

        <div className="programming-skills">
          {programmingSkills.map((category, index) => (
            <div key={index} className="skill-category fade-in">
              <h3>{category.category}</h3>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <h4>{skill.name}</h4>
                  <p>{skill.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <h2 className="ml-title fade-in">機械学習関連</h2>
        <h3 className="ml-subtitle fade-in">使用ライブラリと主なアルゴリズム</h3>
        <div className="ml-skills">
          {mlSkills.map((skill, index) => (
            <div key={index} className="ml-skill-item stagger-item">
              <h4>{skill.library}</h4>
              <div className="ml-purpose">
                {skill.purpose}
              </div>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>

        <h2 className="language-title fade-in">言語スキル</h2>
        <div className="language-skills">
          {languageSkills.map((lang, index) => (
            <div key={index} className="language-item stagger-item">
              <h4>{lang.language}</h4>
              <p className="language-level">{lang.level}</p>
              <p>{lang.details}</p>
            </div>
          ))}
        </div>

        <div className="skill-highlights">
          <h3 className="fade-in visible">アピールポイント・今後のビジョン</h3>
          <div className="highlight-item slide-in-left visible">
            <h4>多言語・多文化バックグラウンド</h4>
            <p>
              日中バイリンガルとして、異なる文化や言語環境での生活経験を強みとしています。この経験は、国際的なチーム環境での円滑なコミュニケーションや、多様な視点からの問題解決に役立っています。さらに、新東方での日本語教師としての経験（7年、5,000時間以上）は、教育コンテンツ開発や効果的な知識伝達の基盤となっています。
            </p>
          </div>
          <div className="highlight-item slide-in-left visible">
            <h4>教育テクノロジーにおけるイノベーション</h4>
            <p>
              研究者としての専門知識とエンジニアとしての技術スキルを組み合わせ、教育と技術の融合に独自の価値を提供できます。語彙問題自動生成アルゴリズムの開発実績や、語彙難易度推定モデルの構築経験は、効率的な学習支援ツールの設計に直結します。国立国語研究所のプロジェクトでは、理論研究を実践的なWebアプリケーションとして具現化した経験があります。
            </p>
          </div>
          <div className="highlight-item slide-in-left visible">
            <h4>LLM特化型の言語学習プラットフォーム構築</h4>
            <p>
              今後5年間のビジョンとして、言語学習に特化した独自LLMの開発と、それを活用した包括的な学習プラットフォームの構築を目指しています。言語学の知見を取り入れた独自のトレーニングデータセットによる高精度なモデル構築、パーソナライズされた学習体験の提供、そして学習者の習熟度に合わせた適応型学習システムの実現に取り組みたいと考えています。また、これらの技術を通じて、言語教育のアクセシビリティ向上にも貢献していきたいです。
            </p>
          </div>
          <div className="highlight-item slide-in-left visible">
            <h4>チームマネジメント・リーダーシップ</h4>
            <p>
              技術的知識だけでなく、プロジェクト全体を見通す力とチームをリードする能力を磨いてきました。学部時代の英語学習アプリ「LANDS」開発では、GitやDockerの導入を主導し、チーム全体の技術力向上に貢献。修士・博士課程での複数プロジェクトでは、クリアなコミュニケーションと効率的なタスク分担を重視した進行管理を実践し、期限内での成果達成に貢献しました。このリーダーシップ経験は、今後のプロジェクト管理や技術チーム指導にも活かせると考えています。
            </p>
          </div>
          <div className="highlight-item slide-in-left visible">
            <h4>産学連携と知識共有の推進</h4>
            <p>
              研究成果を実社会に還元するため、産学連携プロジェクトの推進に積極的に取り組みたいと考えています。論文や学会発表だけでなく、オープンソースコミュニティへの貢献やテックブログの執筆などを通じて、知識共有の文化を広げていきたいです。特に、教育工学や言語処理技術の分野で、最新の研究成果を製品やサービスに橋渡しする役割を担い、実用的なイノベーションを生み出していく所存です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;