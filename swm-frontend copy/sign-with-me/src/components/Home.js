import React from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";

const Home = () => {
  return (
    <div className="home-container">
        <div className="Nav">
          <Navbar />
        </div>

      <LandingPage />
    </div>
  );
};

export default Home;
