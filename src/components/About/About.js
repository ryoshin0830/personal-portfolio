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
          
          <div className="career-goals fade-in visible">
            <h3>キャリアビジョン</h3>
            <p>
              <strong>『常に開発の最前線に立ち、AIと先端Webテクノロジーの融合を推進する』</strong>
            </p>
            <p>
              Web系企業でのキャリアを目指し、最先端の開発環境で常にテクノロジーの最前線に立ち続けたいと考えています。特にReact、Node.js、モダンフロントエンド技術を活用したWebアプリケーション開発と、AIおよび大規模言語モデル（LLM）の実用的な応用に携わることで、技術革新の中心で活躍したいと思っています。
            </p>
            <p>
              短期的には、これまでの研究知見とプロダクト開発経験を活かし、AIと先端Webテクノロジーを組み合わせた革新的なソリューション開発に貢献したいと考えています。中長期的には、テックリードやアーキテクトとして技術チームを牽引し、複雑な技術課題を解決できるエンジニアとして成長していきたいです。言語とAIの専門知識を持つWeb開発者として、ユーザー体験の向上と技術的な革新の両立を追求します。
            </p>
            <p>
              多言語・多文化バックグラウンドと、教育学・コンピュータサイエンスの複合的な知識を強みに、AI技術の応用とWeb開発の融合領域で独自の価値を提供し続けることを目指します。常に新しい技術トレンドをキャッチアップし、学び続けることで、テクノロジーの進化と共に成長し、革新的なデジタルソリューションの創造に貢献していきます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;