import React from "react";
import { FaTrash } from "react-icons/fa";
import "../index.css";

export default function BasketItem({ item, onRemove }) {
  return (
    <div className="basket-item">
      <span className="basket-title">{item.title}</span>
      <span className="basket-price">${item.price}</span>
      <button className="remove-btn" onClick={() => onRemove(item.id)}>
        <FaTrash />
      </button>
    </div>
  );
}