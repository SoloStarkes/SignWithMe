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
        <div className="navbar-content">
          <img src={Logo} alt="Logo" className="logo" />
          <button className="home-button" onClick={homeClick}>
            Home
          </button>
          <button className="lessons-button" onClick={unitsClick}>
            Units
          </button>
          <button className="translator-button" onClick={translateClick}>
            Translator Tool
          </button>
        </div>
        <button className="login-button" onClick={loginClick}>
          Login/Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
