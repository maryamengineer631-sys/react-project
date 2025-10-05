import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Items() {
  const { id } = useParams();   // product id
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>{product.title} - Items</h2>
      <p>Price: ${product.price}</p>
      <div>
        {product.images.map((img, index) => (
          <img key={index} src={img} width="150" alt={`${product.title}-${index}`} />
        ))}
      </div>
    </div>
  );
}

export default Items;