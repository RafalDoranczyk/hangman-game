import React from 'react';
import Letter from './Letter/Letter';
import styled from 'styled-components';

const LettersWrapper = styled.div`
display: flex;
flex-flow: row wrap;`


const letters = ({ phraseToGuess }) => {
    const letters = phraseToGuess.map(letter => (
        <Letter
            key={letter.id}
            letter={letter}
        />
    ))

    return (
        <LettersWrapper>
            {letters}
        </LettersWrapper>
    );
}

export default letters;