import styled from 'styled-components';

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

