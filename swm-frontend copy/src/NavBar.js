import React from 'react';
import './NavBar.css';

const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="logo">
    <img class ="logo" src="https://cdn.discordapp.com/attachments/1284209469617864789/1293692441903366144/file-GTmehyTYCEDkZm3p0WHyuMFT.png?ex=671a18b9&is=6718c739&hm=1df62f329ad49589e66056690eb6bfed3d05616c85d6bd2b61765afdc994f6d0&" alt="Description of the image" />
    </a>
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <a href="/products">Lessons</a>
      </li>
      <li>
        <a href="/about">Translation Tool</a>
      </li>
      <li>
        <a href="/contact">Profile</a>
      </li>
    </ul>
  </div>
  {/* <div className="navbar-right">
    <a href="/cart" className="cart-icon">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-count">0</span>
    </a>
    <a href="/account" className="user-icon">
      <i className="fas fa-user"></i>
    </a>
  </div> */}
</nav>
);
};

export default Navbar;
