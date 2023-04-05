import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "./contexts/CartContext";

import styled from "styled-components";
import Border from "./Border";

import { BsCartPlus, BsCartX } from "react-icons/bs";
import { toast } from "react-toastify";

export default function ProductRow({ info }) {
  const navigate = useNavigate();
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

  function addToCart() {
    setCart([...cart, info]);
    toast("Adicionado ao carrinho");
  }

  function removeCart() {
    const index = cart.indexOf(info);

    if (index > -1) {
      cart.splice(index, 1);
    }

    setCart([...cart]);
    toast("Removido do carrinho");
  }

  return (
    <>
      <Container>
        <div onClick={() => navigate(`/${info?.id}`)}>{info?.name}</div>
        <div>
          <img src={info?.photo_path} alt="product.img" />
        </div>
        <div>{productCategory[info?.category]}</div>
        <div>{currencyFormat()}</div>
        <div>
          <BsCartPlus
            onClick={addToCart}
            style={{
              fontSize: "1.5rem",
              margin: "0 10px 0 0",
              color: "#1CBE31",
              cursor: "pointer",
            }}
          />
          <BsCartX
            onClick={removeCart}
            style={{ fontSize: "1.5rem", color: "#F40002", cursor: "pointer" }}
          />
        </div>
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

  div:nth-child(1) {
    cursor: pointer;
  }

  div {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0 0 0 40px;
  }
`;
