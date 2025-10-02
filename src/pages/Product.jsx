import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../functions/fetch";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Product(productId) {
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
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>Price: {product.price}$</p>
      <p>{product.description}</p>
      <button>Add to Cart</button>
      <Footer />
    </>
  );
}

export default Product;
