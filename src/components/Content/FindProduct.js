import { useQuery } from "@tanstack/react-query";
import { getProductByName } from "../../services/ProductApi";

import ErrorScreen from "../ErrorScreen";
import Loader from "../Loader";
import ProductRow from "../ProductRow";

export default function FindProduct({ search }) {
  const { data, isLoading, error } = useQuery({
    queryKey: [search],
    queryFn: () => getProductByName(search),
  });

  if (isLoading) return <Loader />;

  if (error) return <ErrorScreen />;

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
