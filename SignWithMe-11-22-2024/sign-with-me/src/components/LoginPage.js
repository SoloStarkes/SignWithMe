import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${username}`);
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <button className="sign-up-button" onClick={handleSignUp}>
        Don’t have an account? Sign Up
      </button>
      <button className="sign-up-button" onClick={goHome}>
        Return to Home Page
      </button>
    </div>
  );
};

export default LoginPage;
