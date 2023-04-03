import styled from "styled-components";

export default function ErrorScreen() {
  return <Container>Ops... Algo deu errado!</Container>;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;
