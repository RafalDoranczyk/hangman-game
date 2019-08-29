import React from "react";
import styled from "styled-components";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import myTheme from "../styled.d";

const GlobalStyle = createGlobalStyle`
body{
  background-color: #644364;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 
}
* ::after, * ::before{
    position: absolute;
    content: '';
}


:root{
    color: #000;
    font-size: 10px;
    font-family: 'Montserrat', sans-serif;
}
`;
const LayoutWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  @media (min-width: ${props => props.theme.device.iPad}) {
    height: 70%;
    width: 70%;
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={myTheme}>
    <>
      <GlobalStyle />
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  </ThemeProvider>
);

export default Layout;
