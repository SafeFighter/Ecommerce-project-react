import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";
function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div id={product.id} className="card">
        <h4>
          <Link to={`/5tor3/product/${product.id}`}>{product.title}</Link>
        </h4>
        <Link to={`/5tor3/product/${product.id}`}>
          <img src={product.image} alt={product.title} />
        </Link>

        <p>{product.price}$</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </>
  );
}

export default ProductCard;
