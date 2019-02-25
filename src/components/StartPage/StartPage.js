import React from 'react';
import styled from 'styled-components'
import Hangman from '../InGamePage/DrawingAndInfoSection/HangmanDrawing/Hangman/Hangman';
import StartGameButton from './Buttons/StartGameButton';
import GameInfoButton from './Buttons/GameInfoButton';

const StartPageWrapper = styled.div`
height: 100%;
width: 100%;
opacity: ${({ isGameInProgress, isGameEnded }) => isGameInProgress || isGameEnded ? '0' : '1'};
display: flex;
flex-flow: row wrap;
transition: .4s linear all;
*{
    opacity:1;
}
font-size: 15px;
`

const HangmanWapper = styled.div`
height: 100%;
width: 100%;
background-color: ${({ theme }) => theme.colors.deep};

`


const startPage = ({ isGameInProgress, startGame, isGameEnded, phraseToGuess, children }) => {
    return (
        <StartPageWrapper
            isGameEnded={isGameEnded}
            isGameInProgress={isGameInProgress}>
            <HangmanWapper>
                <Hangman />
            </HangmanWapper>
            <StartGameButton
                phraseToGuess={phraseToGuess}
                startGame={startGame}
            >{children}
            </StartGameButton>
            <GameInfoButton>
                {children}
            </GameInfoButton>
        </StartPageWrapper>
    )
}




export default startPage;