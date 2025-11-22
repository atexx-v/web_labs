import React from 'react';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-links">
          <h4>Підтримка</h4>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#shipping">Доставка</a></li>
            <li><a href="#returns">Повернення</a></li>
          </ul>
        </div>
        
        <div className="footer-social">
          <h4>Слідкуйте за нами</h4>
          <button className="social-btn">INS</button>
          <button className="social-btn">TG</button>
          <button className="social-btn">TT</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p> 2025 SneakerShop</p>
      </div>
    </footer>
  );
}
export default Footer;