import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HangmanDrawing from './HangmanDrawing/HangmanDrawing';
import GameInfo from './GameInfo/GameInfo';



const DrawingAndInfoSectionWrapper = styled.div`
    flex-basis: 40%;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    top: 0;
    left: 0;
    overflow: hidden;
    &::after{
        top: 0;
        left: 30%;
        right: 47%;
        height: 120%;
        transform: rotate(3deg);
        transform-origin: bottom right;
        background-color:${({ theme }) => theme.colors.deep};
    }
    @media (orientation: landscape){
        &::after{
            display: none;
        }
        flex-basis: 100%;
        width: 60%;
    }
`


const DrawingAndInfoSection = ({ timeToNextLetter, mistakesLeft, phraseInfo }) => (

    <DrawingAndInfoSectionWrapper>
        <HangmanDrawing
            mistakesLeft={mistakesLeft}
        />
        <GameInfo
            phraseInfo={phraseInfo}
            mistakesLeft={mistakesLeft}
            timeToNextLetter={timeToNextLetter}
        />
    </DrawingAndInfoSectionWrapper>
);


DrawingAndInfoSection.propTypes = {
    timeToNextLetter: PropTypes.number.isRequired,
    mistakesLeft: PropTypes.number.isRequired,
    phraseInfo: PropTypes.object.isRequired,
}
export default DrawingAndInfoSection;