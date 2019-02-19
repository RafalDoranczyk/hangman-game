import React from 'react';
import styled from 'styled-components';
import { Head } from './HangmanParts/Head'
import { Body } from './HangmanParts/Body'
import { LeftArm } from './HangmanParts/LeftArm'
import { RightArm } from './HangmanParts/RightArm';
import { LeftLeg } from './HangmanParts/LeftLeg';
import { connect } from 'tls';

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
        case 1:
            return <Head />
            break;
        case 2:
            return (<><Head /> <Body /></>)
    }

    return (
        <HangmanDrawingWrapper>



            {content}

        </HangmanDrawingWrapper>)

}
export default hangmanDrawingSection;