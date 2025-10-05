import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNav from "./Components/MainNav";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
import Category from "./Components/Category";
import ProductDetail from "./Components/ProductDetail";


function App() {
  return (

    <BrowserRouter>
    <MainNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/products" element={<Products />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;