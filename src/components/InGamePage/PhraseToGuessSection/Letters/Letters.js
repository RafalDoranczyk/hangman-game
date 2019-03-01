import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Letter from './Letter/Letter';

const LettersWrapper = styled.div`
    flex-basis: 90%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    align-content: space-around;
    text-align: center;
`

const BreakLine = styled.div`
    flex-basis: 100%;
    height: 1%;
`



const Letters = ({ phraseToGuess, isGameWon }) => {

    const letters = phraseToGuess.map(letterObj => {
        let letters;
        if (letterObj.letter !== " ") {
            letters = <Letter
                key={letterObj.id}
                letterObj={letterObj}
                isGameWon={isGameWon} />
        }
        else if (letterObj.letter === " ") {
            letters = <BreakLine
                key={letterObj.id} />
        }
        return letters;
    })

    return (

        <LettersWrapper>{letters}</LettersWrapper>
    );
};

Letters.propTypes = {
    phraseToGuess: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Letters;