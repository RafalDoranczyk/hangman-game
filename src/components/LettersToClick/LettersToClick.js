import React from 'react';
import LetterToClick from './LetterToClick/LetterToClick';
import styled from 'styled-components';

const LettersWrapper = styled.div`
flex-basis: 30%;
display: flex;
flex-flow: row wrap;
justify-content: center;
align-items: center;
background-color: #111;
overflow: hidden;
`

const LettersToClick = ({ lettersToClick, clickLetter }) => {

    const letters = lettersToClick.map(letterToClick => (
        <LetterToClick
            clickLetter={(e) => { clickLetter(e) }}
            key={letterToClick.letter}
            isClicked={letterToClick.isClicked}
            letter={letterToClick.letter.toUpperCase()} />
    ))

    return (
        <LettersWrapper>
            {letters}
        </LettersWrapper>
    );
}

export default LettersToClick;