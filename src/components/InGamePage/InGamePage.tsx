import React from "react";
import * as S from "./styles";
import PropTypes from "prop-types";
import DrawingAndInfoSection from "./DrawingAndInfoSection/DrawingAndInfoSection";
import PhraseToGuessSection from "./PhraseToGuessSection/PhraseToGuessSection";
import LettersToClickSection from "./LettersToClickSection/LettersToClickSection";

interface Props {
  clickLetter: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  mistakesLeft: number;
  timeToNextLetter: number;
  phraseToGuess: Array<any>;
  hint: string;
  category: string;
  lettersToClick: Array<any>;
  isGameInProgress: boolean;
  isGameEnded: boolean;
  isGameWon: boolean;
}

const InGamePage: React.FC<Props> = ({
  mistakesLeft,
  timeToNextLetter,
  phraseToGuess,
  category,
  hint,
  lettersToClick,
  clickLetter,
  isGameInProgress,
  isGameEnded,
  isGameWon
}) => {
  return (
    <S.InGamePageWrapper
      isGameEnded={isGameEnded}
      isGameInProgress={isGameInProgress}
    >
      <DrawingAndInfoSection
        category={category}
        hint={hint}
        mistakesLeft={mistakesLeft}
        timeToNextLetter={timeToNextLetter}
      />
      <PhraseToGuessSection
        phraseToGuess={phraseToGuess}
        isGameWon={isGameWon}
      />
      <LettersToClickSection
        timeToNextLetter={timeToNextLetter}
        lettersToClick={lettersToClick}
        clickLetter={clickLetter}
      />
    </S.InGamePageWrapper>
  );
};

InGamePage.propTypes = {
  mistakesLeft: PropTypes.number.isRequired,
  timeToNextLetter: PropTypes.number.isRequired,
  phraseToGuess: PropTypes.arrayOf(PropTypes.object).isRequired,
  hint: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  lettersToClick: PropTypes.arrayOf(PropTypes.object).isRequired,
  clickLetter: PropTypes.func.isRequired,
  isGameInProgress: PropTypes.bool.isRequired,
  isGameEnded: PropTypes.bool.isRequired
};

export default InGamePage;
