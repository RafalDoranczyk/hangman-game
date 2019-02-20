import React from 'react';
import styled from 'styled-components';
import { Body, Head, LeftArm, LeftLeg, RightArm, GallowsBasis, RightLeg, GallowBranch, GallowTopBranch, GallowsNoose } from './HangmanParts/HangmanParts'

const HangmanDrawingWrapper = styled.div`
flex-basis: 50%;
background-color: #0B091F;
position: relative;
top: 0;
left: 0;
`




const hangmanDrawingSection = ({ mistakesLeft }) => {



    return (
        <HangmanDrawingWrapper>
            <GallowsBasis />
            <GallowBranch />
            <GallowTopBranch />
            <GallowsNoose
                mistakesLeft={mistakesLeft} />
            <Head mistakesLeft={mistakesLeft} />
            <Body mistakesLeft={mistakesLeft} />
            <LeftArm mistakesLeft={mistakesLeft} />
            <LeftLeg mistakesLeft={mistakesLeft} />
            <RightArm mistakesLeft={mistakesLeft} />
            <RightLeg mistakesLeft={mistakesLeft} />


        </HangmanDrawingWrapper>
    )

}
export default hangmanDrawingSection;