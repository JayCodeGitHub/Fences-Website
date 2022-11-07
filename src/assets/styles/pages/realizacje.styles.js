import styled from "styled-components";

export const Wrapper = styled.div`
    min-height: 100vh;
    padding: 5vw;
    ${({ theme }) => theme.mq.desktop} {
        padding: 2.5vw 5vw 2.5vw 5vw;
        display: grid;
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 50px;
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        grid-template-columns: repeat(3, 1fr);
    }

`

export const StyledImage = styled.img`
    width: 100%;
    margin: 1rem 0;
    border-radius: 5px;
    ${({ theme }) => theme.mq.desktop} {
        height: 28vw;
        object-fit: cover;
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        height: 18vw;
    }
`