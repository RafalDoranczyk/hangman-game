import styled from "styled-components";

export const DrawingAndInfoSectionWrapper = styled.div`
  flex-basis: 40%;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;

  @media (orientation: landscape) {
    flex-basis: 100%;
    width: 60%;
  }
`;
