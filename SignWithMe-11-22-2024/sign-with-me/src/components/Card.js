import React from "react";
import "./Card.css";

export const Card = ({ children, className }) => (
  <div className={`card ${className || ""}`}>
    {children}
  </div>
);

export const CardHeader = ({ children }) => (
  <div className="card-header">
    {children}
  </div>
);

export const CardContent = ({ children, className }) => (
  <div className={`card-content ${className || ""}`}>
    {children}
  </div>
);

export const CardTitle = ({ children }) => (
  <div className="card-title">
    {children}
  </div>
);

export const CircularProgress = ({ value, label }) => (
  <div className="progress-container">
    <div className="circular-progress">
      <svg viewBox="0 0 36 36" className="circular-chart">
        <path
          className="circle-bg"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          strokeDasharray={`${value}, 100`}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20" className="percentage">
          {Math.round(value)}%
        </text>
      </svg>
    </div>
    <div className="progress-label">{label}</div>
  </div>
);

