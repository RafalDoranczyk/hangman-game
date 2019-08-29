import React from "react";
import PropTypes from "prop-types";
import Letter from "./Letter/Letter";
import * as S from "./styles";

interface Props {
  phraseToGuess: Array<any>;
  isGameWon: boolean;
}

const Letters: React.FC<Props> = ({ phraseToGuess, isGameWon }) => {
  const letters = phraseToGuess.map(letterObj => {
    let letters;
    if (letterObj.letter !== " ") {
      letters = (
        <Letter
          key={letterObj.id}
          isLetterShowed={letterObj.isLetterShowed}
          letter={letterObj.letter}
          isGameWon={isGameWon}
        />
      );
    } else if (letterObj.letter === " ") {
      letters = <S.BreakLine key={letterObj.id} />;
    }
    return letters;
  });

  return <S.LettersWrapper>{letters}</S.LettersWrapper>;
};

Letters.propTypes = {
  phraseToGuess: PropTypes.arrayOf(PropTypes.object).isRequired,
  isGameWon: PropTypes.bool.isRequired
};

export default Letters;
