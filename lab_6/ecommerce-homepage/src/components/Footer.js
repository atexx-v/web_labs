import React from 'react';
import logo from '../assets/logo-shoes-shop.png';
import PrimaryButton from './PrimaryButton';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="SHOES SHOP Logo" className="footer-logo-img" />
        </div>
        <div className="footer-support">
          <h4>SUPPORT</h4>
            <PrimaryButton className="support-btn">FAQ</PrimaryButton>
            <PrimaryButton className="support-btn">Delivery</PrimaryButton>
            <PrimaryButton className="support-btn">Returns</PrimaryButton>
        </div>
        
        <div className="footer-social">
          <h4>FOLLOW US</h4>
          <PrimaryButton className="social-btn">Instagram</PrimaryButton>
          <PrimaryButton className="social-btn">Telegram</PrimaryButton>
          <PrimaryButton className="social-btn">Tik Tok</PrimaryButton>
        </div>
      </div>

    </footer>
  );
}
export default Footer;