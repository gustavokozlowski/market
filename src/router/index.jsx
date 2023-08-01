/* eslint-disable no-unused-vars */
import React from "react";
import { Home } from "../pages/home";
import { Cart } from "../pages/cart";
import { Header } from "../components/header/index.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export const RouterContainer = () => {
  return (
    <BrowserRouter>
      <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </BrowserRouter>
  );
};