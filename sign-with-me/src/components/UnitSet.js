import React from "react";
import "./UnitSet.css";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed

const UnitSet = () => {
  return (
    <div className="unitset-container">
      <h1>Units</h1>
      <div className="unitset-list">
        <Link to="/units/unit1" className="unit-button">
          Unit 1: Basics
        </Link>
        <Link to="/units/unit1" className="unit-button">
          Unit 2: Intermediate
        </Link>
        <Link to="/units/unit1" className="unit-button">
          Unit 3: Advanced
        </Link>
      </div>
    </div>
  );
};

export default UnitSet;
