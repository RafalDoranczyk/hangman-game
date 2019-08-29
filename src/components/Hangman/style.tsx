import styled, { css } from "styled-components";

// IF U WANT TO USE THIS COMPONENT => WRAPPER FOR IT NEEDS POSITION RELATIVE, SOME WIDTH AND HEIGHT AND *{
//     POSITION: ABSOLUTE
//               }

export interface Props {
  readonly mistakesLeft: number;
  readonly font?: string;
}

//HangmanDrawingParts
const StylesForAllParts = styled.div<Props>(
  ({ font }) => css`
    /* GIVE FONT PROPS IF U WANT MAKE BIGGER HANGMAN */
    font-size: ${font ? font : "10px"};
    transition: 0.4s;
    @media (min-width: 1000px) {
      font-size: ${font ? font : "15px"};
    }
  `
);

const GallowParts = styled(StylesForAllParts)<Props>(
  ({ theme }) => css`
    background-color: ${theme.colors.gallow};
    &::after,
    &::before {
      background-color: ${theme.colors.gallow};
    }
  `
);

const ManParts = styled(StylesForAllParts)<Props>(
  ({ theme }) => css`
    background-color: ${theme.colors.man};
    &::after,
    &::before {
      background-color: ${theme.colors.man};
    }
  `
);

export const GallowsBasis = styled(GallowParts)`
  bottom: 1%;
  height: 1em;
  left: 2%;
  width: 40%;
`;
export const GallowBranch = styled(GallowParts)`
  bottom: 1%;
  height: 95%;
  left: 2%;
  width: 1em;
`;
export const GallowTopBranch = styled(GallowParts)`
  top: 4%;
  height: 0.8em;
  left: 2%;
  width: 60%;
`;
export const GallowsNoose = styled(GallowParts)`
  top: 4%;
  height: 20%;
  left: 61%;
  width: 0.7em;
  opacity: ${({ mistakesLeft }) => (mistakesLeft <= 6 ? "1" : "0")};
`;
export const Head = styled(ManParts)`
  height: 4em;
  width: 4em;
  left: calc(61% + 0.35em);
  top: 25%;
  transform: translateX(-50%);
  border-radius: 50%;
  background-color: transparent;
  border: 3px solid ${({ theme }) => theme.colors.man};
  opacity: ${({ mistakesLeft }) => (mistakesLeft <= 5 ? "1" : "0")};
  ::after,
  ::before {
    top: 20%;
    height: 10%;
    width: 10%;
    border-radius: 50%;
  }
  ::after {
    left: 25%;
  }
  ::before {
    right: 25%;
  }
`;
export const Body = styled(ManParts)`
  top: calc(25% + 4em);
  height: 25%;
  left: calc(61% + 0.35em);
  width: 0.5em;
  transform: translateX(-50%);
  opacity: ${({ mistakesLeft }) => (mistakesLeft <= 4 ? "1" : "0")};
`;
export const StylesForArms = styled(ManParts)`
  height: 0.4em;
  width: 3em;
  border-radius: 30%;
  top: calc(25% + 4em + 7.5%);
`;

export const RightArm = styled(StylesForArms)`
  left: calc(61% + 0.35em);
  transform: rotate(-30deg);
  transform-origin: top right;
  opacity: ${({ mistakesLeft }) => (mistakesLeft <= 3 ? "1" : "0")};
`;
export const LeftArm = styled(StylesForArms)`
  left: calc(61% + 0.35em - 3em);
  transform: rotate(30deg);
  transform-origin: top left;
  opacity: ${({ mistakesLeft }) => (mistakesLeft <= 2 ? "1" : "0")};
`;
export const StylesForLegs = styled(ManParts)`
  top: calc(50% + 4em);
  border-radius: 30%;
  width: 0.4em;
  height: 3.2em;
  left: calc(61% + 0.35em);
`;
export const LeftLeg = styled(StylesForLegs)`
  transform: translateX(-50%) rotate(50deg);
  transform-origin: top right;
  opacity: ${({ mistakesLeft }) => (mistakesLeft <= 1 ? "1" : "0")};
`;
export const RightLeg = styled(StylesForLegs)`
  left: calc(61%);
  transform: translateX(50%) rotate(-50deg);
  transform-origin: top left;
  opacity: ${({ mistakesLeft }) => (mistakesLeft <= 0 ? "1" : "0")};
`;
