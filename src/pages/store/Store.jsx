import React from "react";
import "./store.scss";

// components
import Navbar from "../../components/navbar/Navbar";
import FilterBar from "../../components/filterbox/FilterBox";
import Products from "../../components/products/Products";
import Cart from "../../components/cart/Cart";

export default function StorePage() {
  return (
    <>
      <Navbar />
      <div className="store-container">
        <FilterBar />
        <Products />
        <Cart />
      </div>
    </>
  );
}
