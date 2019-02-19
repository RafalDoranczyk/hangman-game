import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const LetterWrapper = styled.span`
display: block;
height: 1.5rem;
width: 1.5rem;
font-size: 2rem;
margin-left: 1rem;
`


const letter = ({ letterObj }) => {
    return (
        <LetterWrapper>

            {letterObj.isLetterShowed ? letterObj.letter : "_"}
        </LetterWrapper>
    );
}


export default letter;