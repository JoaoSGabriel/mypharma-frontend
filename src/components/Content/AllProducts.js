import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/ProductApi";

import Product from "../Product";

export default function AllProducts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["allProducts"],
    queryFn: getProducts,
  });

  if (error) return <>SOCORRO, DEU ERROR</>;

  if (isLoading) return "Loading...";

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
