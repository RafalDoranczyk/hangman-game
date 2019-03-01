import React from 'react';
import styled from 'styled-components';
import { ButtonStyle } from '../Reusable/Buttons/StartGameButton';

const EndGameWrapper = styled.div`
position: absolute;
top: 0;
bottom: 35%;
left: 0;
right: 0;
background-color:${({ theme }) => theme.colors.deepRed};
transform: ${({ isGameEnded }) => isGameEnded ? 'translateY(0)' : 'translateY(-100%)'};
transition: .4s  linear all;
color: ${({ theme }) => theme.colors.white};
font-size: 1rem;
transition: .5s;
h2,h3,p,i{
    position: absolute;
    left: 50%;
    transform: ${({ isGameEnded }) => isGameEnded ? 'translateX(-50%)' : 'translateY(-150%)'};
    text-align: center;
    width: 100%;
    opacity: ${({ isGameEnded }) => isGameEnded ? '1' : '0'};
}
h2{
    font-weight: 700;
    top: 8%;
    font-size: 2em;
}
h3{
    top: 25%;
    font-size: 1.4em;
   
    
}
p{
    width: 80%;
    top: 35%;
    font-size: ${({ isGameWon }) => isGameWon ? '1.1em' : '1.8em'};
    font-weight: 500;
    letter-spacing: 2px;
    line-height: 180%;
    text-align: ${({ isGameWon }) => isGameWon && 'justify'};
    bottom: 25%;
    overflow: auto;
    color: ${({ theme }) => theme.colors.winGamePhrase};
    font-weight: ${({ isGameWon }) => !isGameWon && '700'};
    padding: .5em;
}

@media (orientation:landscape){
    bottom: 0;
    right: 40%;
}
@media (orientation: portrait) and (min-width: ${props => props.theme.device.iPad}){
font-size: 2rem;
}
@media (orientation: landscape) and (min-width: ${props => props.theme.device.iPad}){
font-size: 1.6rem;
}

`
const Icon = styled.div`
position: absolute;
top: 70%;
width: 100%;
height: 20%;
i{
    font-size: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
}
`

const ButtonEndGameStyle = styled(ButtonStyle)`
top: 85%;
height: 8vh;
width: 12em;
font-size: 1.4em;
background-color: ${({ theme }) => theme.colors.deep};
color: ${({ theme }) => theme.colors.white};
transition: none;
font-weight: 700;

`


const EndGamePage = ({ isGameEnded, isGameWon, phraseToGuess, startGame, titbit }) => {
    const titbitMessage = titbit;
    const winOrLoseMessage = isGameWon ? 'Excellent!' : `Try again!`
    const guessedPhrase = !isGameWon && phraseToGuess.map(phrase => phrase.letter);

    const winOrLoseContent = <>
        <h2>{winOrLoseMessage}</h2>
        {
            isGameWon ?
                <>
                    <h3>Fun Fact</h3>
                    <p>
                        {titbitMessage}
                    </p>
                </>
                :
                <>
                    <h3>The correct phrase was</h3>
                    <p>
                        {guessedPhrase}
                    </p>
                    <Icon><i className="fas fa-sad-cry"></i></Icon>
                </>
        }
    </>



    return (
        <EndGameWrapper
            isGameWon={isGameWon}
            isGameEnded={isGameEnded}>

            {winOrLoseContent}

            <ButtonEndGameStyle
                onClick={startGame}
                phraseToGuess={phraseToGuess}>Play again
            </ButtonEndGameStyle>

        </EndGameWrapper>
    );
}
export default EndGamePage;