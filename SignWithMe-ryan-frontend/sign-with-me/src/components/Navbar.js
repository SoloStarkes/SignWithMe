import { useNavigate } from "react-router-dom";
import React from "react";
import Logo from "../Assets/Logo.png";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const homeClick = () => {
    navigate("/");
  };

  const unitsClick = () => {
    navigate("/units");
  };

  const loginClick = () => {
    navigate("/login");
  };

  const translateClick = () => {
    navigate("/translator");
  };

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-left">
          <a href="/" className="logo">
            <img src={Logo} alt="Logo" className="logo" />
          </a>
        </div>
        <div className="navbar-right">
          <button className="navbar-button home-button" onClick={homeClick}>
            Home
          </button>
          <button className="navbar-button lessons-button" onClick={unitsClick}>
            Units
          </button>
          <button className="navbar-button translator-button" onClick={translateClick}>
            Translator Tool
          </button>
          <button className="navbar-button b-button" onClick={loginClick}>
             Login/Signup

          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
