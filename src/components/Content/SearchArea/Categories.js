import { useRef, useState } from "react";

import { ButtonWrapper, Wrappler } from "./DropDownMenuStyles";

export default function Categories({ category, setCategory }) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const productCategory = {
    Bakery: "Padaria",
    Beverage: "Bebidas",
    Deli: "Lanches",
    Meat: "Carnes",
    Dairy: "Laticínios",
  };

  return (
    <Wrappler
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {category !== "" ? <>{productCategory[category]}</> : <>Categorias</>}
      <ButtonWrapper ref={dropdownRef} isActive={isActive}>
        <span onClick={() => setCategory("Bakery")}>Padaria</span>
        <span onClick={() => setCategory("Beverage")}>Bebidas</span>
        <span onClick={() => setCategory("Deli")}>Lanches</span>
        <span onClick={() => setCategory("Meat")}>Carnes</span>
        <span onClick={() => setCategory("Dairy")}>Laticínios</span>
        <span onClick={() => setCategory("")}>Nenhuma</span>
      </ButtonWrapper>
    </Wrappler>
  );
}
