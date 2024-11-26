import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../Assets/Logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks login state
  const navigate = useNavigate();

  // Check authentication status when Navbar loads
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get("http://localhost:9000/api/auth/status", {
          withCredentials: true, // Include session cookies
        });
        setIsLoggedIn(response.data.isLoggedIn);
      } catch (error) {
        console.error("Error checking authentication status:", error);
        setIsLoggedIn(false);
      }
    };

    checkAuthStatus();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:9000/api/auth/logout", {}, { withCredentials: true });
      setIsLoggedIn(false);
      navigate("/login");
    } catch (error) {
      console.error("Sorry! Error during logout:", error);
    }
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
          <button className="navbar-button home-button" onClick={() => navigate("/")}>
            Home
          </button>
          <button className="navbar-button lessons-button" onClick={() => navigate("/units")}>
            Units
          </button>
          <button className="navbar-button translator-button" onClick={() => navigate("/translator")}>
            Translator Tool
          </button>
          {isLoggedIn ? (
            <>
              <button className="navbar-button dashboard-button" onClick={() => navigate("/dashboard")}>
                Dashboard
              </button>
              <button className="navbar-button logout-button" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <button className="navbar-button b-button" onClick={() => navigate("/login")}>
              Login/Signup
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


