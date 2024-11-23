import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios"; // Import Axios for HTTP requests
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state before making a request

    try {
      // Send login credentials to the backend
      const response = await axios.post(
        "http://localhost:9000/api/auth/login",
        {
          username,
          password,
        },
        {
          withCredentials: true, // Important for sending cookies
        }
      );

      if (response.status === 200 || response.status === 204) {
        // Navigate to the home page or dashboard after login
        navigate("/dashboard");
      }
    } catch (err) {
      // Handle error and display message
      if (err.response && err.response.status === 401) {
        setError("Invalid username or password. Please try again.");
      } else if (err.response.status === 404) {
        setError("Username not found! Redirecting to sign up....");
        navigate("/signup");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
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
      {error && <div className="error-message">{error}</div>} {/* Error message */}
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

