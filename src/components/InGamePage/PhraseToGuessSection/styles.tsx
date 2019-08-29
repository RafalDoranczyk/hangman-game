import styled from "styled-components";

export const PhraseToGuessWrapper = styled.div`
  flex-basis: 25%;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  border-radius: 5px;
  background-color: #644364;

  @media (orientation: landscape) {
    flex-basis: 40%;
    width: 40%;
  }
`;
