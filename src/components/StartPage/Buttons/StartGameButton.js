import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const ButtonStyle = styled.button`
position: absolute;
top: 60%;
left: 50%;
transform:translateX(-50%);
height: 50px;
width: 150px;
border-radius: 50px;
border: none;
font-size: 1.1em;
letter-spacing: 2px;
background-color: ${({ theme, disabled }) => disabled ? theme.colors.black : theme.colors.deepRed};
color: ${({ theme }) => theme.colors.gray};
cursor: pointer;
transition: .6s linear all;
`


const StartGameButton = ({ startGame, phraseToGuess }) => {

    const text = phraseToGuess.length > 0 ? 'Start Game' : 'Loading...'

    return (
        <ButtonStyle
            disabled={phraseToGuess.length > 0 ? false : true}
            onClick={startGame}>
            {text}
        </ButtonStyle>
    )
}


StartGameButton.propTypes = {
    startGame: PropTypes.func.isRequired,
    phraseToGuess: PropTypes.arrayOf(PropTypes.object).isRequired,

}

export default StartGameButton;