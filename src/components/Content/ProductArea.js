import { useState } from "react";
import styled from "styled-components";
import AllProducts from "./AllProducts";
import FindProduct from "./FindProduct";

import ListHeader from "./ListHeader";
import Search from "./SearchArea/Search";

export default function ProductArea() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <Container>
        <ListHeader />
        {search ? <FindProduct search={search} /> : <AllProducts />}
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
