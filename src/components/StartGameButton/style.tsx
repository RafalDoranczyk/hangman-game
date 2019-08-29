import styled, { css } from "styled-components";

interface Props {
  isGameEnded: boolean;
}

export const StartGameButtonStyle = styled.button<Props>(
  ({ isGameEnded }) => css`
    position: ${!isGameEnded && "absolute"};
    bottom: 20%;
    left: 50%;
    transform: ${!isGameEnded && "translateX(-50%)"};
    height: 50px;
    width: 200px;
    border-radius: 5px;
    background-color: #977697;
    color: #fff;
    border: none;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      background-color: #a998a9;
    }
  `
);
