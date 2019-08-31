import styled from "styled-components";

export const HangmanDrawingWrapper = styled.div`
  flex-basis: 50%;
  position: relative;
  top: 0;
  left: 0;
  background-color: #222333;
`;

export const HangmanWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  font-size: 1rem;
  z-index: 1;

  * {
    position: absolute;
  }
`;
