import React from "react";
import PropTypes from "prop-types";
import * as S from "./style";
import StartGameButton from "../StartGameButton/StartGameButton";

interface Props {
  isGameInProgress: boolean;
  isGameEnded: boolean;
  isLoading: boolean;
  startGame: () => void;
}

const StartPage: React.SFC<Props> = ({
  isGameInProgress,
  isGameEnded,
  isLoading,
  startGame
}) => {
  return (
    <S.StartPageWrapper
      isGameEnded={isGameEnded}
      isGameInProgress={isGameInProgress}
    >
      <StartGameButton
        isGameEnded={isGameEnded}
        isLoading={isLoading}
        onClick={startGame}
      />
    </S.StartPageWrapper>
  );
};

StartPage.propTypes = {
  isGameInProgress: PropTypes.bool.isRequired,
  startGame: PropTypes.func.isRequired,
  isGameEnded: PropTypes.bool.isRequired
};

export default StartPage;
