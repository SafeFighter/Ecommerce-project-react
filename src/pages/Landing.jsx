import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchData } from "../functions/fetch";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Landing() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
  });
  if (isPending) {
    return <p>Loading product ... </p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <Header />
      <div className="hero-image">
        {/* ovdje se dodaje background slika*/}
        <h1>E5TOR3</h1>
        <h4>Founded in 2025.</h4>
      </div>
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      <Footer />
    </>
  );
}

export default Landing;
