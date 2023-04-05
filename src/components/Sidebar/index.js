import styled from "styled-components";

import { SiHomeassistantcommunitystore } from "react-icons/si";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <Container>
      <div onClick={() => navigate("/")}>
        <SiHomeassistantcommunitystore className="icon" />
        Início
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 200px;
  height: 100%;
  background-color: #3a3345;
  box-sizing: border-box;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #302738;
    padding: 15px;
    cursor: pointer;
  }

  .icon {
    font-size: 20px;
    margin: 0 20px 0 0;
  }
`;
