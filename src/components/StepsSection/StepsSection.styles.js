import styled from "styled-components"

export const Wrapper = styled.section`
    width: 100%;
    padding: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin: 1vw 0;
    }
    h3 {
        color: ${({ theme }) => theme.primary};
        font-size: ${({ theme }) => theme.font.size.m};
        ${({ theme }) => theme.mq.desktop} {
        margin: 0;
    }
    }
    h4 {
        font-size: ${({ theme }) => theme.font.size.xs};
        text-align: center;
    }
    p {
        font-size: ${({ theme }) => theme.font.size.xs};
        width: 100%;
        text-align: center;
    }
    ${({ theme }) => theme.mq.desktop} {
        div {
            width: 70%;
        }
        padding: 2vw 12vw 2vw 12vw;
    }
`

export const Title = styled.h2`
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.s};
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.m};

    }
`