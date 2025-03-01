import React, { useContext } from 'react';
import './Research.css';
import { LanguageContext } from '../../contexts/LanguageContext';

const Research = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section id="research" className="research-section">
      <div className="container">
        <h2>{t.research.title}</h2>
        
        <div className="research-block">
          <h3>{t.research.mainTopics.title}</h3>
          <ul>
            {t.research.mainTopics.topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>
        
        <div className="research-block">
          <h3>{t.research.challenges.title}</h3>
          <p>{t.research.challenges.description}</p>
        </div>
        
        <div className="research-block">
          <h3>{t.research.futureInterests.title}</h3>
          <p>{t.research.futureInterests.description}</p>
        </div>

        <div className="research-block">
          <h3>{t.research.teamExperience.title}</h3>
          <p>{t.research.teamExperience.description}</p>
        </div>

        <div className="research-block">
          <h3>{t.research.careerFocus.title}</h3>
          <p>{t.research.careerFocus.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Research;