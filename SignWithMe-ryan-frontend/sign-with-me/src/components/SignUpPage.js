import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./SignUpPage.css";
import axios from "axios";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [error, setError] = useState(""); // Correctly define both state and updater
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async () => {
    setError(""); // Reset error state
    setSuccess(""); // Reset success state

    try {
      // Send a sign-up request to the backend
      const response = await axios.post(
        "http://localhost:9000/api/auth/signup",
        {
          username,
          email,
          password,
        },
        {
          withCredentials: true, // Ensure cookies are sent and received
        }
      );

      if (response.status === 201) {
        alert("Account created successfully! Redirecting to login...");
        setSuccess("Account created successfully! Redirecting to login...");
        navigate("/login");
      } else {
        setError("Unexpected error during signup. Please try again.");
      }
    } catch (err) {
      // Handle error and display message
      if (err.response && err.response.status === 400) {
        setError("Username already exists. Please choose a different one.");
      } else {
        console.log(err);
        setError("An error occurred during signup. Please try again later.");
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp} className="signup-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Retype Password"
          value={retypePassword}
          onChange={(e) => setRetypePassword(e.target.value)}
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
