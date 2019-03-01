import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DrawingAndInfoSection from './DrawingAndInfoSection/DrawingAndInfoSection';
import PhraseToGuessSection from './PhraseToGuessSection/PhraseToGuessSection';
import LettersToClickSection from './LettersToClickSection/LettersToClickSection';


const InGamePageWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
    transform: ${({ isGameInProgress, isGameEnded }) => isGameInProgress || isGameEnded ? 'translateX(0)' : 'translateX(100%)'};
    transition: ${({ isGameEnded }) => isGameEnded ? '.4s .4s linear all' : '.4s linear all'};
    font-size: 1rem;

    @media (orientation: portrait) and (min-width: ${({ theme }) => theme.device.iPad}) {
    font-size: 2rem;
}

    @media (orientation: landscape) and (min-width: ${({ theme }) => theme.device.iPad}) {
    font-size: 1.6rem;
}

`




const InGamePage = ({ mistakesLeft, timeToNextLetter, phraseToGuess, phraseInfo, lettersToClick, clickLetter, isGameInProgress, isGameEnded, isGameWon }) => (
    <InGamePageWrapper
        isGameEnded={isGameEnded}
        isGameInProgress={isGameInProgress}>
        <DrawingAndInfoSection
            phraseInfo={phraseInfo}
            mistakesLeft={mistakesLeft}
            timeToNextLetter={timeToNextLetter}
        />
        <PhraseToGuessSection
            phraseToGuess={phraseToGuess}
            isGameWon={isGameWon}
        />
        <LettersToClickSection
            isGameEnded={isGameEnded}
            lettersToClick={lettersToClick}
            clickLetter={clickLetter} />
    </InGamePageWrapper>
);

InGamePage.propTypes = {
    mistakesLeft: PropTypes.number.isRequired,
    timeToNextLetter: PropTypes.number.isRequired,
    phraseToGuess: PropTypes.arrayOf(PropTypes.object).isRequired,
    phraseInfo: PropTypes.object.isRequired,
    lettersToClick: PropTypes.arrayOf(PropTypes.object).isRequired,
    clickLetter: PropTypes.func.isRequired,
    isGameInProgress: PropTypes.bool.isRequired,
    isGameEnded: PropTypes.bool.isRequired,
}


export default InGamePage;