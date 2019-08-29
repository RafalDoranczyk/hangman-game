import React from "react";
import PropTypes from "prop-types";
import { Props } from "./style";
import * as S from "./style";
const Hangman: React.FC<Props> = ({ mistakesLeft }) => {
  return (
    <>
      <S.GallowsBasis mistakesLeft={mistakesLeft} />
      <S.GallowBranch mistakesLeft={mistakesLeft} />
      <S.GallowTopBranch mistakesLeft={mistakesLeft} />
      <S.GallowsNoose mistakesLeft={mistakesLeft} />
      <S.Head mistakesLeft={mistakesLeft} />
      <S.Body mistakesLeft={mistakesLeft} />
      <S.LeftArm mistakesLeft={mistakesLeft} />
      <S.LeftLeg mistakesLeft={mistakesLeft} />
      <S.RightArm mistakesLeft={mistakesLeft} />
      <S.RightLeg mistakesLeft={mistakesLeft} />
    </>
  );
};

Hangman.propTypes = {
  mistakesLeft: PropTypes.number.isRequired
};

export default Hangman;
