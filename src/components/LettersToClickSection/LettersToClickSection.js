import React from 'react';
import LetterToClick from './LetterToClick/LetterToClick';
import styled from 'styled-components';

const LettersWrapper = styled.div`
flex-basis: 40%;
width: 100%;
display: flex;
flex-flow: row wrap;
justify-content: center;
align-items: center;
background-color: #0B091F;
`

const LettersToClick = ({ lettersToClick, clickLetter }) => {

    const letters = lettersToClick.map(letterToClick => (
        <LetterToClick
            clickLetter={(e, key) => clickLetter(e, key)}
            isClicked={letterToClick.isClicked}
            key={letterToClick.letter}
            isHit={letterToClick.isHit}
            letter={letterToClick.letter.toUpperCase()} />
    ))

    return (
        <LettersWrapper>
            {letters}
        </LettersWrapper>
    );
}

export default LettersToClick;