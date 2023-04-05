import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProductPage from "../ProductPage";
import AllCategoryProducts from "./AllCategoryProducts";
import AllProducts from "./AllProducts";
import FindProduct from "./FindProduct";

import ListHeader from "./ListHeader";
import Search from "./SearchArea/Search";

export default function ProductArea() {
  const params = useParams();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("");

  function showProducts() {
    if (search !== "") {
      return <FindProduct search={search} />;
    } else if (category !== "") {
      return <AllCategoryProducts category={category} filter={filter} />;
    } else {
      return <AllProducts filter={filter} />;
    }
  }

  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        filter={filter}
        setFilter={setFilter}
      />
      <Container>
        {params.productId ? (
          <ProductPage />
        ) : (
          <>
            <ListHeader />
            {showProducts()}
          </>
        )}
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
