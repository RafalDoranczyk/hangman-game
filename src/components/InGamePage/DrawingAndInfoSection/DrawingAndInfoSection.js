import React from 'react';
import HangmanDrawing from './HangmanDrawing/HangmanDrawing';
import GameInfo from './GameInfo/GameInfo';
import styled from 'styled-components';


const DrawingAndInfoSectionWrapper = styled.div`
    flex-basis: 35%;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    top: 0;
    left: 0;
    &::after{
        top: -10%;
        left: 35%;
        right: 47%;
        height: 110%;
        transform: rotate(5deg);
        background-color:${({ theme }) => theme.colors.deep};
    }
`
const DrawingAndInfoSection = ({ timeToNextLetter, mistakesLeft, questionInfo }) => (

    <DrawingAndInfoSectionWrapper>
        <HangmanDrawing
            mistakesLeft={mistakesLeft}
        />
        <GameInfo
            questionInfo={questionInfo}
            mistakesLeft={mistakesLeft}
            timeToNextLetter={timeToNextLetter}
        />
    </DrawingAndInfoSectionWrapper>
)

export default DrawingAndInfoSection;