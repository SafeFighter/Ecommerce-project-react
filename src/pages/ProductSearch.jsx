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
      <h1>Product search</h1>
      <div>
        {uniqueCategories.map((cat) => (
          <button
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
      <div>
        {category === "All"
          ? data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : data
              .filter((product) => product.category === category)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
      </div>
    </>
  );
}

export default ProductSearch;
