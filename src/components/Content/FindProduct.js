import { useQuery } from "@tanstack/react-query";
import { getProductByName } from "../../services/ProductApi";

import Product from "../Product";

export default function FindProduct({ search }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["FindProducts"],
    queryFn: () => getProductByName(search),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (data) {
    return (
      <>
        {data.map((value) => (
          <Product key={value.id} info={value} />
        ))}
      </>
    );
  }
}
