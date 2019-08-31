import styled from "styled-components";

interface Props {
  isGameInProgress: boolean;
  isGameEnded: boolean;
}

export const InGamePageWrapper = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
  transform: ${({ isGameInProgress, isGameEnded }) =>
    isGameInProgress || isGameEnded ? "scale(1)" : "scale(0)"};
  opacity: ${({ isGameInProgress, isGameEnded }) =>
    isGameInProgress || isGameEnded ? "1" : "0"};
  transition: ${({ isGameEnded }) =>
    isGameEnded ? ".4s .4s linear opacity" : ".4s linear opacity"};
  font-size: 1rem;
`;
