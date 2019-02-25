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
    transform: ${({ isGameInProgress, isGameEnded }) => isGameInProgress ? 'translateX(0)' : isGameEnded ? 'translateX(-100%)' : 'translateX(100%)'};
    transition: ${({ isGameEnded }) => isGameEnded ? '.4s .4s linear all' : '.4s linear all'};
`




const InGamePage = ({ mistakesLeft, timeToNextLetter, phraseToGuess, questionInfo, lettersToClick, clickLetter, isGameInProgress, isGameEnded }) => (
    <InGamePageWrapper
        isGameEnded={isGameEnded}
        isGameInProgress={isGameInProgress}>
        <DrawingAndInfoSection
            questionInfo={questionInfo}
            mistakesLeft={mistakesLeft}
            timeToNextLetter={timeToNextLetter}
        />
        <PhraseToGuessSection
            phraseToGuess={phraseToGuess}
        />
        <LettersToClickSection
            lettersToClick={lettersToClick}
            clickLetter={clickLetter} />
    </InGamePageWrapper>
);

InGamePage.propTypes = {
    mistakesLeft: PropTypes.number.isRequired,
    timeToNextLetter: PropTypes.number.isRequired,
    phraseToGuess: PropTypes.arrayOf(PropTypes.object).isRequired,
    questionInfo: PropTypes.object.isRequired,
    lettersToClick: PropTypes.arrayOf(PropTypes.object).isRequired,
    clickLetter: PropTypes.func.isRequired,
    isGameInProgress: PropTypes.bool.isRequired,
    isGameEnded: PropTypes.bool.isRequired,
}


export default InGamePage;