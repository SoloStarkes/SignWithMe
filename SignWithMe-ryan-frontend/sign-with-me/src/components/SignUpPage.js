import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./SignUpPage.css";
import axios from "axios";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault(); // Prevent form default behavior
    setError("");
    setSuccess("");

    // Validate password match
    if (password !== retypePassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:9000/api/auth/signup",
        { username, email, password },
        { withCredentials: true }
      );

      if (response.status === 201) {
        setSuccess("Account created successfully! Redirecting to login...");
        alert("Account created successfully! Redirecting to login...");
        navigate("/login");
      } else {
        setError("Unexpected error during signup. Please try again.");
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError("Username or email already exists. Please choose a different one.");
      } else {
        console.error(err);
        setError("An error occurred during signup. Please try again later.");
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSignUp} className="signup-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          aria-label="Enter your username"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Enter your email"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Enter your password"
          required
        />
        <input
          type="password"
          placeholder="Retype Password"
          value={retypePassword}
          onChange={(e) => setRetypePassword(e.target.value)}
          aria-label="Retype your password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <button className="login-button" onClick={() => navigate("/login")}>
        Already have an account? Log In
      </button>
      <button className="go-home-button" onClick={() => navigate("/")}>
        Return to Home Page
      </button>
    </div>
  );
};

export default SignUpPage;

