import React from "react";
import PropTypes from "prop-types";
import * as S from "./style";

interface Props {
  letter: string;
  isHit: boolean;
  isClicked: boolean;
  clickLetter: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  timeToNextLetter: number;
}

const LetterToClick: React.FC<Props> = ({
  letter,
  clickLetter,
  isHit,
  isClicked,
  timeToNextLetter
}) => (
  <S.Letter
    disabled={timeToNextLetter === 0 && true}
    onClick={clickLetter}
    isClicked={isClicked}
    isHit={isHit}
  >
    {letter}
  </S.Letter>
);

LetterToClick.propTypes = {
  letter: PropTypes.string.isRequired,
  isHit: PropTypes.bool.isRequired,
  isClicked: PropTypes.bool.isRequired,
  clickLetter: PropTypes.func.isRequired,
  timeToNextLetter: PropTypes.number.isRequired
};

export default LetterToClick;
