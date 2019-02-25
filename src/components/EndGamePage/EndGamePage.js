import React from 'react';
import styled from 'styled-components';

const EndGameWrapper = styled.div`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
background-color: #333;
transform: ${({ isGameEnded, isGameInProgress }) => isGameInProgress ? 'translateX(100%)' : isGameEnded ? 'translateX(0)' : 'translateX(200%)'};
transition: .2s .4s linear all;
`

const EndGamePage = ({ isGameEnded, isGameInProgress }) => (
    <EndGameWrapper
        isGameInProgress={isGameInProgress}
        isGameEnded={isGameEnded}>
    </EndGameWrapper>
);

export default EndGamePage;