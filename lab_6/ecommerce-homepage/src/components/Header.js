import React from 'react';
import logo from '../assets/logo-shoes-shop.png';

function Header() {
  return (
    <header className="site-header">
      <div className="header-top">
        <img src={logo} alt="SHOES SHOP Logo" className="header-logo-img" />
        <div className="user-actions">
          <button className="action-button">👤 Profile</button>
          <button className="action-button">❤️ Favorites</button>
          <button className="action-button cart-button">🛒 Cart</button>
        </div>
      </div>
    </header>
  );
}
export default Header;
