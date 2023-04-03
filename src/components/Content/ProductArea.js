import styled from "styled-components";
import ListHeader from "./ListHeader";
import Product from "./Product";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/ProductApi";

export default function ProductArea() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["allProducts"],
    queryFn: getProducts,
  });

  if (error) {
    return (
      <Container>
        <ListHeader />
        <>SOCORRO, DEU ERROR</>
      </Container>
    );
  }

  if (isLoading) return "Loading...";

  if (data) {
    return (
      <Container>
        <ListHeader />
        {data.map((value) => (
          <Product key={value.id} info={value} />
        ))}
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  height: calc((700px - 74px) * 0.9);
  border: 1px solid #635d69;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
