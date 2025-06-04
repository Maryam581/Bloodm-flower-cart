import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage"; 
import Footer from "./components/Footer";

function FlowerCartApp() {
  const [cart, setCart] = useState([]);

  // Add product to cart or increase quantity
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      if (exists) {
        return prevCart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove product from cart
  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage onAddToCart={handleAddToCart} />} />
        <Route
          path="/cart"
          element={<CartPage cartItems={cart} onRemoveFromCart={handleRemoveFromCart} />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
       <Footer /> 
    </Router>
  );
}

export default FlowerCartApp;



