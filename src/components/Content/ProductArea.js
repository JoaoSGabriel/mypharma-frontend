import styled from "styled-components";

import ListHeader from "./ListHeader";
import Search from "./Search";

export default function ProductArea() {
  return (
    <>
      <Search />
      <Container>
        <ListHeader />
      </Container>
    </>
  );
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
