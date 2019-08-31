import styled, { css } from "styled-components";

interface Props {
  isClicked: boolean;
  isHit: boolean;
  disabled: any;
}

export const Letter = styled.button<Props>(
  ({ isClicked, isHit, disabled }) => css`
    flex-basis: 10%;
    border: none;
    height: 15%;
    margin: 1% 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-weight: 700;
    opacity: ${disabled && ".4"};
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
