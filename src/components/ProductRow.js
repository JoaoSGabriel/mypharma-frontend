import { useContext } from "react";
import CartContext from "./contexts/CartContext";

import styled from "styled-components";
import Border from "./Border";

export default function ProductRow({ info }) {
  const { cart, setCart } = useContext(CartContext);

  const productCategory = {
    Bakery: "Padaria",
    Beverage: "Bebidas",
    Deli: "Lanches",
    Meat: "Carnes",
    Dairy: "Laticínios",
  };

  function currencyFormat() {
    return info?.price.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <>
      <Container>
        <div>{info?.name}</div>
        <div>
          <img src={info?.photo_path} alt="product.img" />
        </div>
        <div>{productCategory[info?.category]}</div>
        <div>{currencyFormat()}</div>
        <div>Soon</div>
      </Container>
      <Border />
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 110px;

  img {
    width: 100px;
  }

  div {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0 0 0 40px;
  }
`;
