import styled from "styled-components";

import { SiHomeassistantcommunitystore } from "react-icons/si";

export default function Sidebar() {
  return (
    <Container>
      <div>
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
  color: #f5f2fb;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #302738;
    padding: 15px;
    box-sizing: border-box;
  }

  .icon {
    font-size: 20px;
    margin: 0 20px 0 0;
  }
`;
