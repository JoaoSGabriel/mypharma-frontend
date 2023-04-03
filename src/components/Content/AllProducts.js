import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/ProductApi";

import ErrorScreen from "../ErrorScreen";
import Loader from "../Loader";
import ProductRow from "../ProductRow";

export default function AllProducts({ filter }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["allProducts"],
    queryFn: () => getProducts(filter),
    refetchInterval: 1000,
  });

  if (error) return <ErrorScreen />;

  if (isLoading) return <Loader />;

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
