import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchData } from "../functions/fetch";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

function ProductSearch() {
  const [category, setCategory] = useState("All");

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

  const uniqueCategories = [
    "All",
    ...new Set(data.map((product) => product.category)), //filtrira, dopušta samo jedinstvene vrijednosti
  ];

  return (
    <>
      <Header />
      <h1 className="h1 mb-3 mt-3 text-light">Product search</h1>
      <div className="btn-group">
        {uniqueCategories.map((cat) => (
          <button
            className="btn btn-secondary"
            key={cat}
            onClick={() => {
              setCategory(cat);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <hr />
      <div className="container">
        <div className="row">
          {category === "All"
            ? data.map((product) => (
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                  <ProductCard key={product.id} product={product} />
                </div>
              ))
            : data
                .filter((product) => product.category === category)
                .map((product) => (
                  <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <ProductCard key={product.id} product={product} />
                  </div>
                ))}
        </div>
      </div>
    </>
  );
}

export default ProductSearch;
