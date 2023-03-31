import styled from "styled-components";
import ProductArea from "./ProductArea";
import Search from "./Search";

export default function Content() {
  return (
    <Container>
      <Title>Produtos</Title>
      <Search />
      <ProductArea />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const Title = styled.div`
  width: 100%;
  margin: 0 0 15px 0;
  font-size: 1.5rem;
  font-weight: 500;
`;
