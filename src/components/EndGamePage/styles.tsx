import styled, { css } from "styled-components";

interface Props {
  isGameEnded: boolean;
}

export const EndGameWrapper = styled.div<Props>(
  ({ isGameEnded }) => css`
    position: absolute;
    top: 0;
    bottom: 35%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    align-items: center;
    font-size: 14px;
    transform: ${isGameEnded ? "translateY(0)" : "translateY(-100%)"};
    opacity: ${isGameEnded ? "1" : "0"};
    transition: ${isGameEnded ? " 0.5s 0.8s linear all" : "0.3s ease all"};
    background-color: #644364;
    color: white;
    @media (orientation: landscape) {
      bottom: 0;
      right: 40%;
    }
  `
);

export const Title = styled.p`
  font-size: 22px;
`;
export const Subtitle = styled.p`
  font-size: 18px;
`;
export const TitbitOrPhrase = styled.div`
  width: 85%;
  color: #f9fc4e;
  text-align: center;
  max-height: 130px;
  overflow: auto;
`;
