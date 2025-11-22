import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="main-nav">
      <ul>
        <li><Link to="/">Main</Link></li>
        <li><Link to="/catalog">Catalog</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
}
export default Navigation;
