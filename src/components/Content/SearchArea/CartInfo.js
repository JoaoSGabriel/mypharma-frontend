import { useContext } from "react";
import CartContext from "../../contexts/CartContext";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { Wrappler } from "./DropDownMenuStyles";

export default function CartInfo() {
  const { cart, setCart } = useContext(CartContext);

  function totalPay() {
    let total = 0;
    for (let value of cart) {
      total += value.price;
    }

    return total.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <Wrappler>
      <AiOutlineShoppingCart
        style={{ fontSize: "1.5rem", margin: "0 5px 0 0" }}
      />
      {totalPay()}
    </Wrappler>
  );
}
