import React from "react";
import * as S from "./styles";
import PropTypes from "prop-types";

interface Props {
  isLetterShowed: boolean;
  letter: string;
  isGameWon: boolean;
}

const Letter: React.FC<Props> = ({ isLetterShowed, letter, isGameWon }) => (
  <S.LetterWrapper isGameWon={isGameWon}>
    {isLetterShowed ? letter : "__"}
  </S.LetterWrapper>
);

Letter.propTypes = {
  isLetterShowed: PropTypes.bool.isRequired,
  letter: PropTypes.string.isRequired,
  isGameWon: PropTypes.bool.isRequired
};

export default Letter;
