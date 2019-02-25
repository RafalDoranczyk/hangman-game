import React from 'react';
import styled from 'styled-components';
import { ButtonStyle } from './StartGameButton';

const ButtonInfoStyle = styled(ButtonStyle)`
top: 75%;
/* background-color: #8F1D2C; */
`



const GameInfoButton = () => (
    <ButtonInfoStyle>
        Game Info

    </ButtonInfoStyle>
);

export default GameInfoButton;