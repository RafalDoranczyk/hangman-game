import React from 'react';

import styled from 'styled-components';

const LetterWrapper = styled.span`
/* margin: 15px; */
height: 20px;
width: 20px;
/* background-color: blue; */
font-size: 20px;
`

const letter = ({ letter }) => (
    <LetterWrapper>
        {letter.isShowed ? letter.name : '_'}
    </LetterWrapper>
);


export default letter;