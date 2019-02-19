import React from 'react';
import styled from 'styled-components';
import { Body, Head, LeftArm, LeftLeg, RightArm } from './HangmanParts/HangmanParts'

const HangmanDrawingWrapper = styled.div`
flex-basis: 50%;
background-color: #0B091F;
position: relative;
top: 0;
left:0;
`




const hangmanDrawingSection = ({ mistakesLeft }) => {
    let content;
    switch (mistakesLeft) {
        case (6):
            content = <Body />;
            break;
        case (5):
            content = <> <Body /> <Head /> </>
            break;
    }


    return (
        <HangmanDrawingWrapper>



            {content}

        </HangmanDrawingWrapper>)

}
export default hangmanDrawingSection;