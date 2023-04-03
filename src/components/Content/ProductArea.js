import { useState } from "react";
import styled from "styled-components";
import AllCategoryProducts from "./AllCategoryProducts";
import AllProducts from "./AllProducts";
import FindProduct from "./FindProduct";

import ListHeader from "./ListHeader";
import Search from "./SearchArea/Search";

export default function ProductArea() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  function showProducts() {
    if (search !== "") {
      return <FindProduct search={search} />;
    } else if (category !== "") {
      return <AllCategoryProducts category={category} />;
    } else {
      return <AllProducts />;
    }
  }

  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />
      <Container>
        <ListHeader />
        {showProducts()}
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
