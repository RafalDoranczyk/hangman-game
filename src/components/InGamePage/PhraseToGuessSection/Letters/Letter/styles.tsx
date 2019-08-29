import styled, { css } from "styled-components";

interface Props {
  isGameWon: boolean;
}

export const LetterWrapper = styled.span<Props>(
  ({ isGameWon }) => css`
    display: block;
    height: 0.7em;
    width: 0.7em;
    font-size: 1.6em;
    margin: 0 0.8em;
    color: ${isGameWon ? "#fed123" : "#dbd4eb"};
    @media (orientation: landscape) {
      margin: 0 0.4em;
    }
  `
);
