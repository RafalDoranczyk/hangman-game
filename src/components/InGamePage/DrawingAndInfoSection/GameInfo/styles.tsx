import styled from "styled-components";
import { number } from "prop-types";

interface Props {
  timeToNextLetter: number;
}

export const GameInfoWrapper = styled.div`
  flex-basis: 50%;
  padding: 5px;
  background-color: #fce5fc;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  color: #3d2f3d;
  font-size: 12px;
  line-height: 140%;
  @media (min-width: 1000px) {
    font-size: 16px;
  }
`;

export const CategoryTitle = styled.p`
  font-weight: 700;
`;
export const HintTitle = styled.p`
  font-weight: 700;
`;
export const Category = styled.span`
  font-style: italic;
`;
export const Hint = styled.span`
  font-style: italic;
`;
export const BoxWrapper = styled.div`
  flex-basis: 30%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
`;

const Box = styled.div`
  width: 45%;
  height: 35px;
  border-radius: 9px 0 9px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #977697;
  color: white;
  position: relative;
  font-size: 16px;
  &::after {
    top: -20px;
    left: 0;
    width: 100%;
    height: 20px;
    color: #111;
    font-size: 0.6em;
  }
`;

export const MistakesLeft = styled(Box)`
  &::after {
    content: "Mistakes left";
  }
`;
export const TimeToNextLetter = styled(Box)<Props>`
  transition: 0.3s linear opacity;
  background-color: #533253;
  opacity: ${({ timeToNextLetter }) => (timeToNextLetter === 0 ? ".4" : "1")};
  &::after {
    content: "Next letter in";
  }
`;
