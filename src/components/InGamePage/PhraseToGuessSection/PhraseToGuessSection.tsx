import React from "react";
import PropTypes from "prop-types";
import Letters from "./Letters/Letters";
import * as S from "./styles";

interface Props {
  phraseToGuess: Array<any>;
  isGameWon: boolean;
}

const PhraseToGuess: React.FC<Props> = ({ phraseToGuess, isGameWon }) => (
  <S.PhraseToGuessWrapper>
    <Letters isGameWon={isGameWon} phraseToGuess={phraseToGuess} />
  </S.PhraseToGuessWrapper>
);

PhraseToGuess.propTypes = {
  phraseToGuess: PropTypes.arrayOf(PropTypes.object).isRequired,
  isGameWon: PropTypes.bool.isRequired
};

export default PhraseToGuess;
