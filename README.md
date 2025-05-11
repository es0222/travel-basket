# 🧳 Travel Basket App

This is a React-based travel booking basket system.  
Users can view, remove, and confirm selected travel packages.

---

## 📦 Features

- Display selected travel packages (title, price, remove)
- Calculate and display total price
- Confirm reservation (mocked API call)
- Success screen with confirmation message
- Spinner during reservation processing
- Clean design using React Context + React Router

---

## 🧪 How to Test

1. Run the project:
npm start


2. Navigate to:  
[http://localhost:3000/basket](http://localhost:3000/basket)

3. Remove any item ➝ Total updates

4. Click **Confirm Reservation** ➝ Spinner shows ➝ Booking confirmed ➝ Basket is cleared

---

## 🔌 Backend Integration (optional)

To connect with a real backend (e.g. .NET API):

Replace the `setTimeout` logic in `Basket.jsx` with this:

```js
fetch("/api/basket/checkout", {
method: "POST",
headers: { "Content-Type": "applicationjson" },
body: JSON.stringify(basket)
})
.then(() => {
clearBasket();
navigate("/basket/confirmation");
});
