import React from 'react';
import styled from 'styled-components'

const Letter = styled.span`
display: flex;
justify-content: center;
align-items: center;
border: 2px solid black;
height: 4rem;
width: 4rem;
margin: 10px;
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