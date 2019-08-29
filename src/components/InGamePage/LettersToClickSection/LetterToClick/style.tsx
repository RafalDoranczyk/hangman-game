import styled, { css } from "styled-components";

interface Props {
  isClicked: boolean;
  isHit: boolean;
}

export const Letter = styled.span<Props>(
  ({ isClicked, isHit }) => css`
    flex-basis: 10%;
    height: 15%;
    margin: 1% 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-weight: 700;
    transition: 0.2s ease all;
    transform: ${isClicked && "scale(0.9)"};
    background-color: ${isHit ? "#69a982" : isClicked ? "#d92121" : "#fff"};
    color: #977697;
    cursor: pointer;
    :hover {
      box-shadow: ${!isClicked && "0 0 5px 5px #ddd"};
    }
  `
);
