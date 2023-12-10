import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./styles/global";
import { CartProvider } from "./contexts/cart.jsx";
import '@smastrom/react-rating/style.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
    
      <App />
      <GlobalStyle />
    </CartProvider>
  </React.StrictMode>
);
