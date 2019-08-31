import styled from "styled-components";

interface Props {
  readonly isGameInProgress: boolean;
  readonly isGameEnded: boolean;
}

export const StartPageWrapper = styled.div<Props>`
  min-height: 100%;
  border-radius: 10px;

  border: 1px solid #fff;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  text-align: justify;
  line-height: 140%;
  opacity: ${({ isGameInProgress, isGameEnded }) =>
    isGameInProgress || isGameEnded ? "0" : "1"};
  background-color: #644364;
  transition: 0.4s linear opacity;
  font-size: 1.6rem;
  position: relative;
`;

export const Heading = styled.h1`
  font-size: 24px;
  color: #fff;
`;

export const Text = styled.p`
  color: #ccc;
  font-size: 14px;
  width: 90%;
`;

export const Important = styled(Text)`
  color: #fff;
`;
