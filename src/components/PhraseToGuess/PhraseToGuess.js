import React from 'react';
import Letters from './Letters/Letters';
import styled from 'styled-components';

const PhraseToGuessWrapper = styled.div`
flex-basis: 15%;
display: flex;
flex-flow: column nowrap;
justify-content: space-around;
align-items: center;
background-color: blue;
`


const PhraseToGuess = ({ playerLetter, phraseToGuess }) => {


    const clickedKeyInfo = playerLetter ?
        <h2>Your last letter: {playerLetter}</h2> :
        <h2>Press or click key to start!</h2>

    return (
        <PhraseToGuessWrapper>
            {clickedKeyInfo}
            <Letters
                phraseToGuess={phraseToGuess}
            />
        </PhraseToGuessWrapper>
    );
}

export default PhraseToGuess;