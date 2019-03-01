import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const GameInfoWrapper = styled.div`
    flex-basis: 50%;
    background-color: ${({ theme }) => theme.colors.deepRed};
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1.4em;

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

    @media(orientation:landscape){
        flex-basis: 100%;
        align-items: center;
    }
`

const Category = styled.p`
    flex-basis: 100%;
    height: 20%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    font-weight: 700;
`
const Hint = styled.p`
    flex-basis: 95%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    height: 35%;
    font-weight: 700;
`

const MistakesLeft = styled.div`
    flex-basis: 40%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: .1rem;
    background-color: ${({ theme }) => theme.colors.deep};
    border-radius: 100px;
    color: ${({ theme }) => theme.colors.gray};
    position: relative;

    @media (orientation: landscape){
       margin-right: 40%;
       height: 10%;

    }
    &::before{
        top: 50%;
        transform: translate(-90%, -50%);
        left: 0;
        width: 6rem;
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
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 100px;
    color: ${({ theme }) => theme.colors.gray};
    position: relative;
    &::before{
        top: 100%;
        transform: translate(-50%, -10%);
        left: 50%;
        width: 1rem;
        height: 6rem;
        border-radius: 20%;
        background-color:${({ theme }) => theme.colors.black};
    }

    @media (orientation: landscape){
       order: -1;
       height: 10%;
       margin-left: 40%;
       &::before{
           transform: translate(-10%,-50%);
           top: 50%;
           left: 100%;
           width: 6rem;
           height: 1rem;
       }
    }

   
`

const GameInfoSection = ({ timeToNextLetter, mistakesLeft, phraseInfo }) => {
    return (
        <GameInfoWrapper>
            <Info>
                <Category>Category <span>{phraseInfo.category}</span> </Category>
                <Hint>Hint <span>{phraseInfo.hint}</span></Hint>
                <MistakesLeft>{mistakesLeft}</MistakesLeft>
                <TimeToNextLetterWrapper>{timeToNextLetter} </TimeToNextLetterWrapper>
            </Info>
        </GameInfoWrapper>
    )
};

GameInfoSection.propTypes = {
    timeToNextLetter: PropTypes.number.isRequired,
    mistakesLeft: PropTypes.number.isRequired,
    phraseInfo: PropTypes.object.isRequired,
}




export default GameInfoSection;