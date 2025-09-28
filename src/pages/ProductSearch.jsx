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
  console.log(`product search ${data[0].category}`);
  return (
    <>
      <Header />
      <h1>Product search</h1>
      <nav>
        <ul>
          <li>{data.map((product) => product.category)}</li>
        </ul>
      </nav>
    </>
  );
}
export default ProductSearch;
