import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import "./App.css";
import Landing from "./pages/landing";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductSearch from "./pages/ProductSearch";
import Product from "./pages/Product";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} /> {/* default */}
            <Route path="/5tor3/home" element={<Landing />} />
            <Route path="/5tor3/categories" element={<ProductSearch />} />
            <Route path="/5tor3/product/:id" element={<Product />} />
            <Route path="/5tor3/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
