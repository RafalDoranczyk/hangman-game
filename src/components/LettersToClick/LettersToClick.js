import React from 'react';
import LetterToClick from './LetterToClick/LetterToClick';
import styled from 'styled-components';

const LettersWrapper = styled.div`
flex-basis: 35%;
display: flex;
flex-flow: row wrap;
justify-content: center;
align-items: center;
background-color: #0b0c10;
overflow: hidden;
`

const LettersToClick = ({ lettersToClick, clickLetter }) => {

    const letters = lettersToClick.map(letterToClick => (
        <LetterToClick
            clickLetter={(e) => { clickLetter(e) }}
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