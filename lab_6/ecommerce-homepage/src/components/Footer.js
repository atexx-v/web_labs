import React from 'react';
import logo from '../assets/logo-shoes-shop.png';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="SHOES SHOP Logo" className="footer-logo-img" />
        </div>
        <div className="footer-support">
          <h4>SUPPORT</h4>
            <button className="support-btn">FAQ</button>
            <button className="support-btn">Delivery</button>
            <button className="support-btn">Returns</button>
        </div>
        
        <div className="footer-social">
          <h4>FOLLOW US</h4>
          <button className="social-btn">Instagram</button>
          <button className="social-btn">Telegram</button>
          <button className="social-btn">Tik Tok</button>
        </div>
      </div>

    </footer>
  );
}
export default Footer;