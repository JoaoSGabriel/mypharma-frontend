import styled from "styled-components";

export const Wrappler = styled.div`
  width: 90px;
  height: 49px;
  margin: 0 0 0 20px;
  border-radius: 3px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #00fcc3;

  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.02rem;
  color: #000000;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  width: 140px;
  height: auto;
  border-radius: 6px;
  //inside Org
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 1;
  //color
  background: #ffffff;
  box-shadow: 0 14px 30px rgba(103, 132, 187, 0.25),
    0 4px 4px rgba(103, 132, 187, 0.15);
  //effects
  transition: all 1s ease;
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  visibility: ${(props) => (props.isActive ? "visible" : "hidden")};
  transform: ${(props) =>
    props.isActive ? "translateY(0)" : "translateY(-3px);"};

  span {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px 0;
    :hover {
      transform: scale(1.1);
      filter: brightness(2);
    }
  }
`;
