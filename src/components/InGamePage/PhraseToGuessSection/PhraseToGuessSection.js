import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Letters from './Letters/Letters';

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

);

PhraseToGuess.propTypes = {
    phraseToGuess: PropTypes.arrayOf(PropTypes.object).isRequired,

}

export default PhraseToGuess;