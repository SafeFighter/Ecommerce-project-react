import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import "./App.css";
import Landing from "./pages/landing";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductSearch from "./pages/ProductSearch";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} /> {/* default */}
          <Route path="/5tor3/home" element={<Landing />} />
          <Route path="/5tor3/categories" element={<ProductSearch />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
