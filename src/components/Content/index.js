import styled from "styled-components";
import Search from "./Search";

export default function Content() {
  return (
    <Container>
      <Title>Produtos</Title>
      <Search />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  width: 100%;
  padding: 20px;

  font-size: 1.5rem;
  font-weight: 500;
`;
