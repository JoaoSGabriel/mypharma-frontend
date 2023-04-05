import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";

import { BiArrowFromRight } from "react-icons/bi";
import { CartButton, Container, Header, Texts } from "./styles";
import { currencyFormat } from "../Utils";
import { toast } from "react-toastify";

export default function ProductPage() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  const params = useParams();
  const data = {};
  const productCategory = {
    Bakery: "Padaria",
    Beverage: "Bebidas",
    Deli: "Lanches",
    Meat: "Carnes",
    Dairy: "Laticínios",
  };

  function isOnCart() {
    for (let value of cart) {
      if (value.id === data.id) {
        return (
          <CartButton onClick={removeCart}>Remover do carrinho</CartButton>
        );
      }
    }

    return <></>;
  }

  function addToCart() {
    setCart([...cart, data]);
    toast("Adicionado ao carrinho");
  }

  function removeCart() {
    const index = cart.indexOf(data);

    if (index > -1) {
      cart.splice(index, 1);
    }

    setCart([...cart]);
    toast("Removido do carrinho");
  }

  return (
    <>
      <Header onClick={() => navigate("/")}>
        <BiArrowFromRight /> Voltar
      </Header>
      <Container>
        <img src={data.photo_path} alt="product.img" />
        <Texts>
          <h1>{data.name}</h1>
          <h2>
            Categoria: {productCategory[data.category]} <br />
            Valor: {currencyFormat(data.price)}
          </h2>
          <div>
            <CartButton onClick={addToCart}>Adicionar ao carrinho</CartButton>
            {isOnCart()}
          </div>
        </Texts>
      </Container>
    </>
  );
}
