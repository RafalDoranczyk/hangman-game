import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

interface Props {
  timeToNextLetter: number;
  mistakesLeft: number;
  category: string;
  hint: string;
}

const GameInfoSection: React.FC<Props> = ({
  timeToNextLetter,
  mistakesLeft,
  category,
  hint
}) => {
  return (
    <S.GameInfoWrapper>
      <S.CategoryTitle>Category</S.CategoryTitle>
      <S.Category>{category}</S.Category>
      <S.HintTitle>Hint</S.HintTitle>
      <S.Hint>{hint}</S.Hint>

      <S.BoxWrapper>
        <S.MistakesLeft>{mistakesLeft}</S.MistakesLeft>
        <S.TimeToNextLetter>{timeToNextLetter} </S.TimeToNextLetter>
      </S.BoxWrapper>
    </S.GameInfoWrapper>
  );
};

GameInfoSection.propTypes = {
  timeToNextLetter: PropTypes.number.isRequired,
  mistakesLeft: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired
};

export default GameInfoSection;
