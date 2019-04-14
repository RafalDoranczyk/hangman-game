import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Hangman from '../Reusable/Hangman/Hangman';
import { ButtonStyle } from '../Reusable/Buttons/StartGameButton';




const StartPageWrapper = styled.div`
height: 100%;
width: 100%;
opacity: ${({ isGameInProgress, isGameEnded }) => isGameInProgress || isGameEnded ? '0' : '1'};
display: flex;
flex-flow: row wrap;
transition: .4s linear all;
font-size: 1.6rem;

@media (orientation: landscape) and (min-width: ${({ theme }) => theme.device.iPad}) {
    font-size: 3rem;
}
@media (orientation: portrait) and (min-width: ${({ theme }) => theme.device.iPad}) {
    font-size: 3rem;
}

`

const HangmanWrapper = styled.div`
position: relative;
height: 100%;
width: 100%;
background-color: ${({ theme }) => theme.colors.deep};
*, *::after, *::before{
    opacity:1;
    position: absolute;
    box-shadow: 0 0 3px 3px ${({theme})=>theme.colors.red}
}
`

const StartGameButtonStyle = styled(ButtonStyle)`
@media(orientation: landscape){
    top: 50%;
    left: 70%;
    transform: translate(-50%,-50%);
}

`


const StartPage = ({ isGameInProgress, startGame, isGameEnded, phraseToGuess, children }) => {
    const text = phraseToGuess.length > 0 ? 'Start Game' : 'Loading...'

    return (
        <StartPageWrapper
            isGameEnded={isGameEnded}
            isGameInProgress={isGameInProgress}>
            <HangmanWrapper>
                <Hangman />
            </HangmanWrapper>
            <StartGameButtonStyle
                phraseToGuess={phraseToGuess}
                onClick={startGame}
            >{text}
            </StartGameButtonStyle>
        </StartPageWrapper>
    )
}

StartPage.propTypes = {
    isGameInProgress: PropTypes.bool.isRequired,
    startGame: PropTypes.func.isRequired,
    isGameEnded: PropTypes.bool.isRequired,
    phraseToGuess: PropTypes.arrayOf(PropTypes.object).isRequired,
}


export default StartPage;