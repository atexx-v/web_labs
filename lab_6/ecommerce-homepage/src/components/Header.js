import React from 'react';
import logo from '../assets/logo-shoes-shop.png';
import PrimaryButton from './PrimaryButton';

function Header() {
  return (
    <header className="site-header">
      <div className="header-top">
        <img src={logo} alt="SHOES SHOP Logo" className="header-logo-img" />
        <div className="user-actions">
          <PrimaryButton className="action-button">👤 Profile</PrimaryButton>
          <PrimaryButton className="action-button">❤️ Favorites</PrimaryButton>
        </div>
      </div>
    </header>
  );
}
export default Header;
