import React from 'react';
import './Footer.css';

const Footer = () => {
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
              <a href="mailto:eastlinker@example.com">メール: eastlinker@example.com</a>
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