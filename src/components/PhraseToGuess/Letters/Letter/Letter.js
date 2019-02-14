import React from 'react';

import styled from 'styled-components';

const LetterWrapper = styled.span`
display: block;
height: 2.5rem;
width: 2.5rem;
font-size: 2rem;
/* margin: auto; */
`


const letter = ({ letter }) => {






    return (
        <LetterWrapper>
            {/* {letter.isShowed ? letter.name === " " ? <p>sdsd</p> : letter.name : "_"} */}
            {letter.isShowed ? letter.name : "_"}
        </LetterWrapper>
    );
}


export default letter;