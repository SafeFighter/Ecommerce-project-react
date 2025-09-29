import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchData } from "../functions/fetch";
import Header from "../components/Header";

function ProductSearch() {
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

  const uniqueCategories = [
    ...new Set(data.map((product) => product.category)), //filtrira, dopušta samo jedinstvene vrijednosti
  ];

  return (
    <>
      <Header />
      <h1>Product search</h1>
      <nav>
        <ul>
          {uniqueCategories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </nav>
    </>
  );
}
export default ProductSearch;
