import React from 'react';
import LetterToClick from './LetterToClick/LetterToClick';
import styled from 'styled-components';

const LettersWrapper = styled.div`
display: flex;
flex-flow: row wrap;
margin-top: 100px;
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