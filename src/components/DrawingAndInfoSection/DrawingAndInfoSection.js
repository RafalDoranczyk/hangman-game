import React from 'react';
import HangmanDrawing from './HangmanDrawing/HangmanDrawing';
import GameInfo from './GameInfo/GameInfo';
import styled from 'styled-components';


const DrawingAndInfoSectionWrapper = styled.div`
flex-basis: 35%;
width: 100%;
display: flex;
flex-flow: row nowrap;
overflow: hidden;
position: relative;
top: 0;
left: 0;

`
const DrawingAndInfoSection = ({ timeToNextLetter, mistakesLeft }) => (
    <DrawingAndInfoSectionWrapper>

        <HangmanDrawing
            mistakesLeft={mistakesLeft}
        />
        <GameInfo
            timeToNextLetter={timeToNextLetter}
        />
    </DrawingAndInfoSectionWrapper>
)

export default DrawingAndInfoSection;