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
              <li><strong>{t.language === 'ja' ? '名前:' : t.language === 'en' ? 'Name:' : '姓名:'}</strong> {t.profile.basicInfo.name}</li>
              <li><strong>{t.language === 'ja' ? '生年月日:' : t.language === 'en' ? 'Birth Date:' : '出生日期:'}</strong> {t.profile.basicInfo.birthdate}</li>
              <li><strong>{t.language === 'ja' ? '出身地:' : t.language === 'en' ? 'Birthplace:' : '出生地:'}</strong> {t.profile.basicInfo.birthplace}</li>
              <li><strong>{t.language === 'ja' ? '現住所:' : t.language === 'en' ? 'Residence:' : '现居地:'}</strong> {t.profile.basicInfo.residence}</li>
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