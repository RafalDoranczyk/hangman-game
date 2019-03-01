import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LetterToClick from './LetterToClick/LetterToClick';

const LettersWrapper = styled.div`
    flex-basis: 35%;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.deep};
    font-size: 1.5rem;
    @media (orientation: landscape){
        flex-grow: 1;
        width: 40%;
    }

    @media (orientation: portrait) and (min-width: ${({ theme }) => theme.device.iPad}) {
    font-size: 2rem;
}

    @media (orientation: landscape) and (min-width: ${({ theme }) => theme.device.iPad}) {
    font-size: 1.6rem;
}


`

const LettersToClick = ({ lettersToClick, clickLetter, isGameEnded }) => {

    const letters = lettersToClick.map(letterToClick => (
        <LetterToClick
            clickLetter={(e, key) => clickLetter(e, key)}
            isClicked={letterToClick.isClicked}
            key={letterToClick.letter}
            isHit={letterToClick.isHit}
            letter={letterToClick.letter.toUpperCase()}
            isGameEnded={isGameEnded} />
    ))

    return (
        <LettersWrapper
            isGameEnded={isGameEnded}>
            {letters}
        </LettersWrapper>
    );
};


LettersToClick.propTypes = {
    lettersToClick: PropTypes.arrayOf(PropTypes.object).isRequired,
    clickLetter: PropTypes.func.isRequired,
}
export default LettersToClick;