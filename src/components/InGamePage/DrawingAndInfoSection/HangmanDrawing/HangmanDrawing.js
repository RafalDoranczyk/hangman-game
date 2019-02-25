import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Hangman from './Hangman/Hangman';

const HangmanSectionWrapper = styled.div`
    flex-grow: 1;
    position: relative;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.deep};
`


const HangmanDrawingSection = ({ mistakesLeft }) => (
    <HangmanSectionWrapper>
        <Hangman
            mistakesLeft={mistakesLeft}
        />

    </HangmanSectionWrapper>
);

HangmanDrawingSection.propTypes = {
    mistakesLeft: PropTypes.number.isRequired,
}

export default HangmanDrawingSection;