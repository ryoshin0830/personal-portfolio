import React, { useContext } from 'react';
import './About.css';
import { LanguageContext } from '../../contexts/LanguageContext';

const About = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="fade-in visible">{t.about.title}</h2>
        <div className="company-info">
          <div className="company-detail fade-in visible">
            <h3>{t.about.company.name}</h3>
            <p><strong>{t.about.company.established}</strong></p>
            <p><strong>{t.about.company.business}</strong></p>
            <p><strong>
              {t.language === 'ja' && '主な実績:'}
              {t.language === 'en' && 'Main Achievements:'}
              {t.language === 'zh' && '主要成就:'}
            </strong> 
              <ul>
                {t.about.company.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </p>
          </div>
          
          <div className="mission-vision fade-in visible">
            <h3>{t.about.mission.title}</h3>
            <p>
              <strong>{t.about.mission.statement}</strong>
            </p>
            <p>
              {t.language === 'ja' && 'EastLinkerは、最先端のAI技術と言語教育学の専門知識を融合させ、言語学習と異文化コミュニケーションの障壁を取り除くソリューションを提供します。日中の文化的・言語的な架け橋として、教育とテクノロジーの力で、より豊かな国際交流の未来を切り拓きます。'}
              {t.language === 'en' && 'EastLinker provides solutions that remove barriers to language learning and intercultural communication by combining cutting-edge AI technology with expertise in language education. As a cultural and linguistic bridge between Japan and China, we pioneer a richer future of international exchange through the power of education and technology.'}
              {t.language === 'zh' && 'EastLinker通过融合前沿AI技术和语言教育学专业知识，提供消除语言学习和跨文化交流障碍的解决方案。作为中日文化和语言的桥梁，我们通过教育和技术的力量，开创更丰富的国际交流未来。'}
            </p>
          </div>
          
          <div className="career-goals fade-in visible">
            <h3>{t.about.vision.title}</h3>
            <p>
              <strong>{t.about.vision.statement}</strong>
            </p>
            <p>
              {t.language === 'ja' && 'Web系企業でのキャリアを目指し、最先端の開発環境で常にテクノロジーの最前線に立ち続けたいと考えています。特にReact、Node.js、モダンフロントエンド技術を活用したWebアプリケーション開発と、AIおよび大規模言語モデル（LLM）の実用的な応用に携わることで、技術革新の中心で活躍したいと思っています。'}
              {t.language === 'en' && 'I aim for a career in web-based companies, wanting to constantly stand at the forefront of technology in cutting-edge development environments. I particularly want to be at the center of technological innovation by engaging in web application development using React, Node.js, and modern frontend technologies, as well as practical applications of AI and large language models (LLMs).'}
              {t.language === 'zh' && '我希望在Web领域企业中发展职业，在前沿开发环境中始终站在技术最前沿。特别是通过参与使用React、Node.js和现代前端技术的Web应用程序开发，以及AI和大型语言模型（LLM）的实际应用，我希望在技术创新的中心发挥作用。'}
            </p>
            <p>
              {t.language === 'ja' && '短期的には、これまでの研究知見とプロダクト開発経験を活かし、AIと先端Webテクノロジーを組み合わせた革新的なソリューション開発に貢献したいと考えています。中長期的には、テックリードやアーキテクトとして技術チームを牽引し、複雑な技術課題を解決できるエンジニアとして成長していきたいです。言語とAIの専門知識を持つWeb開発者として、ユーザー体験の向上と技術的な革新の両立を追求します。'}
              {t.language === 'en' && 'In the short term, I want to contribute to the development of innovative solutions combining AI and cutting-edge web technologies, leveraging my research insights and product development experience. In the medium to long term, I aim to grow as an engineer who can lead technical teams as a tech lead or architect and solve complex technical challenges. As a web developer with expertise in language and AI, I pursue the balance between enhancing user experience and technical innovation.'}
              {t.language === 'zh' && '短期内，我希望利用我的研究见解和产品开发经验，为结合AI和前沿Web技术的创新解决方案开发做出贡献。中长期来看，我的目标是成长为能够作为技术领导或架构师引领技术团队并解决复杂技术挑战的工程师。作为具有语言和AI专业知识的Web开发人员，我追求用户体验提升与技术创新的平衡。'}
            </p>
            <p>
              {t.language === 'ja' && '多言語・多文化バックグラウンドと、教育学・コンピュータサイエンスの複合的な知識を強みに、AI技術の応用とWeb開発の融合領域で独自の価値を提供し続けることを目指します。常に新しい技術トレンドをキャッチアップし、学び続けることで、テクノロジーの進化と共に成長し、革新的なデジタルソリューションの創造に貢献していきます。'}
              {t.language === 'en' && 'With my multilingual and multicultural background, and interdisciplinary knowledge of education and computer science as strengths, I aim to continue providing unique value in the convergence of AI technology applications and web development. By constantly catching up with new technology trends and continuing to learn, I will grow with the evolution of technology and contribute to the creation of innovative digital solutions.'}
              {t.language === 'zh' && '凭借多语言和多文化背景，以及教育学和计算机科学的跨学科知识作为优势，我的目标是在AI技术应用和Web开发的融合领域继续提供独特价值。通过不断跟进新的技术趋势并持续学习，我将随着技术的发展而成长，为创造创新的数字解决方案做出贡献。'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;