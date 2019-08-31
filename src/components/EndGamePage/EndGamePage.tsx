import React from "react";
import * as S from "./styles";
import PropTypes from "prop-types";
import StartGameButton from "../StartGameButton/StartGameButton";
interface Props {
  isGameEnded: boolean;
  isGameWon: boolean;
  phraseToGuess: Array<any>;
  onClick: () => void;
  titbit?: string;
}

const EndGamePage: React.FC<Props> = ({
  isGameEnded,
  isGameWon,
  phraseToGuess,
  onClick,
  titbit
}) => {
  const guessedPhrase = phraseToGuess.map(({ letter }) => letter);
  return (
    <S.EndGameWrapper isGameEnded={isGameEnded}>
      <S.Title>{isGameWon ? "Excellent!" : `Try again!`}</S.Title>
      <S.Subtitle>
        {isGameWon ? "Fun Fact" : "The correct phrase was"}
      </S.Subtitle>

      <S.TitbitOrPhrase>{isGameWon ? titbit : guessedPhrase}</S.TitbitOrPhrase>

      <StartGameButton isGameEnded={isGameEnded} onClick={onClick} />
    </S.EndGameWrapper>
  );
};

EndGamePage.propTypes = {
  isGameEnded: PropTypes.bool.isRequired,
  isGameWon: PropTypes.bool.isRequired,
  phraseToGuess: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  titbit: PropTypes.string
};

export default EndGamePage;
