import { useContext, useEffect, useState } from "react";
import CartContext from "../../contexts/CartContext";

import { AiOutlineShoppingCart } from "react-icons/ai";
import styled from "styled-components";

export default function CartInfo() {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    showTotal();
  }, [cart]);

  function showTotal() {
    let balance = 0;
    for (let value of cart) {
      balance += value?.price;
    }
    setTotal(balance);
  }
  function toCurrency() {
    let balance = total.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    return "Valor total: " + balance;
  }

  return (
    <Container>
      <AiOutlineShoppingCart style={{ margin: "0 5px 0 0" }} />
      {toCurrency()}
    </Container>
  );
}

const Container = styled.div`
  width: 200px;
  height: 49px;
  margin: 0 0 0 20px;
  border-radius: 3px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.1rem;
  color: #ffff;
`;
