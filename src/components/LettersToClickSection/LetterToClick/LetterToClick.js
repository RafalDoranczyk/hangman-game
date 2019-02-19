import React from 'react';
import styled from 'styled-components'

const Letter = styled.span`
flex-basis: 10%;
height: 15%;
margin: .5rem;
font-size: 1.5rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
font-weight: 400;
transform: ${({ isClicked }) => isClicked && 'translateY(.3rem)'};  
box-shadow:${({ isClicked, isHit }) => isHit ? '0 .5rem 0 0 #69a982' : isClicked ? '0 .5rem  0 0 #6f2232' : '0 0 .1rem 0 #D6D6D8'};
color: ${({ isClicked }) => isClicked ? '#53516F' : '#D6D6D8'};
background-color: ${({ isClicked }) => isClicked ? '#15142E' : '#000'};
opacity: ${({ isClicked }) => isClicked ? '.5' : '1'};
transition-duration: .1s;
transition-property: color, background-color, opacity, box-shadow;
cursor: pointer;
`

const letterToClick = ({ letter, clickLetter, isHit, isClicked }) => {


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