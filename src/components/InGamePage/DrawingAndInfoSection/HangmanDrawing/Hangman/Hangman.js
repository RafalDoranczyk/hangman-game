import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

//HangmanDrawingParts
const StylesForAllParts = styled.div`
    position: absolute;
    transition: .4s;
    background-color: ${({ theme }) => theme.colors.white};
    &::after,&::before{
        background-color: ${({ theme }) => theme.colors.white};
    }
`
const GallowsBasis = styled(StylesForAllParts)`
    top: 95%;
    height: .3em;
    left: 5%;
    width: 70%;
`
const GallowBranch = styled(StylesForAllParts)`
    top: 5%;
    bottom: 5%;
    left: 5%;
    width: .4em;
    &::after{
        top: 0%;
        height: 4em;
        left: 300%;
        width: 100%;
        transform: rotate(35deg);
    }
    `
const GallowTopBranch = styled(StylesForAllParts)`
    top: 5%;
    height: .4em;
    left: 5%;
    right: 50%;
`
const GallowsNoose = styled(StylesForAllParts)`
    top: 5%;
    bottom: 82.5%;
    left: 50%;
    width: .4em;
    transform: translateX(-50%);
    opacity: ${({ mistakesLeft }) => mistakesLeft <= 6 ? '1' : '0'};

`

const Head = styled(StylesForAllParts)`
    top:17.5%;
    height: 3.5em;
    left: 50%;
    width: 3.5em;
    transform: translate(-50%);
    opacity: ${({ mistakesLeft }) => mistakesLeft <= 5 ? '1' : '0'};

    border: .1em solid white;
    border-radius: 50%;
    background-color: transparent;
    ::after,::before{
        top: 20%;
        height: 10%;
        width: 10%;
        border-radius: 50%;
    }
    ::after{
        left: 25%;
    
    }
    ::before{
        right: 25%;
    }
`
const Body = styled(StylesForAllParts)`
    top: calc(3.5em + 17.5%);
    height: 5em;
    left: 50%;
    width: .3em;
    transform: translateX(-50%);
    opacity: ${({ mistakesLeft }) => mistakesLeft <= 4 ? '1' : '0'};
`
const StylesForArms = styled(StylesForAllParts)`
top: calc(3.5em + 17.5%);
   height: .2em;
   width: 3em;
   border-radius: 30%;
`

const LeftArm = styled(StylesForArms)`
    left: 50%;
    transform: translateX(-100%) rotate(-30deg);
    transform-origin: top right;
    opacity: ${({ mistakesLeft }) => mistakesLeft <= 3 ? '1' : '0'};
`
const RightArm = styled(StylesForArms)`
    right: 50%;
    transform: translateX(100%) rotate(30deg);
    transform-origin: top left;
    opacity: ${({ mistakesLeft }) => mistakesLeft <= 2 ? '1' : '0'};
`
const StylesForLegs = styled(StylesForAllParts)`
    top: calc(3.5em + 17.5% + 4.8em);
    width: 4em;
    height: .2em;
    border-radius: 30%;

`
const LeftLeg = styled(StylesForLegs)`
    left: 50%;
    transform: translateX(-100%) rotate(-50deg);
    transform-origin: top right;
    opacity: ${({ mistakesLeft }) => mistakesLeft <= 1 ? '1' : '0'};
`
const RightLeg = styled(StylesForLegs)`
    right: 50%;
    transform: translateX(100%) rotate(50deg);
    transform-origin: top left;
    opacity: ${({ mistakesLeft }) => mistakesLeft <= 0 ? '1' : '0'};
`

const Hangman = ({ mistakesLeft }) => (
    <>
        <GallowsBasis />
        <GallowBranch />
        <GallowTopBranch />
        <GallowsNoose
            mistakesLeft={mistakesLeft}
        />
        <Head
            mistakesLeft={mistakesLeft}
        />
        <Body
            mistakesLeft={mistakesLeft}
        />
        <LeftArm
            mistakesLeft={mistakesLeft}
        />
        <LeftLeg
            mistakesLeft={mistakesLeft}
        />
        <RightArm
            mistakesLeft={mistakesLeft}
        />
        <RightLeg
            mistakesLeft={mistakesLeft}
        />
    </>
);

Hangman.propTypes = {
    mistakesLeft: PropTypes.number,
}

export default Hangman;
