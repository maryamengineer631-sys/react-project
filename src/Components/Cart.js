import React, { useState, useEffect } from "react";
import "./Cart.css";
import { Link } from "react-router";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const getCategoryName = (category) => {
    switch (category) {
      case "smartphones":
        return "📱 Smartphones";
      case "mobile-accessories":
        return "🎧 Mobile Accessories";
      case "groceries":
        return "🛒 Groceries";
      case "sports":
        return "🏏 Sports";
      default:
        return "Other Product";
    }
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty 😔</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.thumbnail} alt={item.title} className="cart-img" />

              <div className="cart-info">
                {/* ✅ Ab sirf category name show hoga */}
                <h3>{getCategoryName(item.category)}</h3>
                <p>💲 {item.price}</p>
                <div className="qty-control">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >Remove ❎
              </button>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total: 💲 {totalPrice}</h3>
              <Link to="/checkout" className="detail-btn">Checkout</Link>
            
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;