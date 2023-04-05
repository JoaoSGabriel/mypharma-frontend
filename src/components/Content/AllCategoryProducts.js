import { useQuery } from "@tanstack/react-query";
import { getProductByCategory } from "../../services/ProductApi";

import ErrorScreen from "../ErrorScreen";
import Loader from "../Loader";
import ProductRow from "../ProductRow";

export default function AllCategoryProducts({ category, filter }) {
  const { data, isLoading, error } = useQuery({
    queryKey: [category],
    queryFn: () => getProductByCategory(category, filter),
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
