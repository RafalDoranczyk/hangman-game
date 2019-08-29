import * as React from "react";
import * as S from "./style";
import PropTypes from "prop-types";
export interface Props {
  isLoading?: boolean;
  onClick: () => void;
  isGameEnded: boolean;
}

const StartGameButton: React.SFC<Props> = ({
  isLoading,
  onClick,
  isGameEnded
}) => {
  return (
    <S.StartGameButtonStyle
      isGameEnded={isGameEnded}
      disabled={isLoading}
      onClick={onClick}
    >
      {isLoading ? "Loading..." : "Start game!"}
    </S.StartGameButtonStyle>
  );
};

StartGameButton.propTypes = {
  isLoading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  isGameEnded: PropTypes.bool.isRequired
};

export default StartGameButton;
