import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./Category.css";

function Category() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${categoryName}?limit=15`)
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <div className="category-container">
      <h2 className="category-title">{categoryName}</h2>

      <div className="category-grid">
        {products.map((p) => (
          <div key={p.id} className="category-card">
            <img src={p.thumbnail} alt={p.title} />
            <div className="card-body">
              <h4>{p.title}</h4>
              <p className="price">Price: ${p.price}</p>
              <Link to={`/product/${p.id}`} className="detail-btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;