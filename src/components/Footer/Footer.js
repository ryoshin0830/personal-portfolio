import React, { useContext } from 'react';
import './Footer.css';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { SiZenn } from 'react-icons/si';
import { LanguageContext } from '../../contexts/LanguageContext';

const Footer = () => {
  const { t } = useContext(LanguageContext);
  // スパム対策のためのメール表示コンポーネント
  const ProtectedEmail = () => {
    return (
      <>
        <span className="email-part">r&#121;o</span>
        <span className="email-part">.</span>
        <span className="email-part">sh&#105;n</span>
        <span className="email-part">.</span>
        <span className="email-part">j&#56;5</span>
        <span className="email-part">&#64;</span>
        <span className="email-part">k&#121;o&#116;o&#45;u</span>
        <span className="email-part">.</span>
        <span className="email-part">j&#112;</span>
      </>
    );
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>{t.hero.title}</h3>
            <p>{t.hero.subtitle}</p>
          </div>
          
          <div className="footer-contact">
            <h4>{t.footer.contact}</h4>
            <p>{t.footer.inquiry}</p>
            <div className="contact-links">
              <p>
                {t.footer.email}: <span className="protected-email"><ProtectedEmail /></span>
              </p>
              <p className="email-note">
                {t.footer.emailNote}
              </p>
            </div>
          </div>

          <div className="footer-social">
            <h4>{t.footer.socialMedia}</h4>
            <p>{t.footer.socialNote}</p>
            <div className="social-links">
              <a href="https://github.com/ryoshin0830" target="_blank" rel="noopener noreferrer" className="social-link github">
                <FaGithub /> <span>GitHub</span>
              </a>
              <a href="https://zenn.dev/ryoushin" target="_blank" rel="noopener noreferrer" className="social-link zenn">
                <SiZenn /> <span>Zenn</span>
              </a>
              <a href="https://x.com/ryoshin0830" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                <FaTwitter /> <span>X (Twitter)</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;