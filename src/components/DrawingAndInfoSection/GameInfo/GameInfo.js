import React from 'react';
import styled from 'styled-components';

const GameInfoWrapper = styled.div`
flex-basis: 50%;
background-color: #D6D6D8;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
&::after{
    content: '';
    position: absolute;
    top: -20px;
    left: calc(50% - 25px);
    height: 120%;
    background-color: #D6D6D8;
    width: 30px;
    transform: rotate(5deg);
    transform-origin: 0 100%;
}

div{
    flex-basis: 85%;
    height: 100%;
    /* background-color: red; */
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-around;
 
}
div *{
  letter-spacing: 1px;
    color: #000;
    margin-top: 5%;
}
em{
    display: block;
    width: 100%;
}

`


const GameInfoSection = ({ timeToNextLetter }) => {
    return (
        <GameInfoWrapper>
            <div>

                <h3>Category: <em>Famous Buildigings</em></h3>
                <h4>Hint: <em>One of the highest bulding in the world</em></h4>
                <h3>Next letter appears in: <em>{timeToNextLetter} s</em></h3>
            </div>
        </GameInfoWrapper>
    );
}

export default GameInfoSection;