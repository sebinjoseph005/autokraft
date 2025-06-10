import React from 'react';

function Header({ cartCount, openCart }) {
  return (
    <header>
      <div className="logo-container">
        <img src="/assets/images/autokraft.jpg" alt="AutoKraft Logo" className="logo" />
        <h1>AutoKraft</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="cart-icon" onClick={openCart}>
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
}

export default Header;