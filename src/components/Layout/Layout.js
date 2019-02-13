import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
:root{
    font-size: 10px;
}

`

const Layout = styled.div`
background-color: #444;
min-height: 100vh;
`

const layout = (props) =>
    (
        <>
            <GlobalStyle />
            <Layout>{props.children}</Layout>
        </>
    )

export default layout;