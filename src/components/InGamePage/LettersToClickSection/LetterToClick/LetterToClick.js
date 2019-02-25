import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Letter = styled.span`
    flex-basis: 10%;
    height: 15%;
    margin: .5rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-weight: 700;
    transform: ${({ isClicked }) => isClicked && 'translateY(.3rem)'};  
    box-shadow:${({ isClicked, isHit, theme }) =>
        isHit ? `0 .5rem 0 0 ${theme.colors.green}`
            : isClicked ? `0 .5rem  0 0 ${theme.colors.red}`
                : `0 0 .1rem 0 ${theme.colors.gray}`};
    background-color: ${({ isClicked, theme }) => isClicked ? theme.colors.deep : theme.colors.black};
    opacity: ${({ isClicked }) => isClicked ? '.5' : '1'};
    color: ${({ theme }) => theme.colors.gray};
    cursor: pointer;
`

const LetterToClick = ({ letter, clickLetter, isHit, isClicked }) => (
    <Letter
        isClicked={isClicked}
        onClick={clickLetter}
        isHit={isHit}
    >
        {letter}
    </Letter>
);

LetterToClick.propTypes = {
    letter: PropTypes.string.isRequired,
    clickLetter: PropTypes.func.isRequired,
    isHit: PropTypes.bool.isRequired,
    isClicked: PropTypes.bool.isRequired,
}

export default LetterToClick;