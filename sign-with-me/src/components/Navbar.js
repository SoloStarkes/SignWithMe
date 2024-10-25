import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-content">
          <img src={Logo} alt="Logo" className="logo" />
          <button className="lessons-button">Lessons</button>
          <button className="translator-button">Translator Tool</button>
        </div>
        <button className="login-button">Login/Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
