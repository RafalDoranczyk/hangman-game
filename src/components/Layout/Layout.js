import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../../theme/theme';

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: normal;
 
}
* ::after, * ::before{
    position: absolute;
    content: '';
}


:root{
    color:${({ theme }) => theme.colors.black};
    font-size: 10px;
    font-family: 'Montserrat', sans-serif;
}
`
const LayoutWrapper = styled.div`
position: absolute;
top: 50%;
left: 50%;
height: 100%;
width: 100%;
overflow: hidden;
max-width: 1000px;
transform: translate(-50%,-50%);
`

const Layout = ({ isGameInProgress, children }) =>
    (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle
                    isGameInProgress={isGameInProgress} />
                <LayoutWrapper>
                    {children}
                </LayoutWrapper>
            </>
        </ThemeProvider>

    )


Layout.propTypes = {
    isGameInProgress: PropTypes.bool.isRequired,
}

export default Layout;