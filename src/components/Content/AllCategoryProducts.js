import { useQuery } from "@tanstack/react-query";
import { getProductByCategory } from "../../services/ProductApi";

import ProductRow from "../ProductRow";

export default function AllCategoryProducts({ category }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["allCategoryProducts"],
    queryFn: () => getProductByCategory(category),
    refetchInterval: 1000,
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
