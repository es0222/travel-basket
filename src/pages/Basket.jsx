import React, { useState } from "react";
import { useBasket } from "../context/BasketContext";
import BasketItem from "../components/BasketItem";
import Spinner from "../components/Spinner";
import { FaSuitcaseRolling } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Basket() {
  const { basket, removeFromBasket, totalPrice, clearBasket } = useBasket();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    setIsLoading(true);

    try {
      // TODO: Replace this mocked delay with actual API call in future
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Example API call:
      // await fetch("/api/basket/checkout", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(basket),
      // });

      clearBasket();
      navigate("/basket/confirmation");
    } catch (error) {
      console.error("Checkout failed:", error);
      alert("Something went wrong during checkout.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <div className="basket-page">
      <h2>
        <FaSuitcaseRolling style={{ marginRight: "8px" }} />
        Your Travel Basket
      </h2>

      {basket.length === 0 ? (
        <p>No items in your basket.</p>
      ) : (
        <>
          {basket.map((item) => (
            <BasketItem key={item.id} item={item} onRemove={removeFromBasket} />
          ))}
          <hr />
          <h3>Total: ${totalPrice}</h3>
          <button className="confirm-btn" onClick={handleConfirm}>
            Confirm Reservation
          </button>
        </>
      )}
    </div>
  );
}
