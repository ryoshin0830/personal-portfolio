import React, { useContext } from 'react';
import './Education.css';
import { LanguageContext } from '../../contexts/LanguageContext';
import { ReactComponent as PlaneIcon } from '../../assets/icons/plane.svg';
import { ReactComponent as GraduationIcon } from '../../assets/icons/graduation.svg';
import { ReactComponent as BirthIcon } from '../../assets/icons/birth.svg';
import { ReactComponent as SchoolIcon } from '../../assets/icons/school.svg';
import { ReactComponent as UniversityIcon } from '../../assets/icons/university.svg';
import { ReactComponent as ResearchIcon } from '../../assets/icons/research.svg';
import { ReactComponent as StartupIcon } from '../../assets/icons/startup.svg';
import { ReactComponent as VerticalFlightPath } from '../../assets/icons/vertical-flight-path.svg';

const TimeLine = () => {
  const { t, language } = useContext(LanguageContext);
  // タイムラインデータをt.education.eventsから取得
  const timelineData = t.education.events.map(event => {
    // アイコンとロケーションのマッピング
    let icon = 'birth';
    let location = 'china';
    let highlight = false;
    let direction = '';
    let transition = {};
    let universityLogo = '';
    
    // 年に基づいてアイコンとその他の属性を設定
    switch(event.year) {
      case '1997年':
      case '1997':
        icon = 'birth';
        location = 'china';
        break;
      case '1999年':
      case '1999':
        icon = 'plane';
        location = 'japan';
        highlight = true;
        direction = 'china-to-japan';
        transition = {
          from: 'china',
          to: 'japan',
          type: 'international'
        };
        break;
      case '2009年':
      case '2009':
        icon = 'plane';
        location = 'china';
        highlight = true;
        direction = 'japan-to-china';
        transition = {
          from: 'japan',
          to: 'china',
          type: 'international'
        };
        break;
      case '2013年':
      case '2013':
        icon = 'school';
        location = 'china';
        transition = {
          from: 'education',
          to: 'education',
          type: 'educational'
        };
        break;
      case '2016年':
      case '2016':
        icon = 'university';
        location = 'china';
        transition = {
          from: 'education',
          to: 'education',
          type: 'educational'
        };
        break;
      case '2020年':
      case '2020':
        icon = 'graduation';
        location = 'china';
        transition = {
          from: 'education',
          to: 'education',
          type: 'educational'
        };
        break;
      case '2021年':
      case '2021':
        // タイトルで分岐
        if (event.title.includes('再来日') || event.title.includes('Return') || event.title.includes('再次来到')) {
          icon = 'plane';
          location = 'japan';
          highlight = true;
          direction = 'china-to-japan';
          transition = {
            from: 'china',
            to: 'japan',
            type: 'international',
            direction: 'vertical'
          };
        } else {
          icon = 'university';
          location = 'japan';
          highlight = true;
          universityLogo = 'kyoto';
          transition = {
            from: 'education',
            to: 'education',
            type: 'educational'
          };
        }
        break;
      case '2023年':
      case '2023':
        // タイトルで分岐
        if (event.title.includes('起業') || event.title.includes('Business') || event.title.includes('创业')) {
          icon = 'startup';
          location = 'japan';
          highlight = true;
          transition = {
            from: 'education',
            to: 'business',
            type: 'career'
          };
        } else if (event.title.includes('修了') || event.title.includes('Completed') || event.title.includes('完成')) {
          icon = 'graduation';
          location = 'japan';
          transition = {
            from: 'education',
            to: 'education',
            type: 'educational'
          };
        } else {
          icon = 'research';
          location = 'japan';
          highlight = true;
          universityLogo = 'kyoto';
          transition = {
            from: 'education',
            to: 'education',
            type: 'educational'
          };
        }
        break;
      default:
        break;
    }
    
    // 説明をアイテムの配列に変換
    const items = [event.description];
    
    return {
      year: event.year,
      age: '',
      items,
      title: event.title,
      icon,
      highlight,
      location,
      direction,
      transition,
      universityLogo: universityLogo || undefined
    };
  });

  // アイコンを取得する関数
  const getIcon = (iconType, direction) => {
    switch(iconType) {
      case 'plane':
        return <PlaneIcon className={`timeline-icon plane ${direction}`} />;
      case 'graduation':
        return <GraduationIcon className="timeline-icon graduation" />;
      case 'school':
        return <SchoolIcon className="timeline-icon school" />;
      case 'university':
        return <UniversityIcon className="timeline-icon university" />;
      case 'research':
        return <ResearchIcon className="timeline-icon research" />;
      case 'startup':
        return <StartupIcon className="timeline-icon startup" />;
      case 'birth':
        return <BirthIcon className="timeline-icon birth" />;
      default:
        return null;
    }
  };

  return (
    <section id="timeline" className="education-section">
      <div className="container">
        <div className="section-intro fade-in">
          <div className="section-subtitle">{t.education.subtitle}</div>
          <h2 className="heading-medium with-decoration">{t.education.title}</h2>
          <p className="section-description">
            {t.education.description}
          </p>
        </div>
        
        <div className="timeline">
          {timelineData.map((period, index) => (
            <React.Fragment key={index}>
              {/* トランジションパス (前のアイテムと現在のアイテムの間に表示) */}
              {index > 0 && period.transition?.type === 'international' && (
                <div className={`timeline-transition ${period.transition.from}-to-${period.transition.to}`}>
                  <div className="timeline-flight-path">
                    <VerticalFlightPath className={`flight-path-icon ${period.transition.from}-to-${period.transition.to}`} />
                    <div className="moving-plane-container">
                      <PlaneIcon className={`moving-plane ${period.direction || 'vertical'}`} />
                    </div>
                  </div>
                </div>
              )}
              
              {/* タイムラインアイテム */}
              <div 
                className={`timeline-item ${period.highlight ? 'highlight' : ''} ${period.location}`}
                data-kyoto-university={period.universityLogo === 'kyoto' ? 'true' : 'false'}
              >
                <div className="timeline-year">{period.year}</div>
                <div className={`timeline-content ${period.items.length > 1 ? 'has-group' : ''}`}>
                  <div className="timeline-icon-container">
                    {getIcon(period.icon, period.direction)}
                  </div>
                  
                  {/* タイトルを追加 */}
                  <h3 className="timeline-title">{period.title}</h3>
                  
                  {period.items.length === 1 ? (
                    <p>{period.items[0]}</p>
                  ) : (
                    <div className="timeline-content-group">
                      {period.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="timeline-content-item">
                          <span className="timeline-bullet"></span>
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* 国旗やロケーションマーカー */}
                  {period.location && (
                    <div className={`location-marker ${period.location}`}></div>
                  )}
                  
                  {/* 大学ロゴの表示 */}
                  {period.universityLogo === 'kyoto' && (
                    <div className="university-logo-wrapper">
                      <img src="/kyoto-u.png" alt="京都大学" className="university-logo" />
                    </div>
                  )}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimeLine;