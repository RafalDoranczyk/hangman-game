import styled from "styled-components";

export const LettersWrapper = styled.div`
  flex-basis: 35%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  background-color: #977697;
  font-size: 1.5rem;
  @media (orientation: landscape) {
    flex-grow: 1;
    width: 40%;
  }
`;
