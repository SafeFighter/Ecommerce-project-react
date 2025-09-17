function ProductCard({ product }) {
  return (
    <>
      <div id={product.id} className="card">
        <h4>{product.title}</h4>
        <img src={product.image} alt={product.title} />
        <p>{product.price}$</p>
        <button>Add to Cart</button>
      </div>
    </>
  );
}

export default ProductCard;
