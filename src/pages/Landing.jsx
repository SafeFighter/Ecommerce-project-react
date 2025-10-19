import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchData } from "../functions/fetch";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/landing.css";

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
        <h1 className="text-light mt-5 mb-5">E5TOR3</h1>
        <h4 className="text-light mt-5 mb-0">Founded in 2025.</h4>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Landing;
