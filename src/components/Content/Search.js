import styled from "styled-components";

export default function Search({ search, setSearch }) {
  function activeSearch(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <>
      <Container>
        <SearchArea>
          <input
            placeholder="Digite o nome do produto para pesquisar"
            type="text"
            value={search}
            onChange={activeSearch}
          />
          <button onClick={() => setSearch("")}>Limpar pesquisa</button>
        </SearchArea>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 0 0 15px 0;
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
    padding: 15px 5px;
    border-radius: 3px;
    background-color: #00fcc3;

    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: 0.02rem;
    cursor: pointer;
  }
`;
