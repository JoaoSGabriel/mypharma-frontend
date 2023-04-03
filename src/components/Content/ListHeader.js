import styled from "styled-components";
import Border from "../Border";

export default function ListHeader() {
  return (
    <>
      <Header>
        <div>Nome</div>
        <div>Foto</div>
        <div>Categoria</div>
        <div>Preço</div>
        <div>Ações</div>
      </Header>
      <Border />
    </>
  );
}

const Header = styled.div`
  width: 100%;
  min-height: 50px;

  display: flex;
  justify-content: space-between;

  div {
    width: 20%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 0 0 40px;
  }
`;
