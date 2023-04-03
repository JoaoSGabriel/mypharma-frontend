import { useRef, useState } from "react";

import { ButtonWrapper, Wrappler } from "./DropDownMenuStyles";
import { HiArrowDown, HiArrowUp } from "react-icons/hi";

export default function Filters({ filter, setFilter }) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  function productTag() {
    if (filter === "asc") {
      return (
        <>
          Preço
          <HiArrowUp style={{ margin: "0 0 0 5px" }} />
        </>
      );
    } else if (filter === "desc") {
      return (
        <>
          Preço
          <HiArrowDown style={{ margin: "0 0 0 5px" }} />
        </>
      );
    } else if (filter === "name") {
      return <>Alfabético</>;
    } else {
      return "Filtros";
    }
  }
  return (
    <Wrappler
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {productTag()}
      <ButtonWrapper ref={dropdownRef} isActive={isActive}>
        <span onClick={() => setFilter("asc")}>
          Preço
          <HiArrowUp style={{ margin: "0 0 0 5px" }} />
        </span>
        <span onClick={() => setFilter("desc")}>
          Preço
          <HiArrowDown style={{ margin: "0 0 0 5px" }} />
        </span>
        <span onClick={() => setFilter("name")}>Alfabético</span>
        <span onClick={() => setFilter("")}>Nenhum</span>
      </ButtonWrapper>
    </Wrappler>
  );
}
