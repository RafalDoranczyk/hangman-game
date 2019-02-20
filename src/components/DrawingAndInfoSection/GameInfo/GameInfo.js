import React from 'react';
import styled from 'styled-components';

const GameInfoWrapper = styled.div`
flex-basis: 50%;
background-color: #D6D6D8;
display: flex;
flex-flow: row nowrap;
justify-content: flex-end;
text-align: center;

*{
    color: #000;
  
}
span{
    display: block;
    width: 80%;
    margin: 1rem auto;
}
`
const Info = styled.div`
flex-basis: 87.5%;
/* background-color: red; */
display: flex;
flex-flow: row wrap;
justify-content: space-around;
align-items: flex-end;
`

const Category = styled.p`
    flex-basis: 100%;
    height: 30%;
    font-weight: 700;
`
const Hint = styled.p`
    flex-basis: 100%;
    height: 30%;
    font-weight: 700;
`
const MistakesLeft = styled.div`
flex-basis: 40%;
height: 20%;
display: flex;
justify-content: center;
align-items: center;
font-size: 2rem;
background-color: #0B091F;
border-radius: 20%;
color: #D6D6D8;
`


const TimeToNextLetterWrapper = styled.div`
flex-basis: 40%;
height: 20%;
display: flex;
justify-content: center;
align-items: center;
font-size: 2rem;
background-color: #000;
border-radius: 20%;
color: #D6D6D8;
`


const GameInfoSection = ({ timeToNextLetter, mistakesLeft }) => {
    return (
        <GameInfoWrapper>
            <Info>
                <Category>Category: <span>Famous Buildings </span> </Category>
                <Hint>Hint: <span> One of the highest buildings in Europe</span></Hint>
                <MistakesLeft>{mistakesLeft}</MistakesLeft>
                <TimeToNextLetterWrapper>{timeToNextLetter} </TimeToNextLetterWrapper>
            </Info>
        </GameInfoWrapper>
    );
}

export default GameInfoSection;