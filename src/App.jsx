import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Men from "./pages/Mens";
import Women from "./pages/Womens";
import Kids from "./pages/Kids";
import Tshirt from "./pages/Tshirt"
import CustomerService from "./pages/CustomerService";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/men" element={<Men search={search} />} />
        <Route path="/women" element={<Women search={search} />} />
        <Route path="/kids" element={<Kids search={search} />} />
        <Route path="/tshirt" element={<Tshirt search={search} />}/>
        <Route path="/collections" element={<CustomerService />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />

<Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;