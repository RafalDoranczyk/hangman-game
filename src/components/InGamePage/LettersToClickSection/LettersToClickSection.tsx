import React from "react";
import * as S from "./style";
import PropTypes from "prop-types";
import LetterToClick from "./LetterToClick/LetterToClick";

interface Props {
  lettersToClick: Array<any>;
  clickLetter: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  timeToNextLetter: number;
}

const LettersToClick: React.FC<Props> = ({
  lettersToClick,
  clickLetter,
  timeToNextLetter
}) => {
  const letters = lettersToClick.map(letterToClick => (
    <LetterToClick
      timeToNextLetter={timeToNextLetter}
      clickLetter={e => clickLetter(e)}
      isClicked={letterToClick.isClicked}
      key={letterToClick.letter}
      isHit={letterToClick.isHit}
      letter={letterToClick.letter.toUpperCase()}
    />
  ));

  return <S.LettersWrapper>{letters}</S.LettersWrapper>;
};

LettersToClick.propTypes = {
  lettersToClick: PropTypes.arrayOf(PropTypes.object).isRequired,
  clickLetter: PropTypes.func.isRequired,
  timeToNextLetter: PropTypes.number.isRequired
};
export default LettersToClick;
