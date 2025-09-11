import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchData } from "../functions/fetch";

function Landing() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["product"],
    queryFn: fetchData,
  });
  if (isPending) {
    return <p>Data Pending</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  console.log(data);
  return (
    <>
      {/* ovdje header*/}

      <div className="hero-image">
        {/* ovdje se dodaje background slika*/}
        <h1>E5TOR3</h1>
        <h4>Founded in 2025.</h4>
        <button>Shop Now</button>
      </div>
      {/* product card*/}
      {/* ovdje footer*/}
    </>
  );
}

export default Landing;
