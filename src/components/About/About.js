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
            <p><strong>{t.about.company.achievementsLabel}</strong> 
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
              {t.about.mission.description}
            </p>
          </div>
          
          <div className="career-goals fade-in visible">
            <h3>{t.about.vision.title}</h3>
            <p>
              <strong>{t.about.vision.statement}</strong>
            </p>
            <p>
              {t.about.vision.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;