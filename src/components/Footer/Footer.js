import React, { useContext } from 'react';
import './Footer.css';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { SiZenn } from 'react-icons/si';
import { LanguageContext } from '../../contexts/LanguageContext';

const Footer = () => {
  const { t, language } = useContext(LanguageContext);
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
            <h4>
              {language === 'ja' && 'お問い合わせ'}
              {language === 'en' && 'Contact'}
              {language === 'zh' && '联系我们'}
            </h4>
            <p>
              {language === 'ja' && 'お仕事のご依頼やご質問などがございましたら、以下よりご連絡ください。'}
              {language === 'en' && 'For work inquiries or questions, please contact me below.'}
              {language === 'zh' && '如有工作委托或问题，请通过以下方式联系我们。'}
            </p>
            <div className="contact-links">
              <p>
                {language === 'ja' && 'メール:'}
                {language === 'en' && 'Email:'}
                {language === 'zh' && '邮箱:'} 
                <span className="protected-email"><ProtectedEmail /></span>
              </p>
              <p className="email-note">
                {language === 'ja' && '※スパム対策のため、メールアドレスは分割表示・文字参照化しています。お手数ですが手動で入力してください。'}
                {language === 'en' && '* Email address is displayed in parts with character references for spam protection. Please enter it manually.'}
                {language === 'zh' && '※为防止垃圾邮件，邮箱地址已被分割显示且使用字符引用。请手动输入。'}
              </p>
            </div>
          </div>

          <div className="footer-social">
            <h4>
              {language === 'ja' && 'ソーシャルメディア'}
              {language === 'en' && 'Social Media'}
              {language === 'zh' && '社交媒体'}
            </h4>
            <p>
              {language === 'ja' && '各プラットフォームでの活動もご覧ください。'}
              {language === 'en' && 'Check out my activities on various platforms.'}
              {language === 'zh' && '请查看我在各平台上的活动。'}
            </p>
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