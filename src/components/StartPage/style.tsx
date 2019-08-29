import styled from "styled-components";

interface Props {
  readonly isGameInProgress: boolean;
  readonly isGameEnded: boolean;
}

export const StartPageWrapper = styled.div<Props>`
  height: 100%;
  width: 100%;
  opacity: ${({ isGameInProgress, isGameEnded }) =>
    isGameInProgress || isGameEnded ? "0" : "1"};
  background-color: #644364;
  transition: 0.4s linear opacity;
  font-size: 1.6rem;

  @media (orientation: landscape) and (min-width: ${({ theme }) =>
      theme.device.iPad}) {
    font-size: 3rem;
  }
  @media (orientation: portrait) and (min-width: ${({ theme }) =>
      theme.device.iPad}) {
    font-size: 3rem;
  }
`;

export const HangmanWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  *,
  *::after,
  *::before {
    opacity: 1;
    position: absolute;
  }
`;

