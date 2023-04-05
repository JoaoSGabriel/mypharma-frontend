import styled from "styled-components";

export const Header = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 0 20px;
  cursor: pointer;
  font-size: 1.5rem;
`;

export const Container = styled.div`
  height: 390px;
  padding: 20px;
  display: flex;
  justify-content: start;
  align-items: center;

  img {
    width: 350px;
    margin: 0 60px 0 0;
  }

  div {
  }
`;

export const Texts = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 2rem;
    margin: 0 0 20px 0;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 400;
  }
`;
