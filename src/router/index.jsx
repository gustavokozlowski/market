/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { Cart } from "../pages/cart";

export const MainRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </BrowserRouter>
  );
};