import React from 'react';
import Letter from './Letter/Letter';
import styled from 'styled-components';

const LettersWrapper = styled.div`
flex-basis: 80%;
width: 80%;
display: flex;
flex-flow: row wrap;
align-items: center;
justify-content: center;
`
const BreakLine = styled.div`
flex-basis: 100%;
height: 10%;
`

const Space = styled.div`
flex-basis: 10%;
height: 10%;
`

const letters = ({ phraseToGuess }) => {
    const letters = phraseToGuess.map(letter => {
        if (letter.name !== " ")
            return (
                <Letter
                    key={letter.id}
                    letter={letter}
                />)
        else if (letter.name === " ") return <BreakLine />
        return <Space />
    }
    )

    return (
        <LettersWrapper>
            {letters}
        </LettersWrapper>
    );
}

export default letters;