import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-weight: normal;
}
:root{
    font-size: 10px;
    font-family: 'Montserrat', sans-serif;
}

`

const Layout = styled.div`
background-color: #444;
height: 100vh;
overflow: hidden;
display: flex;
flex-flow: column nowrap;
justify-content: space-evenly;
align-items: center;
&>*{
    width: 100%;
}
`

const layout = (props) =>
    (
        <>
            <GlobalStyle />
            <Layout>{props.children}</Layout>
        </>
    )

export default layout;