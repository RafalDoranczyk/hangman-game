import React from 'react';
import styled from 'styled-components'

const Letter = styled.span`
flex-basis: 10%;
height: 20%;
margin: .5rem;
font-size: 1.5rem;
display: flex;
justify-content: center;
align-items: center;

font-weight: 700;
box-shadow:${({ isClicked, isHit }) => isHit ? '0 .5rem 0 0 #479761' : isClicked ? '0 .5rem  0 0 #6f2232' : '0 .5rem  0 0 #fff'};
color: ${({ isClicked }) => isClicked ? '#888' : '#000'};
background-color: ${({ isClicked }) => isClicked ? '#000' : '#6f6f76'};
opacity: ${({ isClicked }) => isClicked ? '.6' : '1'};
transition: .5s ease-out all;

`

const letterToClick = ({ letter, clickLetter, isHit, isClicked }) => {
    console.log(isHit);
    return (
        <Letter
            isClicked={isClicked}
            onClick={clickLetter}
            isHit={isHit}
        >
            {letter}
        </Letter>
    )
}

export default letterToClick;