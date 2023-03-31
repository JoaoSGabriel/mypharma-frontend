import styled from "styled-components";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <Container>
      <Sidebar />
    </Container>
  );
}

const Container = styled.div`
  width: 1200px;
  height: 700px;
  background-color: #433b50;
`;
