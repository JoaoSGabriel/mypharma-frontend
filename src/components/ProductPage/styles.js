import styled from "styled-components";

export const Header = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 40px 20px;
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

  div {
    margin: 170px 0 0 0;
  }

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

export const CartButton = styled.button`
  width: 120px;
  padding: 15px;
  border-radius: 5px;
  margin: 0 20px 0 0;
  background-color: #00fcc3;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.02rem;
  color: #000000;
  cursor: pointer;
`;
