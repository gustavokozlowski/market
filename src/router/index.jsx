/* eslint-disable no-unused-vars */
import React from "react";
import { Home } from "../pages/home";
import { Cart } from "../pages/cart";
import { HeaderCart } from "../components/header-cart";
import { HeaderHome } from "../components/header-home";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export const RouterContainer = () => {
  return (
    <BrowserRouter>
    {window.location.pathname === "/" ? <HeaderHome /> : <HeaderCart />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
