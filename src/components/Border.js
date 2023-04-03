import styled from "styled-components";

export default function Border() {
  return (
    <Wrappler>
      <div></div>
    </Wrappler>
  );
}

const Wrappler = styled.div`
  display: flex;
  justify-content: center;

  div {
    width: 95%;
    border-bottom: 1px solid #635d69;
  }
`;
