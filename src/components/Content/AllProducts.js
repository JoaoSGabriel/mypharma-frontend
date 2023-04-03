import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/ProductApi";

import ProductRow from "../ProductRow";

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
          <ProductRow key={value.id} info={value} />
        ))}
      </>
    );
  }
}
