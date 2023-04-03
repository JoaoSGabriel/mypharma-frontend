import styled from "styled-components";
import Border from "../Border";

export default function Product({ product }) {
  function currencyFormat() {
    return product?.price.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <>
      <Container>
        <div>{product?.name}</div>
        <div>
          <img src={product?.photo_path} alt="product.img" />
        </div>
        <div>{product?.category}</div>
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
    justify-content: center;
  }
`;
