import React from "react";
import * as S from "./styles";
import PropTypes from "prop-types";
import Hangman from "../../../Hangman/Hangman";

interface Props {
  mistakesLeft: number;
}

const HangmanDrawingSection: React.FC<Props> = ({ mistakesLeft }) => (
  <S.HangmanDrawingWrapper>
    <S.HangmanWrapper>
      <Hangman mistakesLeft={mistakesLeft} />
    </S.HangmanWrapper>
  </S.HangmanDrawingWrapper>
);

HangmanDrawingSection.propTypes = {
  mistakesLeft: PropTypes.number.isRequired
};

export default HangmanDrawingSection;
