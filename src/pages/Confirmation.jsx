import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Confirmation() {
  const navigate = useNavigate();

  return (
    <div className="confirmation-page">
      <FaCheckCircle className="confirmation-icon" />
      <h2>Booking Confirmed!</h2>
      <p>Your reservation has been successfully processed.</p>
      <button
        className="confirm-btn"
        style={{ marginTop: "30px" }}
        onClick={() => navigate("/basket")}
      >
        Back to Basket
      </button>
    </div>
  );
}
