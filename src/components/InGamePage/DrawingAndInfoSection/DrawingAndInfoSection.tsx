import React from "react";

import PropTypes from "prop-types";
import HangmanDrawing from "./HangmanDrawing/HangmanDrawing";
import GameInfo from "./GameInfo/GameInfo";
import * as S from "./styles";

interface Props {
  timeToNextLetter: number;
  mistakesLeft: number;
  category: string;
  hint: string;
}

const DrawingAndInfoSection: React.FC<Props> = ({
  timeToNextLetter,
  mistakesLeft,
  category,
  hint
}) => {
  return (
    <S.DrawingAndInfoSectionWrapper>
      <HangmanDrawing mistakesLeft={mistakesLeft} />
      <GameInfo
        category={category}
        hint={hint}
        mistakesLeft={mistakesLeft}
        timeToNextLetter={timeToNextLetter}
      />
    </S.DrawingAndInfoSectionWrapper>
  );
};

DrawingAndInfoSection.propTypes = {
  timeToNextLetter: PropTypes.number.isRequired,
  mistakesLeft: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired
};
export default DrawingAndInfoSection;
