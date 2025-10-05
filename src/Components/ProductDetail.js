import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css"; // ✅ New CSS file

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const addToCart = (data) => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const productIndex = currentCart.findIndex((item) => item.id === data.id);

    if (productIndex === -1) {
      const updatedCart = [...currentCart, { ...data, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert("✅ Product added to cart");
    } else {
      alert("⚠️ Item already in cart");
    }
  };

  if (!product) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-card">
        <img src={product.thumbnail} alt={product.title} className="product-image" />

        <div className="product-info">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">💲 {product.price}</p>
          <p><b>Brand:</b> {product.brand}</p>
          <p><b>Category:</b> {product.category}</p>
          <p className="product-desc">{product.description}</p>

          <button className="add-btn" onClick={() => addToCart(product)}>
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;