import React from 'react';
import Letter from './Letter/Letter';
import styled from 'styled-components';

const LettersWrapper = styled.div`

    flex-basis: 90%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    align-content: space-around;
    text-align: center;

`

const BreakLine = styled.div`

    flex-basis: 100%;
    height: 1%;

`



const letters = ({ phraseToGuess }) => {

    const letters = phraseToGuess.map(letterObj => {
        let letters;
        if (letterObj.letter !== " ") {
            letters = <Letter
                key={letterObj.id}
                letterObj={letterObj} />
        }
        else if (letterObj.letter === " ") {
            letters = <BreakLine
                key={letterObj.id} />
        }
        return letters;
    })

    return (

        <LettersWrapper>{letters}</LettersWrapper>
    );
}

export default letters;