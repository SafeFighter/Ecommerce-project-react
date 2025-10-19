import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../functions/fetch";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import "../styles/Product.css";

function Product(productId) {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
  });
  if (isLoading) {
    return <p>Loading product ... </p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  const product = data.find((item) => item.id.toString() === id);

  return (
    <>
      <Header />
      <h1 className="text-light mt-5">{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p className="text-light mt-3">Price: {product.price}$</p>
      <p className="text-light mt-3">{product.description}</p>
      <button
        className="mt-3 mb-3 btn btn-secondary"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Product;
