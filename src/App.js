import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { BasketProvider } from "./context/BasketContext";
import Basket from "./pages/Basket";
import Confirmation from "./pages/Confirmation";
import "./index.css";

function App() {
  return (
    <BasketProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/basket" />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/basket/confirmation" element={<Confirmation />} />
        </Routes>
      </Router>
    </BasketProvider>
  );
}

export default App;
