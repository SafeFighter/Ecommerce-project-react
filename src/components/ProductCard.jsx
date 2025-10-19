import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import "../styles/productCard.css";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div id={product.id} className="card">
        <h4>
          <Link className="mb-2" to={`/5tor3/product/${product.id}`}>
            {product.title}
          </Link>
        </h4>
        <Link className="img-wrapper" to={`/5tor3/product/${product.id}`}>
          <img src={product.image} alt={product.title} />
        </Link>

        <div className="mt-auto d-flex align-items-center gap-5">
          <span className="fw-bold">{product.price}$</span>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
