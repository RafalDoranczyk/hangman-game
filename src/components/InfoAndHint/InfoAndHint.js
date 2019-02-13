import React from 'react';
import styled from 'styled-components';

const InfoAndHintWrapper = styled.div`
flex-basis: 10%;
display: flex;
flex-flow: column nowrap;
justify-content: space-around;
align-items: center;
background-color: yellow;
`
const infoAndHint = props => {
    return (
        <InfoAndHintWrapper>
            <h3>Category: category</h3>
            <h4>Your hint: hint</h4>
        </InfoAndHintWrapper>
    );
}

export default infoAndHint;