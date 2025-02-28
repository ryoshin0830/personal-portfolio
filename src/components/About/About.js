import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="fade-in visible">会社・ビジョン情報</h2>
        <div className="company-info">
          <div className="company-detail fade-in visible">
            <h3>株式会社EastLinker</h3>
            <p><strong>設立:</strong> 2023</p>
            <p><strong>事業内容:</strong> システム開発、AI開発、教育テクノロジー</p>
            <p><strong>主な実績:</strong> 
              <ul>
                <li>国立国語研究所の語彙分析プロファイラー開発を受託</li>
                <li>言語学習アプリのプロトタイプ開発</li>
                <li>教育機関向けカスタムAIソリューション提供</li>
              </ul>
            </p>
          </div>
          
          <div className="mission-vision fade-in visible">
            <h3>企業ミッション</h3>
            <p>
              <strong>『言語の壁を超え、人と人をつなげる技術を創造する』</strong>
            </p>
            <p>
              EastLinkerは、最先端のAI技術と言語教育学の専門知識を融合させ、言語学習と異文化コミュニケーションの障壁を取り除くソリューションを提供します。日中の文化的・言語的な架け橋として、教育とテクノロジーの力で、より豊かな国際交流の未来を切り拓きます。
            </p>
          </div>
          
          <div className="vision-statement fade-in visible">
            <h3>長期ビジョン</h3>
            <p>
              <strong>2030年までのビジョン：</strong>
            </p>
            <ul>
              <li><strong>革新的な言語学習エコシステムの構築：</strong> 独自開発のLLMを核とした、適応型言語学習プラットフォームを確立し、10万人以上の学習者をサポートする</li>
              <li><strong>研究と実践の融合：</strong> 言語学習の理論研究と実用的なテクノロジー開発を継続的に循環させる独自のR&Dモデルを確立する</li>
              <li><strong>国際的な教育技術ハブへの成長：</strong> 日中の教育技術交流の中心となり、国際的な産学連携プロジェクトを複数主導する立場を目指す</li>
            </ul>
          </div>
          
          <div className="career-goals fade-in visible">
            <h3>キャリアビジョン</h3>
            <p>
              AIと教育の分野で活躍するテクノロジーリーダーを目指しています。特に大規模言語モデル（LLM）開発や運用、教育への応用研究に注力し、言語学習の未来を形作る革新的なソリューションの創造に携わりたいと考えています。
            </p>
            <p>
              短期的には、プロダクト開発スキルと研究知見を活かして教育テクノロジー分野での実績を築きながら、5年後には教育AI部門のテクニカルリーダーとして、チームを率いて新たな教育ソリューションの開発を主導したいと考えています。そして10年後には、教育×AI領域での第一人者として、国際的な教育テクノロジープロジェクトを牽引し、業界標準となるプラットフォームやフレームワークを生み出すことを目標としています。
            </p>
            <p>
              多言語環境での経験、教育学とコンピュータサイエンスの複合的な知識背景、そして実践的な開発経験を強みに、テクノロジーを通じて世界中の人々の学びを支援する未来を創造していきます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;