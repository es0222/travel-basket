import React from "react";
import "../index.css";

export default function Spinner() {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>Processing reservation...</p>
    </div>
  );
}