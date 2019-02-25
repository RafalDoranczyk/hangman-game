import React from 'react';
import Letters from './Letters/Letters';
import styled from 'styled-components';

const PhraseToGuessWrapper = styled.div`
    flex-basis: 25%;
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.colors.black};
`

const PhraseToGuess = ({ phraseToGuess }) => (

    <PhraseToGuessWrapper>

        <Letters phraseToGuess={phraseToGuess} />

    </PhraseToGuessWrapper>

)

export default PhraseToGuess;