import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./styles/global";
import { Header } from "./components/header/index.jsx";
import { CartProvider } from "./contexts/cart.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <Header />
      <App />
      <GlobalStyle />
    </CartProvider>
  </React.StrictMode>
);
