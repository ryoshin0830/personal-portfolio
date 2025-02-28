import React from 'react';
import './Footer.css';

const Footer = () => {
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
            <h3>梁 震</h3>
            <p>京都大学 博士課程 / 株式会社EastLinker 代表</p>
          </div>
          
          <div className="footer-contact">
            <h4>お問い合わせ</h4>
            <p>お仕事のご依頼やご質問などがございましたら、以下よりご連絡ください。</p>
            <div className="contact-links">
              <p>メール: <span className="protected-email"><ProtectedEmail /></span></p>
              <p className="email-note">※スパム対策のため、メールアドレスは分割表示・文字参照化しています。お手数ですが手動で入力してください。</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} 梁 震. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;