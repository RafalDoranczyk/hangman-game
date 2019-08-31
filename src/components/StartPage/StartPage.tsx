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
      <S.Heading>Hangman</S.Heading>
      <S.Text>
        This is a version of the classic game of hangman in which you try to
        guess the phrase before the man is hung.
      </S.Text>
      <S.Text>
        To play you click on the letters to reveal the phrase. If the phrase
        contains the letter, then it is revealed, but if not - a part of the
        hangman picture is drawn. When the picture is completely drawn, the man
        is hung and the game ends.
      </S.Text>
      <S.Important>
        Be careful! By clicking your first letter you will start the countdown.
        If you don't choose a letter - it will be chosen for you after 5
        seconds! Every time you pick a letter, the countdown will refresh.
      </S.Important>

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
