import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";

import { BiArrowFromRight } from "react-icons/bi";
import { Container, Header, Texts } from "./styles";
import { currencyFormat } from "../Utils";

export default function ProductPage() {
  const navigate = useNavigate();
  const params = useParams();

  const data = {
    id: "642b57d24cd5cc2fa560fbf6",
    name: "Acém Bovino bandeja 500G",
    price: 27.9,
    category: "Meat",
    photo_path:
      "https://www.extrabom.com.br/uploads/produtos/200x200/21622_20170214100222_thumb_acem_crorreto.png",
  };
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
            Categoria: {data.category} <br />
            Valor: {currencyFormat(data.price)}
          </h2>
        </Texts>
      </Container>
    </>
  );
}
