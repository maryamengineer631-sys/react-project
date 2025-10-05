import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Products.css";

function Products() {
  const categories = [
    { name: "Smartphones", path: "smartphones" },
    { name: "Groceries", path: "groceries" },
    { name: "Mobile Accessories", path: "mobile-accessories" },
    { name: "Sports Accessories", path: "sports-accessories" },
  ];

  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const results = await Promise.all(
          categories.map(async (c) => {
            const res = await axios.get(
              `https://dummyjson.com/products/category/${c.path}?limit=1`
            );
            return {
              ...c,
              image:
                res.data.products[0]?.thumbnail ||
                "https://via.placeholder.com/300x200?text=No+Image",
            };
          })
        );
        setCategoryData(results);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    fetchCategories();
  });

  return (
    <div className="products-page">
      <section className="hero-banner">
        <div className="hero-text">
          <h1>Discover Our Exclusive Categories</h1>
          <p>Find the best deals on smartphones, groceries & accessories.</p>
          <Link to="/products" className="shop-btn">
            Start Shopping
          </Link>
        </div>
      </section>

      <h2 className="section-title">Shop by Categories</h2>
      <div className="categories-grid">
        {categoryData.map((c) => (
          <div key={c.path} className="category-card">
            <Link to={`/category/${c.path}`}>
              <img src={c.image} alt={c.name} />
              <h3>{c.name}</h3>
            </Link>
          </div>
        ))}
      </div>

      <section className="offer-banner">
        <h2>🔥 Limited Time Offer</h2>
        <p>Flat 30% OFF on all categories today only!</p>
        <Link to="/products" className="offer-btn">
          Shop Now
        </Link>
      </section>

      <footer className="footer">
        <p>© 2025 MyStore. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/about1">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
}

export default Products;