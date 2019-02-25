import React from 'react';
import styled from 'styled-components';

const GameInfoWrapper = styled.div`
    flex-basis: 50%;
    background-color: ${({ theme }) => theme.colors.deepRed};
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    text-align: center;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gray};
span{
    display: block;
}

`
const Info = styled.div`
    flex-basis: 90.5%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: flex-end;
`

const Category = styled.p`
    flex-basis: 100%;
    height: 25%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    font-weight: 700;
`
const Hint = styled.p`
    flex-basis: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    height: 40%;
    font-weight: 700;
`

const MistakesLeft = styled.div`
    flex-basis: 40%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    margin-bottom: .1rem;
    background-color: ${({ theme }) => theme.colors.deep};
    border-radius: 100px;
    color: ${({ theme }) => theme.colors.gray};
    position: relative;
    &::before{
        top: 50%;
        transform: translate(-90%, -50%);
        left: 0;
        width: 5rem;
        height: 1rem;
        border-radius: 20%;
        background-color: ${({ theme }) => theme.colors.deep};
    }
`


const TimeToNextLetterWrapper = styled.div`
    flex-basis: 40%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: .1rem;
    font-size: 2rem;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 100px;
    color: ${({ theme }) => theme.colors.gray};
    position: relative;
    &::before{
        top: 100%;
        transform: translate(-50%, -10%);
        left: 50%;
        width: 1rem;
        height: 3rem;
        border-radius: 20%;
        background-color:${({ theme }) => theme.colors.black};
    }
`

const GameInfoSection = ({ timeToNextLetter, mistakesLeft, questionInfo }) => {
    return (
        <GameInfoWrapper>
            <Info>
                <Category>Category <span>{questionInfo.category}</span> </Category>
                <Hint>Hint <span>{questionInfo.hint}</span></Hint>
                <MistakesLeft>{mistakesLeft}</MistakesLeft>
                <TimeToNextLetterWrapper>{timeToNextLetter} </TimeToNextLetterWrapper>
            </Info>
        </GameInfoWrapper>
    )
}


export default GameInfoSection;