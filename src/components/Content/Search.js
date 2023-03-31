import styled from "styled-components";

export default function Search() {
  return (
    <>
      <Container>
        <SearchArea>
          <input placeholder="Digite o nome do produto para pesquisar" />
          <button>Limpar pesquisa</button>
        </SearchArea>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

const SearchArea = styled.div`
  input {
    width: 400px;
    padding: 15px;
    border: 1px solid #635d69;
    border-radius: 3px;
    background: transparent;

    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: 0.02rem;
    color: white;
    margin: 0 20px 0 0;

    ::placeholder {
      color: #635d69;
    }

    :focus {
      outline: 0;
    }
  }

  button {
    width: 150px;
    padding: 15px;
    border-radius: 3px;
    background-color: #00fcc3;

    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.02rem;
  }
`;
