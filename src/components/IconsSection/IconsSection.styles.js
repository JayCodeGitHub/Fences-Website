import styled from "styled-components";

export const Wrapper = styled.section`
    color: ${({ theme }) => theme.white};
    width: 100%;
    background-color: ${({ theme }) => theme.secondary};
    padding: 5vw;
     ${({ theme }) => theme.mq.bigDesktop} {
        padding: 1vw 12vw 1vw 12vw;
    }
`

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.white};
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.xs};
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.xs};
    }
`

export const Title = styled.h2`
    color: ${({ theme }) => theme.white};
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.m};
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.m};
    }
`

export const IconsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    ${({ theme }) => theme.mq.desktop} {
        flex-direction: row;
    }
`

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 10% 0%;
    ${({ theme }) => theme.mq.desktop} {
        padding: 0 5%;
        min-height: 50vh;
        width: 30%;
    }
`

export const Icon = styled.img`
    height: 12rem;
`