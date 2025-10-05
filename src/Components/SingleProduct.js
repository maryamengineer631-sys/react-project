import { useState, useEffect } from "react"
import { Link } from "react-router";
function SingleProduct(){
 const [products, setProducts] = useState([]);

 useEffect(()=>{
fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data=> setProducts(data.products))
.catch((err) => console.log(err));
 },[]);

    return(
        <div>
            {products.map((p) => (
                <div key={p.id}>
                    <h2>Title: {p.title}</h2>
                    <img src={p.thumbnail} alt={p.title} width="150"></img>
                    <p>Price: ${p.price}</p>
                    <Link to={`/items/${p.id}/items`}>View Items</Link>
                   
        </div>
            ))}
            </div>
    );
}
export default SingleProduct;