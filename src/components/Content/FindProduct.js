import { useQuery } from "@tanstack/react-query";
import { getProductByName } from "../../services/ProductApi";
import Loader from "../Loader";

import ProductRow from "../ProductRow";

export default function FindProduct({ search }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["FindProducts"],
    queryFn: () => getProductByName(search),
    refetchInterval: 1000,
  });

  if (isLoading) return <Loader />;

  if (error) return "An error has occurred: " + error.message;

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
