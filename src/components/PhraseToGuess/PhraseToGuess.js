import React from 'react';
import Letters from './Letters/Letters';
import styled from 'styled-components';

const PhraseToGuessWrapper = styled.div`
flex-basis: 25%;
display: flex;
flex-flow: column wrap;
justify-content: space-around;
align-items: center;
background-color: #222629;
color: #ddd;
`


const PhraseToGuess = ({ phraseToGuess }) => {

    return (
        <PhraseToGuessWrapper>
            <Letters
                phraseToGuess={phraseToGuess}
            />

        </PhraseToGuessWrapper>
    );
}

export default PhraseToGuess;