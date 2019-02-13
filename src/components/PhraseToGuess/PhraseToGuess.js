import React from 'react';
import Letter from './Letter/Letter';
import Hint from './Hint/Hint';
// import styled from 'styled-components'


const PhraseToGuess = ({ playerLetter, phraseToGuess }) => {
    const letters = phraseToGuess.map(letter => (
        <Letter
            key={letter.id}
            letter={letter}
        />
    ))

    const message = playerLetter ?
        <h2>Your last letter: {playerLetter}</h2> :
        <h2>Press or click key to start!</h2>

    return (
        <>
            {message}
            <Hint />
            {letters}
        </>
    );
}

export default PhraseToGuess;