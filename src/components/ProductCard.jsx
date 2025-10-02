import { Link } from "react-router-dom";
function ProductCard({ product }) {
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
        <button>Add to Cart</button>
      </div>
    </>
  );
}

export default ProductCard;
