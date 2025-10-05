import React, { useState } from "react";
import "./Checkout.css";

function Checkout() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.address) {
      alert("⚠️ Please fill all fields");
      return;
    }

    // ✅ Order place karte hi cart clear
    localStorage.removeItem("cart");
    setOrderPlaced(true);
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">🧾 Checkout</h2>

      {orderPlaced ? (
        <div className="order-success">
          <h3>✅ Thank you {form.name}!</h3>
          <p>Your order has been placed successfully.</p>
        </div>
      ) : (
        <form className="checkout-form" onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email Address:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Shipping Address:
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              required
            ></textarea>
          </label>

          <button type="submit" className="place-order-btn">
            ✅ Place Order
          </button>
        </form>
      )}
    </div>
  );
}

export default Checkout;