import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Hangman from '../../../Reusable/Hangman/Hangman';

const HangmanDrawingWrapper = styled.div`
    flex-grow: 1;
    position: relative;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.deep};
`

const HangmanWrapper = styled.div`
position: relative;
height: 100%;
width:100%;
font-size: 1rem;
z-index: 1;

@media (orientation:landscape) and (min-width: ${props => props.theme.device.iPad}){
    font-size: 1.7rem;
}
@media (orientation:portrait) and (min-width: ${props => props.theme.device.iPad}){
    font-size: 1.7rem;
}
*{

    position: absolute;
}

`


const HangmanDrawingSection = ({ mistakesLeft }) => (
    <HangmanDrawingWrapper>
        <HangmanWrapper>
            <Hangman
                mistakesLeft={mistakesLeft}
            />

        </HangmanWrapper>


    </HangmanDrawingWrapper>
);

HangmanDrawingSection.propTypes = {
    mistakesLeft: PropTypes.number.isRequired,
}

export default HangmanDrawingSection;