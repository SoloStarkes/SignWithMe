import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./SignUpPage.css";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== retypePassword) {
      alert("Passwords do not match!");
    } else {
      alert(`Signed up as: ${username}`);
      // Add sign-up logic here (e.g., API call)
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
