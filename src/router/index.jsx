/* eslint-disable no-unused-vars */
import React from "react";
import { Home } from "../pages/home";
import { Cart } from "../pages/cart";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export const RouterContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};