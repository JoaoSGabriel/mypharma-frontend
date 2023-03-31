import styled from "styled-components";
import Content from "./Content";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <Container>
      <Sidebar />
      <Content />
    </Container>
  );
}

const Container = styled.div`
  width: 1200px;
  height: 700px;
  background-color: #433b50;

  display: flex;
`;
