import styled from "styled-components";

export const Wrapper = styled.div`
    min-height: 100vh;
    padding: 5vw;
    ${({ theme }) => theme.mq.desktop} {
        padding: 2.5vw 5vw 2.5vw 5vw;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`

export const ImageWrapper = styled.div`
    width: 100%;
    margin: 1rem 0;
    border-radius: 5px;
    overflow: hidden;
    ${({ theme }) => theme.mq.desktop} {
        width: 40%;
        height: 27vw;
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        height: 20vw;
        width: 30%;
    } 
`

export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`