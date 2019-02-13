import React from 'react';

const letter = ({ letter }) => (
    <span>   {letter.isShowed ? letter.name : '_ '} </span>
);


export default letter;