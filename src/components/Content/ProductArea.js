import styled from "styled-components";
import ListHeader from "./ListHeader";
import Product from "./Product";

export default function ProductArea() {
  return (
    <Container>
      <ListHeader />
      <Product />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: calc((700px - 74px) * 0.9);
  border: 1px solid #635d69;
`;
