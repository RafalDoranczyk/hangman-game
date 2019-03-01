import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LetterWrapper = styled.span`
    display: block;
    height: .7em;
    width: .7em;
    font-size: 1.6em;
    margin: 0 .8em;
    color: ${({ theme, isGameWon }) => isGameWon ? theme.colors.winGamePhrase : theme.colors.gray};

@media (orientation: landscape){
    margin: 0 .4em;
}


`

const Letter = ({ letterObj, isGameWon }) => (
    <LetterWrapper
        isGameWon={isGameWon}>
        {letterObj.isLetterShowed ? letterObj.letter : "__"}
    </LetterWrapper>
);

Letter.propTypes = {
    letterObj: PropTypes.object.isRequired,
}


export default Letter;