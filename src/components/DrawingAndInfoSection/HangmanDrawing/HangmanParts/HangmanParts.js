import styled from 'styled-components';

export const GallowsBasis = styled.div`
position: absolute;
bottom: 5%;
left: 5%;
height: .3rem;
width: 70%;
background-color: #fff;
`
export const GallowBranch = styled.div`
position: absolute;
height: 90%;
left: 5%;
bottom: 5%;
width: .4rem;
background-color: #fff;
&::after{
    content: '';
    position: absolute;
    top: 0%;
    left: 300%;
    transform: rotate(35deg);
    background-color: #fff;
    width: 100%;
    height: 4rem;
}
`

export const GallowTopBranch = styled.div`
right: 50%;
position: absolute;
left: 5%;
top: 5%;
height: .4rem;
background-color: #fff;
`
export const GallowsNoose = styled.div`
position: absolute;
top: 5%;
left: 50%;
transform: translateX(-50%);
width: .4rem;
bottom: 82.5%;
background-color: #fff;
opacity: ${({ mistakesLeft }) => mistakesLeft <= 6 ? '1' : '0'};
transition: .8s;

`
export const Head = styled.div`
    position: absolute;
    top: 17.5%;
    left: 50%;
    width: 3.5rem;
    height: 3.5rem;
    transform: translate(-50%);
    border-radius: 50%;
    border: .1rem solid white;
    opacity: ${({ mistakesLeft }) => mistakesLeft <= 5 ? '1' : '0'};
    transition: .8s;

    ::after,::before{
        content: '';
        position: absolute;
        top: 20%;
        width: 10%;
        height: 10%;
        border-radius: 50%;
        background-color: white;
    }
    ::after{
        left: 25%;
    
    }
    ::before{
        right: 25%;
    }
`

export const Body = styled.div`
    height: 6rem;
    border-radius: 20%;
    width: .3rem;
    background-color: #fff;
    position: absolute;
    top: calc(17.5% + 3.5rem);
    left: 50%;
    transform: translateX(-50%);
    opacity: ${({ mistakesLeft }) => mistakesLeft <= 4 ? '1' : '0'};
    transition: .8s;

`



export const LeftArm = styled.div`
 position: absolute;
 top: 42.5%;
 left: 50%;
 width: 3rem;
 height: .2rem;
 background-color: #fff;
 transform: translateX(-100%) rotate(-30deg);
 transform-origin: top right;
 border-radius: 30%;
 opacity: ${({ mistakesLeft }) => mistakesLeft <= 3 ? '1' : '0'};
    transition: .8s;
`
export const RightArm = styled.div`
position: absolute;
top: 42.5%;
 right: 50%;
 width: 3rem;
 height: .2rem;
 background-color: #fff;
 transform: translateX(100%) rotate(30deg);
 transform-origin: top left;
 border-radius: 30%;
 opacity: ${({ mistakesLeft }) => mistakesLeft <= 2 ? '1' : '0'};
    transition: .8s;
`

export const LeftLeg = styled.div`
   position: absolute;
   top: calc(17.5% + 3.5rem + 5.8rem);
 left: 50%;
 width: 3.5rem;
 height: .2rem;
 background-color: #fff;
 transform: translateX(-100%) rotate(-50deg);
 transform-origin: top right;
 border-radius: 30%;
 opacity: ${({ mistakesLeft }) => mistakesLeft <= 1 ? '1' : '0'};
    transition: .8s;
`

export const RightLeg = styled.div`
   position: absolute;
   top: calc(17.5% + 3.5rem + 5.8rem);
 right: 50%;
 width: 3.5rem;
 height: .2rem;
 background-color: #fff;
 transform: translateX(100%) rotate(50deg);
 transform-origin: top left;
 border-radius: 30%;
 opacity: ${({ mistakesLeft }) => mistakesLeft <= 0 ? '1' : '0'};
    transition: .8s;
`