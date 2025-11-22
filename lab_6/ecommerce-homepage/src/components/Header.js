import React from 'react';

function Header() {
  return (
    <header className="site-header">
      <div className="header-top">
        <h1 className="logo">SneakerShop</h1>
        <div className="search-bar">
          <input type="text" placeholder="Пошук моделі або бренду..." />
          <button className="search-button">Шукати</button>
        </div>
        <div className="user-actions">
          <button className="action-button">Профіль</button>
          <button className="action-button">Улюблене</button>
          <button className="action-button cart-button">Кошик</button>
        </div>
      </div>
    </header>
  );
}
export default Header;
