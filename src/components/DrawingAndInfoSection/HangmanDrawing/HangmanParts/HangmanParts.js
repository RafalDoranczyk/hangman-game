import styled from 'styled-components';

export const Body = styled.div`
    height: 30%;
    width: .3rem;
    background-color: #D6D6D8;
    position: absolute;
    top: calc(20% + 3rem);
    left: 50%;
    transform: translateX(-50%);
`
export const Head = styled.div`
    position: absolute;
    top: 20%;
    left: 50%;
    height: 3rem;
    width: 3rem;
    transform: translateX(-50%);
    border-radius: 50%;
    border: 1px solid white;
    ::after,::before{
        content: '';
        position: absolute;
        top: 20%;
        width: 10%;
        height: 10%;
        border-radius: 50%;
        background-color: #D6D6D8
    }
    ::after{
        left: 25%;
    
    }
    ::before{
        right: 25%;
    }
`

export const LeftArm = styled.div`
    height: 60%;
    width: .1rem;
    background-color: #D6D6D8;
    position: absolute;
    left: -5%;
    top: 10%;
    transform-origin: top left;
    transform: rotate(-70deg) translateX(-50%);
`

export const LeftLeg = styled.div`
    height: 60%;
    width: .1rem;
    background-color: #D6D6D8;
    position: absolute;
    left: -5%;
    top: 70%;
    transform-origin: top left;
    transform: rotate(-30deg) translateX(-50%);
`

export const RightArm = styled.div`
    height: 60%;
    width: .1rem;
    background-color: #D6D6D8;
    position: absolute;
    left: 50%;
    top: 10%;
    transform-origin: top left;
    transform: rotate(70deg) translateX(-50%);
`