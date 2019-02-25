import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LetterWrapper = styled.span`
    display: block;
    height: 1.5rem;
    width: 1.5rem;
    font-size: 2rem;
    margin-left: 1.4rem;
    color: ${({ theme }) => theme.colors.gray};
`

const Letter = ({ letterObj }) => (
    <LetterWrapper>
        {letterObj.isLetterShowed ? letterObj.letter : "__"}
    </LetterWrapper>
);

Letter.propTypes = {
    letterObj: PropTypes.object.isRequired,
}


export default Letter;