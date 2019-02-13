import React from 'react';
import styled from 'styled-components'

const Letter = styled.span`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid black;
height: 4rem;
width: 4rem;
margin: 1px;
font-size: 1.4rem;
font-weight: 700;
background-color: ${({ isClicked }) => isClicked ? '#222' : '#aaa'};
`

const letterToClick = ({ letter, isClicked, clickLetter }) => {
    return (
        <Letter
            onClick={clickLetter}
            isClicked={isClicked}
        >{letter}</Letter>
    )
}
export default letterToClick;