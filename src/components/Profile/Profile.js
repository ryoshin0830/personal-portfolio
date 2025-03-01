import React, { useContext } from 'react';
import './Profile.css';
import { LanguageContext } from '../../contexts/LanguageContext';

const Profile = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section id="profile" className="profile-section">
      <div className="container">
        <h2>{t.profile.title}</h2>
        <div className="profile-content">
          <div className="profile-details">
            <ul>
              <li><strong>{t.profile.labels.name}</strong> {t.profile.basicInfo.name}</li>
              <li><strong>{t.profile.labels.birthdate}</strong> {t.profile.basicInfo.birthdate}</li>
              <li><strong>{t.profile.labels.birthplace}</strong> {t.profile.basicInfo.birthplace}</li>
              <li><strong>{t.profile.labels.residence}</strong> {t.profile.basicInfo.residence}</li>
            </ul>
          </div>
          <div className="profile-summary">
            <p>{t.profile.summary.intro}</p>
            <p>{t.profile.summary.business}</p>
            <p>{t.profile.summary.development}</p>
            <p>{t.profile.summary.research}</p>
            <p>{t.profile.summary.focus}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;