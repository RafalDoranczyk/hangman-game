import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

// IF U WANT TO USE THIS COMPONENT => WRAPPER FOR IT NEEDS POSITION RELATIVE, SOME WIDTH AND HEIGHT AND *{
//     POSITION: ABSOLUTE
//               }


//HangmanDrawingParts
const StylesForAllParts = styled.div`
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
    width: 9em;
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
    width: 14em;
`
const GallowsNoose = styled(StylesForAllParts)`
    top: 5%;
    height: 4em;
    left: calc(5% + 14em);
    width: .4em;
    transform: translateX(-50%);
    opacity: ${({ mistakesLeft }) => mistakesLeft <= 6 ? '1' : '0'};

`

const Head = styled(StylesForAllParts)`
    top: ${({ manFromTop }) => `calc(${manFromTop} + 4em)`};
    height: 3em;
    left: calc(5% + 14em);
    transform: translateX(-50%);
    width: 3em;
    opacity: ${({ mistakesLeft }) => mistakesLeft <= 5 ? '1' : '0'};
    border: .1em solid white;
    border-radius: 50%;
    background-color: transparent;
    transition: ${({ isGameEnded }) => isGameEnded ? '1s 1s linear all' : '.5s linear all'};
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
    top: ${({ manFromTop }) => `calc(${manFromTop} + 7em)`};
    height: 4em;
    left: calc(5% + 14em);
    width: .3em;
    transform: translateX(-50%);
    opacity: ${({ mistakesLeft }) => mistakesLeft <= 4 ? '1' : '0'};
    transition: ${({ isGameEnded }) => isGameEnded ? '1s 1s linear all' : '.5s linear all'};
`
const StylesForArms = styled(StylesForAllParts)`
   height: .2em;
   width: 2.8em;
   border-radius: 30%;

`

const LeftArm = styled(StylesForArms)`
    top: ${({ manFromTop }) => `calc(${manFromTop} + 7.6em)`}; 
    left: calc(5% + 14em - 2.8em);
    transform: rotate(-30deg);
    transform-origin: top right;
    opacity: ${({ mistakesLeft }) => mistakesLeft <= 3 ? '1' : '0'};
    transition: ${({ isGameEnded }) => isGameEnded ? '1s 1s linear all' : '.5s linear all'};
`
const RightArm = styled(StylesForArms)`
    top: ${({ manFromTop }) => `calc(${manFromTop} + 7.6em)`}; 
    left: calc(5% + 14em);
    transform:  rotate(30deg);
    transform-origin: top left;
    opacity: ${({ mistakesLeft }) => mistakesLeft <= 2 ? '1' : '0'};
    transition: ${({ isGameEnded }) => isGameEnded ? '1s 1s linear all' : '.5s linear all'};
`
const StylesForLegs = styled(StylesForAllParts)`
    border-radius: 30%;
    width: .2em;
    height: 3.2em;
   
`
const LeftLeg = styled(StylesForLegs)`
    top: ${({ manFromTop }) => `calc(${manFromTop} + 7em + 4em)`};
    left: calc(5% + 14em);
    transform: translateX(-50%)  rotate(50deg);
    transform-origin: top right;
    opacity: ${({ mistakesLeft }) => mistakesLeft <= 1 ? '1' : '0'};
    transition: ${({ isGameEnded }) => isGameEnded ? '1s 1s linear all' : '.5s linear all'};
`
const RightLeg = styled(StylesForLegs)`
    top: ${({ manFromTop }) => `calc(${manFromTop} + 7em + 4em)`};
    left: calc(5% + 14em - .2em);
    transform: translateX(50%)  rotate(-50deg);
    transform-origin: top left;
    opacity: ${({ mistakesLeft }) => mistakesLeft <= 0 ? '1' : '0'};
    transition: ${({ isGameEnded }) => isGameEnded ? '1s 1s linear all' : '.5s linear all'};
`

const Hangman = ({ mistakesLeft, isGameEnded, isGameWon }) => {
    const manFromTop = isGameEnded && isGameWon ? 'calc(30%)' : '5%';
    return (
        <>
            <GallowsBasis />
            <GallowBranch />
            <GallowTopBranch />
            <GallowsNoose
                isGameEnded={isGameEnded}
                mistakesLeft={mistakesLeft}
            />
            <Head
                isGameEnded={isGameEnded}
                manFromTop={manFromTop}
                mistakesLeft={mistakesLeft}
            />
            <Body
                isGameEnded={isGameEnded}
                manFromTop={manFromTop}
                mistakesLeft={mistakesLeft}
            />
            <LeftArm
                isGameEnded={isGameEnded}
                manFromTop={manFromTop}
                mistakesLeft={mistakesLeft}
            />
            <LeftLeg
                isGameEnded={isGameEnded}
                manFromTop={manFromTop}
                mistakesLeft={mistakesLeft}
            />
            <RightArm
                isGameEnded={isGameEnded}
                manFromTop={manFromTop}
                mistakesLeft={mistakesLeft}
            />
            <RightLeg
                isGameEnded={isGameEnded}
                manFromTop={manFromTop}
                mistakesLeft={mistakesLeft}
            />
        </>
    )
};

Hangman.propTypes = {
    mistakesLeft: PropTypes.number,
}

export default Hangman;
