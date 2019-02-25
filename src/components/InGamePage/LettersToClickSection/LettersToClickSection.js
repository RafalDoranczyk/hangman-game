import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LetterToClick from './LetterToClick/LetterToClick';

const LettersWrapper = styled.div`
    flex-basis: 40%;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.deep};
`

const LettersToClick = ({ lettersToClick, clickLetter }) => {

    const letters = lettersToClick.map(letterToClick => (
        <LetterToClick
            clickLetter={(e, key) => clickLetter(e, key)}
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
};


LettersToClick.propTypes = {
    lettersToClick: PropTypes.arrayOf(PropTypes.object).isRequired,
    clickLetter: PropTypes.func.isRequired,
}
export default LettersToClick;