import { useNavigate, useParams } from "react-router-dom";

export default function ProductPage() {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <>
      <button onClick={() => navigate("/")}></button>O produto é o de o ID ={" "}
      {params.productId}
    </>
  );
}
